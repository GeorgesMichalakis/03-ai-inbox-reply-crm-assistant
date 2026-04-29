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
  ]
};
