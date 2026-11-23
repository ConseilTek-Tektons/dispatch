import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "REVENUE · OPERATIONS",
  heading: "Dispatch keeps the operating record visible, governed, and ready for action.",
  summary: "Audience lists and segmentation, Template versioning and approval, Provider-neutral send orchestration are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create campaign", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "campaign.manage", metricLabel: "Dispatch operating health",
  metrics: [{"label":"Delivered","value":"2.8M","change":"30 days","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Complaint rate","value":"0.04%","change":"healthy","context":"operational window","tone":"positive","progress":"76%"},{"label":"Hard bounce","value":"0.31%","change":"↓ 0.08%","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Suppressed","value":"18,420","change":"global","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active email campaigns", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"DIS-842 · November product briefing","secondary":"Audience lists and segmentation","tertiary":"Updated today","status":"Review","accent":"violet"},{"id":2,"primary":"DIS-831 · Customer renewal education","secondary":"Template versioning and approval","tertiary":"Evidence current","status":"Scheduled","accent":"lime"},{"id":3,"primary":"DIS-820 · Partner newsletter","secondary":"Provider-neutral send orchestration","tertiary":"Updated today","status":"Sending","accent":"cyan"},{"id":4,"primary":"DIS-809 · Security advisory","secondary":"Bounce, complaint, and suppression handling","tertiary":"Evidence current","status":"Complete","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Audience lists and segmentation", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Template versioning and approval", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Provider-neutral send orchestration", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Template versioning and approval has the clearest next action.",
  insightBody: "The recommendation is grounded in current campaign records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Email campaign", modalEyebrow: "NEW EMAIL CAMPAIGN", modalTitle: "Add email campaign",
  formFields: [
    { name: "title", label: "Email campaign title", placeholder: "November product briefing" },
    { name: "owner", label: "Owner", placeholder: "Campaign manager" },
    { name: "reference", label: "Reference", placeholder: "DIS-843" },
  ],
  defaultSecondary: "Audience lists and segmentation", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The campaign inherits workspace visibility, requires campaign.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create campaign",
};
