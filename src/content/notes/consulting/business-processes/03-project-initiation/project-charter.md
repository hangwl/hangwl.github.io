# Project Charter

## Overview

The Project Charter is a foundational document that formally authorizes the project and provides the project manager with authority to apply resources. This guide explains the purpose and components of an effective project charter.

---

## Purpose of Project Charter

- **Formal Authorization:** Officially sanctions the project
- **Alignment:** Ensures shared understanding of objectives
- **Reference Point:** Serves as baseline for project decisions
- **Stakeholder Buy-in:** Demonstrates executive commitment

---

## Project Charter Components

### 1. Project Information

| Field | Description |
|-------|-------------|
| Project Name | Official project name |
| Project Code | Internal tracking code |
| Client Name | Client organization |
| Prepared By | Document author |
| Date | Creation/revision date |
| Version | Document version |

---

### 2. Project Overview

**Business Context:**
- What is driving this initiative?
- What business problem are we solving?
- What is the strategic importance?

**Project Description:**
- Brief summary of the project
- High-level approach
- Key outcomes expected

---

### 3. Objectives and Success Criteria

**Objectives:**
Define SMART objectives:
- **S**pecific - Clear and unambiguous
- **M**easurable - Quantifiable outcomes
- **A**chievable - Realistic given constraints
- **R**elevant - Aligned with business goals
- **T**ime-bound - Clear timeframe

**Example:**
> Implement a customer churn prediction model achieving >85% accuracy, enabling proactive retention actions for the top 20% at-risk customers within 6 months.

**Success Criteria:**
How will success be measured?
- Technical metrics (accuracy, performance)
- Business metrics (adoption, ROI)
- Project metrics (on time, on budget)

---

### 4. Scope

**In Scope:**
- Specific deliverables
- Business processes covered
- Data sources included
- User groups impacted
- Geographic regions

**Out of Scope:**
- Explicit exclusions
- Future phase items
- Related but separate work

**Assumptions:**
- Client will provide data access within 2 weeks
- Required SMEs will be available 8 hours/week
- Existing infrastructure is sufficient

**Constraints:**
- Fixed budget of $XXX
- Must complete by [date]
- Cannot modify source systems

---

### 5. Deliverables

| Deliverable | Description | Due Date |
|-------------|-------------|----------|
| Discovery Report | Current state assessment and recommendations | Week 4 |
| Solution Design | Technical architecture and specifications | Week 8 |
| Working Prototype | Initial model with core features | Week 12 |
| Production Deployment | Fully deployed solution | Week 16 |
| Documentation | Technical and user documentation | Week 18 |

---

### 6. Timeline and Milestones

| Phase | Duration | Start | End | Key Milestone |
|-------|----------|-------|-----|---------------|
| Discovery | 4 weeks | Week 1 | Week 4 | Discovery Report Approved |
| Design | 4 weeks | Week 5 | Week 8 | Design Sign-off |
| Build | 6 weeks | Week 9 | Week 14 | Development Complete |
| Test | 2 weeks | Week 15 | Week 16 | UAT Sign-off |
| Deploy | 2 weeks | Week 17 | Week 18 | Go-Live |

---

### 7. Budget

| Category | Amount | Notes |
|----------|--------|-------|
| Firm Professional Fees | $XXX,XXX | Based on SOW |
| Technology/Tools | $XX,XXX | Licenses, cloud costs |
| Travel & Expenses | $XX,XXX | Estimated |
| Contingency | $XX,XXX | 10% of total |
| **Total** | **$XXX,XXX** | |

---

### 8. Organization Structure

**Consulting Team:**
- Engagement Partner: [Name]
- Engagement Manager: [Name]
- Technical Lead: [Name]
- Team Members: [Names]

**Client Team:**
- Executive Sponsor: [Name]
- Project Sponsor: [Name]
- Project Manager: [Name]
- SMEs: [Names/Roles]

---

### 9. Governance

**Steering Committee:**
- Composition: [Members]
- Frequency: Monthly
- Purpose: Strategic decisions, issue escalation

**Project Governance:**
- Weekly status meetings
- Bi-weekly sprint reviews
- Monthly steering committees

**Decision Rights:**
| Decision Type | Authority |
|---------------|-----------|
| Day-to-day project | Project Manager |
| Scope changes <$X | Engagement Manager |
| Scope changes >$X | Steering Committee |
| Budget changes | Steering Committee |
| Go/No-Go | Executive Sponsor |

---

### 10. Risks and Dependencies

**Key Risks:**
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Data quality issues | High | Medium | Early data profiling |
| Resource availability | Medium | Medium | Identify backups |
| Integration delays | High | Low | Early technical spikes |

**Dependencies:**
| Dependency | Owner | Due Date | Status |
|------------|-------|----------|--------|
| Data access | Client IT | Week 2 | Pending |
| Environment setup | Client IT | Week 3 | In Progress |
| SME availability | Client PM | Ongoing | Confirmed |

---

### 11. Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Client Executive Sponsor | | | |
| Client Project Sponsor | | | |
| Firm Engagement Partner | | | |
| Firm Engagement Manager | | | |

---

## Related Documents

- [Project Kickoff Guide](../03-project-initiation/kickoff-guide.md)
- [Project Charter Template](../07-templates/project-charter.md)
- [Risk Register](../07-templates/risk-register.md)
