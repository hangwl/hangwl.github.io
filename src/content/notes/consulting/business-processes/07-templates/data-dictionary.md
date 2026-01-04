# Data Dictionary Template

## Document Information

| Field | Details |
|-------|---------|
| **Project Name** | [Project Name] |
| **System/Dataset** | [System or Dataset Name] |
| **Version** | 1.0 |
| **Author** | [Name] |
| **Last Updated** | [YYYY-MM-DD] |
| **Status** | Draft / In Review / Approved |

---

## Purpose

This data dictionary defines the data elements, their attributes, and relationships for [System/Dataset Name]. It serves as the authoritative reference for data definitions across the project.

---

## Table of Contents

1. [Data Sources](#data-sources)
2. [Entity Overview](#entity-overview)
3. [Detailed Data Elements](#detailed-data-elements)
4. [Code/Reference Tables](#codereference-tables)
5. [Data Relationships](#data-relationships)
6. [Data Quality Rules](#data-quality-rules)
7. [Glossary](#glossary)

---

## Data Sources

| Source Name | Type | Owner | Refresh Frequency | Access Method |
|-------------|------|-------|-------------------|---------------|
| [Source 1] | Database/File/API | [Team] | Real-time/Daily/Weekly | [Method] |
| [Source 2] | | | | |

---

## Entity Overview

| Entity Name | Description | Record Count | Primary Key | Owner |
|-------------|-------------|--------------|-------------|-------|
| [Entity 1] | [Description] | ~X records | [PK field] | [Team] |
| [Entity 2] | [Description] | ~X records | [PK field] | [Team] |

---

## Detailed Data Elements

### Entity: [Entity Name 1]

**Description:** [What this entity represents]

**Source:** [Where this data comes from]

| # | Field Name | Data Type | Length | Nullable | Default | Description | Example | Business Rules |
|---|------------|-----------|--------|----------|---------|-------------|---------|----------------|
| 1 | id | UUID | 36 | No | Auto | Unique identifier | `abc-123` | System generated |
| 2 | created_at | TIMESClient OrganizationP | - | No | NOW() | Record creation time | `2024-01-15 10:30:00` | UTC timezone |
| 3 | [field_name] | [type] | [len] | Yes/No | [default] | [description] | [example] | [rules] |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

---

### Entity: [Entity Name 2]

**Description:** [What this entity represents]

**Source:** [Where this data comes from]

| # | Field Name | Data Type | Length | Nullable | Default | Description | Example | Business Rules |
|---|------------|-----------|--------|----------|---------|-------------|---------|----------------|
| 1 | | | | | | | | |
| 2 | | | | | | | | |

---

## Code/Reference Tables

### [Reference Table Name 1]

**Description:** [What codes this table contains]

| Code | Description | Active | Effective Date | End Date |
|------|-------------|--------|----------------|----------|
| [Code] | [Description] | Yes/No | [Date] | [Date] |
| | | | | |

---

### [Reference Table Name 2]

| Code | Description | Active |
|------|-------------|--------|
| | | |

---

## Data Relationships

### Entity Relationship Diagram

```
┌─────────────┐       ┌─────────────┐
│  Customer   │──1:N──│   Order     │
│             │       │             │
│ PK: id      │       │ PK: id      │
│             │       │ FK: cust_id │
└─────────────┘       └─────────────┘
                            │
                           1:N
                            │
                      ┌─────────────┐
                      │ Order_Item  │
                      │             │
                      │ PK: id      │
                      │ FK: order_id│
                      └─────────────┘
```

### Relationship Details

| Parent Entity | Child Entity | Relationship | Foreign Key | Cardinality |
|---------------|--------------|--------------|-------------|-------------|
| [Parent] | [Child] | [Description] | [FK field] | 1:1 / 1:N / N:M |
| | | | | |

---

## Data Quality Rules

### Validation Rules

| Rule ID | Entity | Field(s) | Rule Description | Severity |
|---------|--------|----------|------------------|----------|
| DQ-001 | [Entity] | [Field] | [Rule description] | Error/Warning |
| DQ-002 | [Entity] | [Field] | Value must be in reference table | Error |
| DQ-003 | [Entity] | [Field] | Must be unique | Error |

### Data Quality Metrics

| Metric | Target | Current | Measurement Frequency |
|--------|--------|---------|----------------------|
| Completeness | >99% | [%] | Daily |
| Accuracy | >99% | [%] | Weekly |
| Timeliness | <1 hour | [Time] | Real-time |
| Uniqueness | 100% | [%] | Daily |

---

## Data Lineage

### [Key Field/Entity]

```
Source System A ──┐
                  ├──▶ Staging ──▶ Transform ──▶ Target Table
Source System B ──┘
```

| Stage | Process | Transformation | Owner |
|-------|---------|----------------|-------|
| Extract | [Process] | [Description] | [Team] |
| Transform | [Process] | [Description] | [Team] |
| Load | [Process] | [Description] | [Team] |

---

## Glossary

| Term | Definition | Synonyms |
|------|------------|----------|
| [Term] | [Business definition] | [Other names used] |
| | | |

---

## Change Log

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| [Date] | 1.0 | [Name] | Initial version |
| | | | |

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Data Owner | | | |
| Technical Lead | | | |
| Business Analyst | | | |
