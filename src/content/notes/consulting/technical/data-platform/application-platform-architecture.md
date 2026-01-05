# Application Platform Architecture

## **Web Application Foundation (TanStack + SSR)**

![Web Application Foundation](/images/0tYJFX41Lz.png)

### What this diagram represents

This diagram defines the **logical responsibilities and trust boundaries** of the web application layer. It answers the question:

> *“Which components exist, and what is each component allowed to do?”*

It is intentionally **non-deployment-specific** and focuses on **separation of concerns**, not infrastructure.

### Architectural explanation

At the left, **end users interact through a browser over HTTPS**, which is treated as an untrusted environment.

The **TanStack frontend** (React + TanStack Router + TanStack Query) forms the **web application foundation**:

* It is responsible for UI rendering, navigation, and data orchestration.
* It may use SSR for performance and UX, but it remains a **presentation-tier component**.
* It does **not** store secrets, validate credentials, or make authorization decisions.

Authentication is delegated to **external enterprise Identity Providers** using **OIDC** (e.g., Azure AD).
This ensures:

* credentials never pass through application code
* identity is standardized before entering the platform

All data access flows through the **Python backend**, which represents the **primary secure boundary**:

* authentication validation
* authorization and policy enforcement
* tenant isolation (RBAC/ABAC)
* controlled access to the zero-copy data mart
* audit logging

The backend mediates all access to the **AWS zero-copy data mart** (Athena, Redshift, S3), ensuring that:

* no dataset is directly accessible from the browser
* authorization is enforced *before* any query executes

### Key architectural guarantee

> This diagram establishes that **TanStack is a frontend foundation only**, while **Python is the system-of-record for security, authorization, and data access**.

---

## **Secure API & Authorization Layer (Python)**

![Secure API & Authorization Layer](/images/tHjMLv2UpU.png)

### What this diagram represents

This diagram explains **where components run at runtime** and **how requests physically traverse the system**.

It answers the question:

> *“How does a request flow through AWS and which runtime enforces security?”*

### Architectural explanation

The **client layer (browser)** sends requests over HTTPS, which enter the system through **AWS Edge/Ingress** (CloudFront + WAF).
This provides:

* TLS termination
* DDoS protection
* basic request filtering

Requests are routed to a **Node.js SSR application** that hosts the TanStack-based web app:

* server-side rendering
* hydration
* route-level data prefetch
* UI composition

Authentication is handled via **OIDC/SAML IdPs** (e.g., Entra ID, Okta).
The SSR app participates in the auth flow but **does not own identity validation logic**.

For any privileged operation, the SSR app communicates **server-to-server** with the **Python Secure API**.

Inside the Python backend:

* Identity/session/JWT validation occurs first
* Authorization policies (RBAC/ABAC, tenant constraints) are evaluated
* API endpoints act as a **data access façade**
* Authorized queries are executed against AWS data services
* All access generates **audit events** sent to SIEM/logging systems

Post-hydration, the browser may also make API calls directly, but **only through the same secure Python boundary**, using the same authorization rules.

### Key architectural guarantee

> This diagram proves that **no runtime path exists from browser to data mart without passing through the Python authorization layer**.

---

## **Authentication & Data Access Flow**

![Authentication & Data Access Flow](/images/METIVGHTg4.png)

### What this diagram represents

This diagram shows **time-ordered behavior** across systems. It answers:

> *“What actually happens, step by step, when a user loads a protected page and accesses data?”*

This is the **behavioral proof** of the previous two diagrams.

### Architectural explanation

1. **User requests a protected route** (e.g., `/dashboard`)
2. The **Node SSR app** detects no active session and redirects the user to the **OIDC Identity Provider**
3. The user authenticates externally
4. The IdP redirects back with an authorization result
5. The SSR app establishes a **server-managed session** (HttpOnly cookie)

At this point, the user is authenticated.

6. The SSR app begins **server-side data prefetch**

7. It calls the **Python Secure API**, passing the session context

8. The Python API:

   * validates identity
   * evaluates RBAC/ABAC policies
   * enforces tenant isolation

9. An authorized query is executed against the **zero-copy AWS data mart**

10. A scoped result set is returned

11. An audit event is emitted

12. The SSR app renders HTML and embeds the **dehydrated TanStack Query cache**

13. The browser receives rendered HTML

14. **Hydration occurs**, attaching React and TanStack Query

15. Subsequent user interactions (pagination, filtering) result in client-side API calls, still enforced by the Python backend

### Key architectural guarantee

> This flow ensures **consistent authorization for both SSR and client-side interactions**, with full auditability and no privileged logic in the browser.

---

## How these three diagrams work together

* **Web Application Foundation** defines *responsibility and trust boundaries*
* **Secure API & Authorization Layer** shows *runtime placement and enforcement*
* **Authentication & Data Access Flow** demonstrates *correct, secure behavior over time*

Together, they establish an **enterprise-grade application platform architecture** that is:

* secure by design
* identity-driven
* auditable
* scalable
* future-proof