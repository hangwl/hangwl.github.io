# Data Handling Checklist

---

**Project:** [Project Name]  
**Client:** [Client Name]  
**Prepared By:** [Name]  
**Date:** [Date]

---

## Purpose

This checklist ensures proper handling of client data throughout the engagement lifecycle, from initial receipt through final destruction or return.

---

## Part 1: Pre-Engagement Data Assessment

### Data Inventory

| # | Data Source | Description | Data Type | Sensitivity | Volume | Format |
|---|-------------|-------------|-----------|-------------|--------|--------|
| 1 | | | | H/M/L | | |
| 2 | | | | H/M/L | | |
| 3 | | | | H/M/L | | |

### Data Classification

- [ ] Data types identified and documented
- [ ] Sensitivity levels assigned
- [ ] Personal data (PII) identified
- [ ] Regulated data identified (PDPA, GDPR, etc.)
- [ ] Confidential business data identified

### Regulatory Requirements

| Regulation | Applicable? | Requirements | Compliance Approach |
|------------|-------------|--------------|---------------------|
| PDPA (Singapore) | Yes / No | | |
| GDPR | Yes / No | | |
| Industry-specific | Yes / No | | |
| Client policies | Yes / No | | |

---

## Part 2: Data Protection Agreement

### Contractual Requirements

- [ ] Data protection clauses in SOW/contract
- [ ] Data Processing Agreement (DPA) executed (if required)
- [ ] Confidentiality obligations defined
- [ ] Data retention/destruction terms specified
- [ ] Liability and indemnity terms agreed

### Client Approvals

| Approval | Approver | Date | Reference |
|----------|----------|------|-----------|
| Data access authorization | | | |
| Data transfer approval | | | |
| Data processing approval | | | |

---

## Part 3: Data Receipt and Transfer

### Secure Transfer

- [ ] Secure transfer method agreed with client
- [ ] Encryption requirements defined
- [ ] Transfer protocol documented

| Transfer | Method | Encryption | Date | Verified By |
|----------|--------|------------|------|-------------|
| | SFTP / Encrypted Email / Cloud | Yes/No | | |

### Data Receipt Verification

- [ ] Data received completely
- [ ] Data integrity verified (checksums, row counts)
- [ ] Data matches expected format
- [ ] Receipt acknowledged to client

---

## Part 4: Data Storage

### Storage Location

| Data Set | Storage Location | Access Control | Encryption | Backup |
|----------|------------------|----------------|------------|--------|
| | | | Yes/No | Yes/No |

### Storage Requirements

- [ ] Data stored in approved location only
- [ ] Storage location is secure (access controlled)
- [ ] Encryption at rest enabled (for sensitive data)
- [ ] No data on personal devices
- [ ] No data in unapproved cloud services
- [ ] Backup procedures in place

### Access Control

- [ ] Access limited to authorized team members only
- [ ] Access list documented and approved
- [ ] Access rights follow least privilege principle
- [ ] Access logging enabled

| Team Member | Role | Access Level | Approved By | Date |
|-------------|------|--------------|-------------|------|
| | | Read / Write | | |
| | | Read / Write | | |

---

## Part 5: Data Processing

### Processing Activities

| Activity | Purpose | Data Used | Output | Logged |
|----------|---------|-----------|--------|--------|
| | | | | Yes/No |
| | | | | Yes/No |

### Processing Controls

- [ ] Data used only for agreed purposes
- [ ] Data minimization applied (only necessary data used)
- [ ] Anonymization/pseudonymization applied where possible
- [ ] Processing activities logged
- [ ] No unauthorized copying or export

### Data Quality

- [ ] Data profiling completed
- [ ] Data quality issues documented
- [ ] Data quality issues communicated to client

---

## Part 6: Data Sharing

### Internal Sharing

- [ ] Sharing limited to project team
- [ ] Shared via secure channels only
- [ ] No email attachments for sensitive data

### External Sharing

- [ ] Client approval obtained for any external sharing
- [ ] Third-party data agreements in place
- [ ] Secure transfer methods used

---

## Part 7: Development and Testing

### Non-Production Environments

- [ ] Production data not used in dev/test (or approval obtained)
- [ ] Data masking/anonymization applied for non-prod
- [ ] Test data documented

### Model Development (AI/ML)

- [ ] Training data has proper consent/licensing
- [ ] Bias testing performed
- [ ] Model outputs reviewed for data leakage

---

## Part 8: Incident Management

### Incident Response

- [ ] Team briefed on incident reporting procedures
- [ ] Contact information for escalation available
- [ ] Incident log maintained

### If Incident Occurs

- [ ] Incident reported immediately to EM/EP
- [ ] Client notified as required
- [ ] Incident documented
- [ ] Remediation actions taken
- [ ] Lessons learned captured

---

## Part 9: Project Closure

### Data Return

| Data Set | Return Method | Date | Confirmed By |
|----------|---------------|------|--------------|
| | | | |

### Data Destruction

| Data Set | Location | Destruction Method | Date | Verified By |
|----------|----------|-------------------|------|-------------|
| | | Secure delete / Shred | | |

### Destruction Verification

- [ ] All project data identified
- [ ] Data securely destroyed or returned
- [ ] Destruction confirmation obtained from client
- [ ] No data retained beyond agreed period
- [ ] Backup data included in destruction

### Certification

| Statement | Confirmed |
|-----------|-----------|
| All client data has been returned or securely destroyed | ☐ |
| No copies of client data remain on Firm systems | ☐ |
| All team members confirmed data deletion | ☐ |

---

## Sign-off

### Data Handling Acknowledgment

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Engagement Manager | | | |
| Technical Lead | | | |

### Client Confirmation (Project Close)

| Statement | Client Representative | Date |
|-----------|----------------------|------|
| Data return/destruction confirmed | | |

---

## Related Documents

- [Data Privacy and Security](../05-quality-and-compliance/data-privacy-security.md)
- [Risk Management](../05-quality-and-compliance/risk-management.md)
