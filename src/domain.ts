import type { DomainConfig } from "./automation";

export const domainConfig: DomainConfig = {
  "slug": "03-ai-inbox-reply-crm-assistant",
  "title": "AI Inbox Reply CRM Assistant",
  "tagline": "Prioritizes email, drafts replies, creates CRM updates, and schedules follow-up reminders.",
  "workflow": "Inbox triage and reply drafting",
  "audience": "Founders, sales reps, and service businesses",
  "itemNoun": "email",
  "itemPlural": "emails",
  "primaryAction": "Draft reply",
  "accent": "#7c3aed",
  "businessGoal": "Keep important conversations moving without letting routine email consume the day.",
  "integrations": [
    "Gmail",
    "Outlook",
    "HubSpot",
    "Pipedrive",
    "Google Sheets",
    "Zapier"
  ],
  "routes": [
    "Reply now",
    "Sales follow-up",
    "Finance review",
    "Newsletter/archive"
  ],
  "categories": [
    {
      "name": "Hot prospect",
      "keywords": [
        "proposal",
        "contract",
        "budget",
        "call",
        "timeline"
      ],
      "route": "Sales follow-up",
      "boost": 28
    },
    {
      "name": "Client request",
      "keywords": [
        "can you",
        "update",
        "status",
        "deliverable"
      ],
      "route": "Reply now",
      "boost": 15
    },
    {
      "name": "Finance",
      "keywords": [
        "invoice",
        "payment",
        "receipt",
        "wire"
      ],
      "route": "Finance review",
      "boost": 12
    },
    {
      "name": "Low priority",
      "keywords": [
        "newsletter",
        "webinar",
        "unsubscribe"
      ],
      "route": "Newsletter/archive",
      "boost": -12
    }
  ],
  "positiveKeywords": [
    "proposal",
    "approved",
    "contract",
    "call",
    "payment"
  ],
  "riskKeywords": [
    "late",
    "angry",
    "cancel",
    "refund",
    "overdue"
  ],
  "outputLabels": [
    "Reply draft",
    "CRM update",
    "Reminder payload"
  ],
  "sampleItems": [
    {
      "id": "mail-301",
      "title": "Can we review the proposal tomorrow?",
      "source": "Gmail",
      "customer": "Olivia at MarketForge",
      "owner": "Founder",
      "value": 15000,
      "urgency": 82,
      "description": "The team approved the budget. Can we jump on a call tomorrow to review the contract and implementation timeline?",
      "tags": [
        "proposal",
        "budget",
        "contract"
      ],
      "receivedAt": "2026-04-29T08:33:00Z"
    },
    {
      "id": "mail-302",
      "title": "Invoice payment confirmation",
      "source": "Outlook",
      "customer": "Keystone Labs",
      "owner": "Ops",
      "value": 2600,
      "urgency": 46,
      "description": "Please confirm receipt of the wire payment and send a receipt for our records.",
      "tags": [
        "payment",
        "receipt"
      ],
      "receivedAt": "2026-04-29T09:12:00Z"
    },
    {
      "id": "mail-303",
      "title": "Weekly marketing newsletter",
      "source": "Gmail",
      "customer": "Vendor newsletter",
      "owner": "Unassigned",
      "value": 0,
      "urgency": 8,
      "description": "Join our webinar and read the weekly newsletter about general productivity tips.",
      "tags": [
        "newsletter"
      ],
      "receivedAt": "2026-04-29T12:22:00Z"
    }
  ],
  "demo": {
    "beforeTitle": "Manual inbox triage and reply drafting",
    "beforeState": [
      "Emails arrive from Gmail, Outlook, HubSpot and are reviewed one by one.",
      "The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.",
      "High-value or risky emails can sit in the same queue as low-value work, so follow-up quality depends on who notices first."
    ],
    "whatWeProvide": [
      "A deployable React and Express workflow app tailored to Founders, sales reps, and service businesses.",
      "An AI scoring and routing engine for emails, with deterministic fallback mode and optional live OpenAI Responses API review.",
      "Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Gmail, Outlook, HubSpot, Pipedrive, Google Sheets, Zapier.",
      "Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples."
    ],
    "afterTitle": "Automated inbox triage and reply drafting",
    "afterState": [
      "Emails are classified, scored, routed to Reply now, and prepared for review in seconds.",
      "The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.",
      "Approved work is pushed to Gmail and Outlook, keeping the source workflow and downstream records aligned."
    ],
    "demoFlow": [
      "Open the dashboard and show the client the incoming emails queue.",
      "Select the highest-value sample email and explain the before state: manual review, copy/paste, and slow routing.",
      "Click \"Draft reply\" to run deterministic AI automation, or enable live OpenAI review if an API key is configured.",
      "Review the score, route, confidence, timeline, and generated outputs with the client.",
      "Click a mock integration button to show exactly what would be sent to Gmail, Zapier, Make, n8n, or the client tool stack.",
      "Close with the after state: faster response time, cleaner records, and a human approval lane for sensitive work."
    ],
    "successMetrics": [
      "Manual review steps reduced",
      "Average response time improved",
      "High-priority items routed faster",
      "Records updated consistently",
      "Human approval preserved for risky cases"
    ],
    "clientOffer": "I will replace the demo data and mock adapters with your real Gmail, Outlook, HubSpot setup, connect the API credentials, tune the routing rules, and deploy the workflow for your team."
  }
};
