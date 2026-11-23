import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "dispatch",
  name: "Dispatch",
  category: "Revenue",
  tagline: "Campaign email at cost, on reputation you build.",
  description: "A self-hosted campaign-email control plane for audiences, templates, approvals, delivery events, and suppression.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/dispatch",
  nav: [
  {
    "label": "Campaigns",
    "badge": "4"
  },
  {
    "label": "Audience"
  },
  {
    "label": "Templates"
  },
  {
    "label": "Deliveries"
  },
  {
    "label": "Reputation"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "messaging_admin", label: "Messaging administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "campaign_manager", label: "Campaign manager" },
  ],
  ai: {
    name: "Dispatch knowledge guide",
    description: "Ask grounded questions about audience lists and segmentation, template versioning and approval, provider-neutral send orchestration, or operating policy.",
    systemPrompt: "You are Dispatch's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain global suppression policy.","Explain campaign send safety.","Explain sending reputation."],
  },
};
