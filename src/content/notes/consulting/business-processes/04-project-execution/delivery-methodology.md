# Delivery Methodology

## Overview

This document outlines the delivery methodologies used in Data and AI engagements, providing guidance on selecting and applying the appropriate approach.

---

## Methodology Options

### 1. Agile / Scrum

**Best For:**
- Evolving requirements
- Innovation and experimentation
- Product development
- Client wants early and frequent visibility

**Characteristics:**
- Iterative and incremental delivery
- Time-boxed sprints (typically 2 weeks)
- Continuous feedback and adaptation
- Self-organizing teams
- Working software over documentation

**Key Ceremonies:**
| Ceremony | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| Sprint Planning | Start of sprint | 2-4 hours | Plan sprint work |
| Daily Standup | Daily | 15 min | Sync and blockers |
| Sprint Review | End of sprint | 1-2 hours | Demo and feedback |
| Retrospective | End of sprint | 1 hour | Process improvement |
| Backlog Grooming | Weekly | 1 hour | Refine backlog |

**Artifacts:**
- Product Backlog
- Sprint Backlog
- Increment (working deliverable)
- Burndown Chart

---

### 2. Waterfall

**Best For:**
- Well-defined, stable requirements
- Regulatory/compliance projects
- Fixed-scope contracts
- Sequential dependencies

**Characteristics:**
- Linear, sequential phases
- Comprehensive upfront planning
- Formal phase gate reviews
- Documentation-heavy

**Phases:**
```
Requirements → Design → Development → Testing → Deployment → Maintenance
```

**Key Activities per Phase:**
| Phase | Key Activities | Deliverables |
|-------|----------------|--------------|
| Requirements | Gather, document, approve requirements | Requirements Document |
| Design | System architecture, detailed design | Design Document |
| Development | Build solution | Working code |
| Testing | Unit, integration, UAT | Test Results |
| Deployment | Release to production | Deployed solution |
| Maintenance | Support and enhancements | Ongoing support |

---

### 3. Hybrid

**Best For:**
- Large programs with mixed work types
- Client comfort with traditional reporting
- Need for flexibility within structure

**Characteristics:**
- Waterfall for overall program management
- Agile for development sprints
- Defined phase gates with iterative delivery
- Balanced documentation

**Structure:**
```
Program Level: Waterfall phases and gates
↓
Project Level: Agile sprints within phases
```

---

## Data and AI Specific Methodology

### CRISP-DM (Cross-Industry Standard Process for Data Mining)

Standard methodology for data science and analytics projects:

```
1. Business Understanding
   ↓
2. Data Understanding
   ↓
3. Data Preparation ←→ (Iterative)
   ↓
4. Modeling ←→ (Iterative)
   ↓
5. Evaluation
   ↓
6. Deployment
```

**Phase Details:**

| Phase | Activities | Outputs |
|-------|------------|---------|
| Business Understanding | Define objectives, assess situation, determine goals | Business requirements, success criteria |
| Data Understanding | Collect, describe, explore, verify data | Data inventory, quality report |
| Data Preparation | Select, clean, construct, integrate, format | Analysis-ready dataset |
| Modeling | Select techniques, build, assess models | Trained models, evaluation metrics |
| Evaluation | Evaluate results, review process, determine next steps | Model evaluation report |
| Deployment | Plan, deploy, monitor, maintain | Production model, documentation |

---

## Project Phases for Data and AI

### Mapping CRISP-DM to Engagement Phases

| Engagement Phase | CRISP-DM Phase | Focus |
|------------------|----------------|-------|
| **Discovery** | Business Understanding<br>Data Understanding | Define problem, assess data feasibility |
| **Design** | Data Preparation (Plan)<br>Modeling (Strategy) | Architecture, data pipeline design, model selection |
| **Build** | Data Preparation (Exec)<br>Modeling (Train/Test) | Data engineering, model training, validation |
| **Deploy** | Evaluation<br>Deployment | Business acceptance, productionization |
| **Operate** | Deployment (Monitor) | Monitoring, retraining, maintenance |

---

### Typical Engagement Structure

**Phase 1: Discovery (2-4 weeks)**
- Stakeholder interviews
- Current state assessment
- Data landscape review
- Use case prioritization
- Feasibility analysis

**Deliverables:**
- Discovery Report
- Data Assessment
- Prioritized Use Case Backlog
- Recommended Approach

---

**Phase 2: Design (2-4 weeks)**
- Solution architecture
- Data pipeline design
- Model approach selection
- Technology selection
- Infrastructure planning

**Deliverables:**
- Solution Design Document
- Technical Architecture
- Data Model
- Implementation Plan

---

**Phase 3: Build (4-12 weeks)**
- Data engineering
- Model development
- Integration development
- Testing
- Documentation

**Deliverables:**
- Working solution
- Test results
- Technical documentation
- User guides

---

**Phase 4: Deploy (1-2 weeks)**
- Production deployment
- Performance tuning
- Monitoring setup
- User training

**Deliverables:**
- Production deployment
- Operations runbook
- Training materials

---

**Phase 5: Operate (Ongoing)**
- Model monitoring
- Performance tracking
- Maintenance and updates
- Continuous improvement

**Deliverables:**
- Monthly performance reports
- Model retraining (as needed)
- Enhancement backlog

---

## Methodology Selection Guide

| Factor | Agile | Waterfall | Hybrid |
|--------|-------|-----------|--------|
| Requirements clarity | Low | High | Medium |
| Change likelihood | High | Low | Medium |
| Client involvement | High | Low | Medium |
| Risk tolerance | High | Low | Medium |
| Contract type | T&M | Fixed Fee | Either |
| Team experience | High | Any | High |
| Regulatory needs | Low | High | Medium |

---

## Related Documents

- [Sprint Planning Guide](../04-project-execution/sprint-planning.md)
- [Status Reporting](../04-project-execution/status-reporting.md)
- [Change Management](../04-project-execution/change-management.md)
