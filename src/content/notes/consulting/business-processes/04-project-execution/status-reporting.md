# Status Reporting

## Overview

Regular status reporting is essential for maintaining transparency, managing expectations, and enabling timely decision-making. This document outlines the status reporting practices for Data and AI engagements.

---

## Reporting Hierarchy

```
Executive Dashboard (Monthly)
└── Steering Committee Report (Monthly)
    └── Weekly Status Report
        └── Daily Standups
            └── Team Task Tracking
```

---

## Weekly Status Report

### Purpose
- Communicate progress to client stakeholders
- Highlight risks, issues, and blockers
- Align on priorities for coming week
- Document decisions and action items

### Frequency and Audience

| Report | Frequency | Primary Audience |
|--------|-----------|------------------|
| Weekly Status | Weekly (Fridays) | Client PM, Project Sponsor |
| Steering Report | Monthly | Executive Sponsors |
| Daily Update | Daily | Delivery team |

### Weekly Report Structure

**1. Executive Summary**
- 2-3 sentence overview of week
- Overall project health (Green/Amber/Red)

**2. Key Accomplishments**
- What was completed this week
- Milestones achieved

**3. Planned Activities**
- What will be done next week
- Key focus areas

**4. Risks and Issues**

| ID | Description | Impact | Probability | Mitigation | Owner | Status |
|----|-------------|--------|-------------|------------|-------|--------|
| R1 | Data access delays | High | Medium | Escalate to sponsor | EM | Open |

**5. Decisions Required**
- Pending decisions
- Recommended options

**6. Action Items**

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Provide data access | Client IT | Jan 15 | In Progress |

**7. Metrics**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Sprint velocity | 40 points | 38 points | 🟢 |
| Defects open | <5 | 3 | 🟢 |
| Budget consumed | 25% | 27% | 🟡 |

---

## RAG Status Definitions

### Overall Project Health

| Status | Definition | Action |
|--------|------------|--------|
| 🟢 **Green** | On track for all objectives | Continue as planned |
| 🟡 **Amber** | Minor issues; recoverable with action | Corrective action underway |
| 🔴 **Red** | Significant issues; requires escalation | Immediate intervention needed |

### Category RAG Assessment

Assess each category separately:

| Category | Green | Amber | Red |
|----------|-------|-------|-----|
| **Scope** | No changes | Minor changes managed | Significant scope creep |
| **Schedule** | On track | <1 week delay | >1 week delay |
| **Budget** | Within budget | <10% variance | >10% variance |
| **Quality** | Meets standards | Minor issues | Major defects |
| **Resources** | Fully staffed | Temporary gaps | Critical gaps |
| **Risks** | Under control | Escalating | Materialized |

---

## Monthly Steering Committee Report

### Purpose
- Strategic oversight of engagement
- Executive-level progress summary
- Major decisions and escalations
- Financial and resource review

### Report Structure

**1. Executive Summary (1 page)**
- Overall status and health
- Key highlights and concerns
- Critical decisions needed

**2. Progress Overview**
- Phase/milestone progress
- Key accomplishments
- Upcoming milestones

**3. Financial Summary**
- Budget status
- Forecast to completion
- Variance analysis

**4. Risk and Issue Summary**
- Top 5 risks
- Critical issues
- Escalations

**5. Resource Status**
- Team utilization
- Resource gaps or changes

**6. Client Satisfaction**
- Feedback summary
- Relationship health

**7. Decisions and Actions**
- Decisions required
- Open action items

---

## Status Meeting Best Practices

### Before the Meeting
- Prepare report 24 hours in advance
- Pre-align with key stakeholders
- Identify discussion topics
- Test any demos

### During the Meeting
- Start with summary, then details
- Focus on issues requiring attention
- Avoid deep technical dives
- Capture decisions and actions
- Time-box discussions

### After the Meeting
- Distribute meeting notes within 24 hours
- Update action items and risks
- Follow up on decisions
- Update project documentation

---

## Escalation Triggers

Escalate to Steering Committee when:
- [ ] Project is trending Red for >1 week
- [ ] Budget variance exceeds 10%
- [ ] Schedule delay exceeds 2 weeks
- [ ] Critical resource unavailable
- [ ] Major scope change requested
- [ ] Significant client relationship issue
- [ ] Quality issue affecting deliverables

---

## Reporting Tools

| Purpose | Tool |
|---------|------|
| Status Reports | PowerPoint / Word |
| Project Tracking | MS Project / Jira |
| Issue/Risk Log | Excel / SharePoint |
| Time Tracking | Time Tracking System |
| Dashboards | Power BI / Tableau |

---

## Related Documents

- [Status Report Template](../07-templates/status-report.md)
- [Risk Register](../07-templates/risk-register.md)
- [Steering Committee Deck Template](../07-templates/steering-committee.md)
