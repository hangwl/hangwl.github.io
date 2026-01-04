# Risk Management

## Overview

Effective risk management is essential for project success. This document outlines the approach to identifying, assessing, and managing risks throughout Data and AI engagements.

---

## Risk Management Process

```
1. Risk Identification → 2. Risk Assessment → 3. Response Planning → 4. Monitoring & Control
         ↑                                                                    ↓
         └────────────────────── Continuous Process ──────────────────────────┘
```

---

## 1. Risk Identification

### Common Risk Categories

| Category | Example Risks |
|----------|---------------|
| **Technical** | Technology complexity, integration challenges, performance issues |
| **Data** | Data quality, availability, access, privacy |
| **Resource** | Skills gaps, availability, turnover |
| **Schedule** | Dependencies, estimation errors, client delays |
| **Scope** | Scope creep, unclear requirements, changing priorities |
| **Client** | Stakeholder alignment, decision delays, organizational change |
| **Commercial** | Budget overruns, pricing pressure, collection issues |
| **External** | Regulatory changes, market shifts, vendor issues |

### Identification Techniques

- **Brainstorming:** Team sessions to identify risks
- **Checklists:** Standard risk checklists by project type
- **Expert Judgment:** Leverage experienced team members
- **Historical Review:** Learn from similar past projects
- **Assumption Analysis:** Test project assumptions
- **SWOT Analysis:** Strengths, weaknesses, opportunities, threats

---

## 2. Risk Assessment

### Probability Scale

| Level | Probability | Description |
|-------|-------------|-------------|
| 1 | Very Low | <10% chance of occurring |
| 2 | Low | 10-30% chance |
| 3 | Medium | 30-50% chance |
| 4 | High | 50-70% chance |
| 5 | Very High | >70% chance |

### Impact Scale

| Level | Impact | Description |
|-------|--------|-------------|
| 1 | Very Low | Minimal impact, easily absorbed |
| 2 | Low | Minor impact on scope/schedule/budget |
| 3 | Medium | Moderate impact, requires management attention |
| 4 | High | Significant impact on project success |
| 5 | Very High | Severe impact, threatens project viability |

### Risk Score Matrix

```
                    IMPACT
         1     2     3     4     5
    5 |  5  | 10  | 15  | 20  | 25 |
P   4 |  4  |  8  | 12  | 16  | 20 |
R   3 |  3  |  6  |  9  | 12  | 15 |
O   2 |  2  |  4  |  6  |  8  | 10 |
B   1 |  1  |  2  |  3  |  4  |  5 |
```

**Risk Score = Probability × Impact**

### Risk Priority

| Score | Priority | Action |
|-------|----------|--------|
| 16-25 | Critical | Immediate action required, escalate |
| 9-15 | High | Active management required |
| 4-8 | Medium | Regular monitoring |
| 1-3 | Low | Periodic review |

---

## 3. Response Planning

### Response Strategies

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **Avoid** | Eliminate the risk by changing approach | High impact, feasible alternative exists |
| **Mitigate** | Reduce probability or impact | Most common strategy |
| **Transfer** | Shift risk to third party | Financial, contractual risks |
| **Accept** | Acknowledge and monitor | Low priority, cost of response exceeds benefit |
| **Escalate** | Elevate to higher authority | Beyond project team control |

### Response Planning Template

For each significant risk, document:
- Risk description
- Risk owner
- Response strategy
- Specific mitigation actions
- Trigger indicators
- Contingency plan
- Residual risk

---

## 4. Monitoring and Control

### Ongoing Activities

- **Regular Reviews:** Weekly risk review in team meetings
- **Trigger Monitoring:** Watch for risk trigger indicators
- **Risk Reassessment:** Update probability/impact as situation evolves
- **New Risk Identification:** Continuously identify emerging risks
- **Response Effectiveness:** Evaluate if mitigations are working

### Escalation Criteria

Escalate to Steering Committee when:
- Critical risk (score 16+) identified
- Risk materializes into major issue
- Mitigation not effective
- New critical risk emerges
- Risk beyond project team control

---

## Risk Register Template

| ID | Category | Description | Prob | Impact | Score | Response | Mitigation | Owner | Status |
|----|----------|-------------|------|--------|-------|----------|------------|-------|--------|
| R001 | Data | Client data may have quality issues | 4 | 4 | 16 | Mitigate | Early data profiling | Tech Lead | Open |
| R002 | Resource | Key SME availability | 3 | 3 | 9 | Mitigate | Identify backup, schedule early | PM | Open |

---

## Data and AI Specific Risks

| Risk | Mitigation |
|------|------------|
| **Data not available on time** | Early access requests, parallel workstreams |
| **Data quality insufficient** | Data profiling, quality improvement phase |
| **Model performance not meeting targets** | Iterative approach, fallback options |
| **Model bias or fairness issues** | Bias testing, diverse training data |
| **Production infrastructure gaps** | Early technical spike, infrastructure assessment |
| **User adoption resistance** | Change management, early user involvement |
| **Model drift post-deployment** | Monitoring, retraining processes |

---

## Issue Management

When risks materialize, they become issues:

**Issue vs. Risk:**
- **Risk:** Potential future event
- **Issue:** Current problem requiring resolution

**Issue Priority:**
| Priority | Response Time | Example |
|----------|---------------|---------|
| Critical | Immediate | Blocking project progress |
| High | 24-48 hours | Significant impact |
| Medium | 1 week | Manageable impact |
| Low | As capacity allows | Minor inconvenience |

---

## Related Documents

- [Risk Register Template](../07-templates/risk-register.md)
- [Issue Log Template](../07-templates/issue-log.md)
- [Quality Assurance](../05-quality-and-compliance/quality-assurance.md)
