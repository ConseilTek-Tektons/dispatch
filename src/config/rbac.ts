export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    messaging_admin: { label: "Messaging administrator", description: "Owns audience lists and segmentation and template versioning and approval." },
    campaign_manager: { label: "Campaign manager", description: "Operates authorised campaign workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "campaign.manage": "Create and update campaign records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Dispatch knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    messaging_admin: ["dashboard.view", "campaign.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    campaign_manager: ["dashboard.view", "campaign.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "dispatch-owners": "owner", "dispatch-admins": "admin",
    "dispatch-managers": "messaging_admin", "dispatch-operators": "campaign_manager",
    "dispatch-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
