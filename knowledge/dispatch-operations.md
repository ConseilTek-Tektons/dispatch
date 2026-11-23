# Dispatch operations knowledge

## Global suppression policy

Hard bounces, complaints, withdrawals, and legal suppressions are checked before every send.

Suppression wins over campaign membership and overrides require a separately audited permission.

## Campaign send safety

A campaign requires an approved content version, audience snapshot, test delivery, and rate plan.

Idempotency keys prevent duplicate batches and a kill switch halts unsent recipients.

## Sending reputation

Domain health combines complaint, bounce, deferral, and engagement signals by provider.

Automated throttles are conservative and every change is visible to operators.

## Product boundary

Dispatch is not an email-delivery network. Amazon SES, Azure Communication Services, or another provider still sends mail and governs network reputation limits.
