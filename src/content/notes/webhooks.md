---
title: "Webhooks"
links:
  - 'http'
  - 'https'
  - 'rest-api'
---

## Introduction

Webhooks are **user-defined HTTP callbacks** that enable real-time, event-driven communication between applications. When a specific event occurs in a source system, it automatically sends an HTTP POST request with event data to a pre-configured URL endpoint in the destination system.

Unlike traditional APIs where clients repeatedly poll servers for updates, webhooks use a **push model** where the server proactively notifies clients when events occur.

## How Webhooks Work

The webhook workflow follows these steps:

1. **Registration**: The receiving application registers a webhook URL with the source application
2. **Event Trigger**: An event occurs in the source system (e.g., new payment, form submission, code push)
3. **HTTP Request**: The source system sends an HTTP POST request to the registered URL with event data
4. **Processing**: The receiving application processes the webhook payload and takes appropriate action
5. **Response**: The receiver sends an HTTP response (typically 200 OK) to acknowledge receipt

## Webhooks vs Polling

| Aspect | Webhooks | Polling |
|--------|----------|---------|
| **Communication** | Push-based | Pull-based |
| **Efficiency** | High (only when events occur) | Low (constant requests) |
| **Real-time** | Near-instant | Delayed by polling interval |
| **Server Load** | Minimal | High (frequent requests) |
| **Complexity** | Requires public endpoint | Simpler to implement |

## Common Use Cases

Webhooks are widely used for:

- **Payment Processing**: Stripe, PayPal notify applications of payment events
- **Version Control**: GitHub, GitLab trigger CI/CD pipelines on code pushes
- **Communication**: Slack, Discord send notifications for channel events
- **Form Submissions**: Typeform, Google Forms notify backends of new responses
- **E-commerce**: Shopify notifies of order creation, fulfillment, cancellation
- **Monitoring**: Datadog, PagerDuty alert systems of incidents

## Implementation Considerations

### Security

- **Signature Verification**: Validate webhook authenticity using HMAC signatures or tokens
- **HTTPS Only**: Always use encrypted connections to protect data in transit
- **IP Whitelisting**: Restrict webhook sources to known IP addresses when possible
- **Request Validation**: Verify payload structure and content before processing

### Reliability

- **Idempotency**: Handle duplicate webhook deliveries gracefully
- **Retry Logic**: Source systems typically retry failed webhooks with exponential backoff
- **Timeout Handling**: Respond quickly (within 5-10 seconds) to avoid retries
- **Async Processing**: Queue webhook payloads for background processing to respond quickly

### Debugging

- **Logging**: Record all incoming webhook requests for troubleshooting
- **Webhook Testing Tools**: Use services like webhook.site or ngrok for local development
- **Replay Capability**: Store raw payloads to replay events during debugging

## Example Webhook Payload

A typical webhook payload from GitHub for a push event:

```json
{
  "ref": "refs/heads/main",
  "repository": {
    "name": "my-repo",
    "full_name": "user/my-repo",
    "url": "https://github.com/user/my-repo"
  },
  "pusher": {
    "name": "username",
    "email": "user@example.com"
  },
  "commits": [
    {
      "id": "abc123",
      "message": "Fix bug in authentication",
      "timestamp": "2025-10-01T09:30:00Z",
      "author": {
        "name": "Developer",
        "email": "dev@example.com"
      }
    }
  ]
}
```

## Best Practices

- **Acknowledge Quickly**: Return 200 OK immediately, process asynchronously
- **Validate Signatures**: Always verify webhook authenticity before processing
- **Handle Failures Gracefully**: Implement proper error handling and logging
- **Monitor Webhook Health**: Track delivery success rates and processing times
- **Document Webhook Format**: Provide clear documentation for webhook consumers
- **Version Your Webhooks**: Support backward compatibility when changing payload structure
