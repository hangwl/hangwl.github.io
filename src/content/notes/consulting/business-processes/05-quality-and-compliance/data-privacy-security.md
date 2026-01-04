# Data Privacy and Security

## Overview

Data privacy and security are critical considerations for Data and AI engagements. This document outlines the requirements and best practices for handling client data responsibly.

---

## Regulatory Landscape

### Key Regulations

| Regulation | Jurisdiction | Key Requirements |
|------------|--------------|------------------|
| **PDPA** | Singapore | Consent, purpose limitation, data protection |
| **GDPR** | EU/EEA | Broad data subject rights, strict processing rules |
| **CCPA** | California, USA | Consumer rights, disclosure requirements |
| **HIPAA** | USA (Healthcare) | PHI protection, security standards |
| **PCI-DSS** | Global (Payment) | Cardholder data security |

### Singapore PDPA Requirements

Key obligations under Personal Data Protection Act:
1. **Consent Obligation:** Obtain consent before collecting/using data
2. **Purpose Limitation:** Use data only for stated purposes
3. **Notification Obligation:** Inform individuals about purposes
4. **Access and Correction:** Allow individuals to access/correct data
5. **Accuracy Obligation:** Ensure data is accurate and complete
6. **Protection Obligation:** Protect data with reasonable security
7. **Retention Limitation:** Cease retention when no longer needed
8. **Transfer Limitation:** Ensure adequate protection for transfers
9. **Openness Obligation:** Make policies available
10. **Do Not Call:** Respect DNC registry

---

## Data Classification

### Classification Levels

| Level | Description | Examples | Handling |
|-------|-------------|----------|----------|
| **Restricted** | Highly sensitive, severe impact if disclosed | PII, health data, credentials | Encrypted, strict access |
| **Confidential** | Sensitive business data | Financial data, strategy docs | Access controls, secure storage |
| **Internal** | Internal use only | Policies, internal comms | Limited external sharing |
| **Public** | Can be shared freely | Marketing materials | Standard handling |

### Personal Data Categories

| Category | Examples | Sensitivity |
|----------|----------|-------------|
| **PII** | Name, NRIC, address, phone | High |
| **Financial** | Bank accounts, income | High |
| **Health** | Medical records, conditions | Very High |
| **Biometric** | Fingerprints, facial data | Very High |
| **Behavioral** | Browsing history, purchases | Medium-High |
| **Location** | GPS data, travel history | Medium-High |

---

## Data Handling Requirements

### Before Engagement

- [ ] Identify data types and sensitivity
- [ ] Review client data policies
- [ ] Assess regulatory requirements
- [ ] Define data handling protocols
- [ ] Execute data protection agreement (if required)
- [ ] Complete security assessment

### During Engagement

- [ ] Access only necessary data
- [ ] Use secure channels for data transfer
- [ ] Store data in approved locations only
- [ ] Apply appropriate access controls
- [ ] Log data access and processing
- [ ] Report any incidents immediately

### After Engagement

- [ ] Return or securely delete client data
- [ ] Confirm data destruction with client
- [ ] Document data handling summary
- [ ] Archive only what is required
- [ ] Maintain audit trail

---

## Security Best Practices

### Data in Transit

- Use encrypted connections (TLS/SSL)
- Avoid email for sensitive data
- Use secure file transfer (SFTP, encrypted cloud)
- Verify recipient before sending

### Data at Rest

- Encrypt sensitive data
- Use approved storage locations
- Apply access controls
- Enable audit logging
- Regular backup

### Data Processing

- Minimize data collected
- Anonymize/pseudonymize where possible
- Apply data masking in non-production
- Document processing activities
- Validate data accuracy

### Access Control

- Principle of least privilege
- Role-based access
- Regular access reviews
- Prompt deprovisioning
- Multi-factor authentication

---

## AI/ML Specific Considerations

### Model Development

| Consideration | Best Practice |
|---------------|---------------|
| **Training Data** | Ensure proper consent and licensing |
| **Bias** | Test for and mitigate discriminatory outcomes |
| **Explainability** | Document model decision factors |
| **Data Minimization** | Use only necessary features |
| **Synthetic Data** | Consider for sensitive use cases |

### Model Deployment

| Consideration | Best Practice |
|---------------|---------------|
| **Inference Data** | Protect input data to models |
| **Model Security** | Protect model from extraction/attack |
| **Logging** | Log predictions for audit |
| **Monitoring** | Detect data drift and anomalies |

---

## Incident Response

### If Data Breach Occurs

1. **Contain:** Stop the breach, secure systems
2. **Assess:** Determine scope and impact
3. **Report:** Notify engagement leadership immediately
4. **Notify:** Inform client as required
5. **Remediate:** Fix vulnerabilities
6. **Document:** Record incident details
7. **Review:** Conduct post-incident analysis

### Reporting Obligations

| Regulation | Reporting Requirement |
|------------|----------------------|
| PDPA (Singapore) | Notify PDPC within 3 days if significant harm |
| GDPR | Notify within 72 hours |
| Client Contract | Per contractual terms |

---

## Compliance Checklist

### Project Setup
- [ ] Data classification completed
- [ ] Regulatory requirements identified
- [ ] Data protection impact assessment (if required)
- [ ] Data handling protocols defined
- [ ] Team trained on requirements

### Ongoing
- [ ] Access controls in place
- [ ] Data handling protocols followed
- [ ] Incidents reported promptly
- [ ] Regular compliance reviews

### Project Close
- [ ] Data returned/destroyed
- [ ] Destruction confirmation obtained
- [ ] Compliance documentation archived

---

## Related Documents

- [Risk Management](../05-quality-and-compliance/risk-management.md)
- [Quality Assurance](../05-quality-and-compliance/quality-assurance.md)
- [Data Handling Checklist](../07-templates/data-handling-checklist.md)
