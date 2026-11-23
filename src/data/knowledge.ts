export const knowledgeArticles = [
  {
    "id": "suppression",
    "title": "Global suppression policy",
    "summary": "Hard bounces, complaints, withdrawals, and legal suppressions are checked before every send.",
    "content": "Suppression wins over campaign membership and overrides require a separately audited permission.",
    "tags": [
      "suppression",
      "bounce",
      "complaint"
    ]
  },
  {
    "id": "send-safety",
    "title": "Campaign send safety",
    "summary": "A campaign requires an approved content version, audience snapshot, test delivery, and rate plan.",
    "content": "Idempotency keys prevent duplicate batches and a kill switch halts unsent recipients.",
    "tags": [
      "campaign",
      "approval",
      "batch",
      "idempotency"
    ]
  },
  {
    "id": "reputation",
    "title": "Sending reputation",
    "summary": "Domain health combines complaint, bounce, deferral, and engagement signals by provider.",
    "content": "Automated throttles are conservative and every change is visible to operators.",
    "tags": [
      "reputation",
      "domain",
      "complaint",
      "bounce"
    ]
  }
];
