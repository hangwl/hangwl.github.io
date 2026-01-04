# Sprint Planning Guide

## Overview

Sprint planning is a key ceremony in Agile delivery that sets the direction for each sprint. This guide covers how to effectively plan and execute sprints in Data and AI engagements.

---

## Sprint Basics

### Sprint Duration

| Project Type | Recommended Sprint Length |
|--------------|--------------------------|
| Discovery/Assessment | 1 week |
| Development | 2 weeks |
| Complex Integration | 2-3 weeks |
| Maintenance/Support | 1-2 weeks |

### Sprint Cadence

```
Sprint Planning (Day 1)
    ↓
Daily Standups (Daily)
    ↓
Sprint Execution (Days 1-N)
    ↓
Sprint Review (Last Day)
    ↓
Retrospective (Last Day)
    ↓
Next Sprint Planning
```

---

## Sprint Planning Meeting

### Purpose
- Select work for the sprint from the backlog
- Define sprint goal
- Create sprint backlog
- Commit to deliverables

### Attendees
- Product Owner / Client Representative
- Scrum Master / Project Manager
- Development Team
- Technical Lead

### Duration
- 2-4 hours for a 2-week sprint
- Proportionally shorter for 1-week sprints

---

## Sprint Planning Agenda

| Time | Activity | Owner |
|------|----------|-------|
| 15 min | Review sprint goal and priorities | Product Owner |
| 30 min | Review and refine top backlog items | Team |
| 60 min | Estimate and select sprint items | Team |
| 30 min | Task breakdown for selected items | Team |
| 15 min | Confirm sprint commitment | Team |

---

## Before Sprint Planning

### Product Owner Preparation
- [ ] Backlog is prioritized
- [ ] Top items are refined and ready
- [ ] Acceptance criteria defined
- [ ] Dependencies identified

### Team Preparation
- [ ] Previous sprint completed/closed
- [ ] Velocity calculated
- [ ] Capacity determined (holidays, leave)
- [ ] Technical debt assessed

---

## Sprint Planning Steps

### Step 1: Define Sprint Goal

**Good Sprint Goals:**
- Specific and measurable
- Achievable within sprint
- Aligned with project objectives
- Valuable to stakeholders

**Example:**
> "Complete data pipeline for customer transactions, enabling analysts to run churn predictions on live data."

---

### Step 2: Review Backlog Items

For each candidate item, confirm:
- [ ] Clear description and acceptance criteria
- [ ] Dependencies identified and resolved
- [ ] Technical approach understood
- [ ] Appropriately sized (fits in sprint)

---

### Step 3: Estimate and Select

**Estimation Techniques:**

| Technique | Best For |
|-----------|----------|
| **Planning Poker** | Team consensus on story points |
| **T-Shirt Sizing** | Quick relative sizing |
| **Time-Based** | Tasks with known effort |

**Selection Guidelines:**
- Don't exceed team velocity
- Account for reduced capacity
- Include buffer for unknowns
- Balance feature work and tech debt

---

### Step 4: Task Breakdown

For each selected item:
- Break into tasks (4-8 hours each)
- Identify task dependencies
- Assign initial owners
- Flag blockers or risks

---

### Step 5: Commit to Sprint

**Sprint Commitment Checklist:**
- [ ] Team agrees sprint goal is achievable
- [ ] All selected items are understood
- [ ] Capacity matches workload
- [ ] No major blockers identified
- [ ] Dependencies are managed

---

## Sprint Backlog Template

| ID | User Story | Points | Tasks | Owner | Status |
|----|------------|--------|-------|-------|--------|
| US-101 | As a..., I want... | 5 | Task 1, Task 2 | [Name] | To Do |
| US-102 | As a..., I want... | 3 | Task 1, Task 2, Task 3 | [Name] | To Do |

---

## Capacity Planning

### Calculate Available Capacity

```
Team Capacity = Σ (Team Member Days × Focus Factor)

Where:
- Team Member Days = Working days in sprint - Leave days
- Focus Factor = 0.6-0.8 (accounts for meetings, support, etc.)
```

### Example

| Team Member | Sprint Days | Leave | Available | Focus | Capacity |
|-------------|-------------|-------|-----------|-------|----------|
| Dev 1 | 10 | 0 | 10 | 0.7 | 7 days |
| Dev 2 | 10 | 2 | 8 | 0.7 | 5.6 days |
| **Total** | | | | | **12.6 days** |

---

## Common Sprint Planning Issues

| Issue | Solution |
|-------|----------|
| **Items not ready** | Enforce backlog refinement |
| **Over-commitment** | Use historical velocity |
| **Unclear requirements** | Involve Product Owner |
| **Dependencies unresolved** | Flag in previous sprint |
| **Unbalanced workload** | Cross-train team members |

---

## Sprint Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **Velocity** | Points completed per sprint | Stable or improving |
| **Commitment Rate** | Committed vs. completed | >80% |
| **Scope Change** | Items added/removed mid-sprint | <10% |
| **Carry-over** | Incomplete items from prior sprint | <20% |

---

## Related Documents

- [Delivery Methodology](delivery-methodology.md)
- [Status Reporting](status-reporting.md)
- [Change Management](change-management.md)
