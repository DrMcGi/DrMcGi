// src/utils/features.ts
export type Feature = { id: string; name: string; desc: string; price: number; category: string; };

export const features: Feature[] = [
  // Website
  { id: "responsive", name: "Responsive Design", desc: "Mobile‑first, pixel‑perfect layouts.", price: 8000, category: "website" },
  { id: "seoOptimization", name: "SEO Optimization", desc: "Metadata, schema, performance tuning.", price: 6000, category: "website" },
  { id: "cmsIntegration", name: "CMS Integration", desc: "WordPress, headless CMS, custom admin.", price: 12000, category: "website" },
  { id: "luxuryUI", name: "Luxury UI/UX System", desc: "Design tokens, motion, editorial spacing.", price: 15000, category: "website" },
  { id: "ecommerceSetup", name: "E‑commerce Setup", desc: "Catalog, cart, checkout, payments.", price: 20000, category: "website" },
  { id: "analytics", name: "Analytics & Tracking", desc: "GA4, events, funnels, heatmaps.", price: 5000, category: "website" },

  // SaaS
  { id: "mvpCore", name: "MVP Core", desc: "Auth, dashboard, CRUD flows.", price: 35000, category: "saas" },
  { id: "scalableApi", name: "Scalable API Architecture", desc: "Node.js/NestJS services.", price: 25000, category: "saas" },
  { id: "ciCd", name: "CI/CD Pipelines", desc: "Automation, environments, deployments.", price: 10000, category: "saas" },
  { id: "observability", name: "Observability & Monitoring", desc: "Logs, metrics, alerts.", price: 12000, category: "saas" },
  { id: "multiTenantSupport", name: "Multi‑Tenant Support", desc: "Orgs, roles, permissions.", price: 18000, category: "saas" },
  { id: "paymentSubscriptions", name: "Payment & Subscription Systems", desc: "Stripe/PayPal, recurring billing.", price: 15000, category: "saas" },

  // Custom
  { id: "aiConcierge", name: "AI Concierge", desc: "Branded assistant for support and FAQs.", price: 22000, category: "custom" },
  { id: "integrationsSuite", name: "Integrations Suite", desc: "WhatsApp, CRM, ERP, analytics.", price: 24000, category: "custom" },
  { id: "automationDevOps", name: "Automation & DevOps", desc: "Pipelines, monitoring, alerts.", price: 26000, category: "custom" },
  { id: "securityLayer", name: "Security Layer", desc: "Auth hardening, secrets, threat modeling.", price: 20000, category: "custom" },
  { id: "enterpriseWorkflows", name: "Enterprise Workflows", desc: "Approvals, reporting, orchestration.", price: 18000, category: "custom" },
  { id: "offlineFirst", name: "Offline‑First / Mobile Sync", desc: "PWA, RN sync, resilience.", price: 16000, category: "custom" },
  { id: "customDashboards", name: "Custom Dashboards", desc: "Tailored analytics and KPIs.", price: 14000, category: "custom" },
];
