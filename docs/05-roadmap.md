# PROTIBAE — Roadmap

> The implementation roadmap for PROTIBAE.
> This document defines what gets built, in what order, and what "done" means for each milestone.
> Milestones are sequential. Each builds on the last.

**Document:** `05-roadmap.md`
**Status:** Living Document
**Owner:** Engineering Management
**Last Revised:** July 2026
**Parent Documents:** `00-project-constitution.md` · `01-project-specification.md` · `04-architecture.md`

---

## Milestone 1 — Engineering Foundation

**Objective:** Establish the project infrastructure so that every subsequent milestone builds on a verified, clean, production-ready foundation.

**Deliverables:**
- Final project cleanup — remove scaffolding, placeholder files, and unused dependencies
- Environment configuration — development, staging, production
- Shadcn UI installed and configured with PROTIBAE design tokens
- Design token system — color, typography, spacing, and motion tokens aligned with `03-design-system.md`
- Folder architecture verified against `04-architecture.md` boundary rules
- Linting, formatting, and type-checking enforced across the codebase

**Definition of Done:** A new engineer can clone the repository, run one command, and have a working development environment with all tooling operational and zero warnings.

**Dependencies:** None. This is the starting point.

---

## Milestone 2 — Landing Experience

**Objective:** Build the digital flagship entrance — the first surface a customer encounters. This page must create an emotional response within three seconds.

**Deliverables:**
- Hero section with motion-driven product reveal
- Brand story section with scroll-triggered narrative
- Product showcase with GSAP-powered interactions
- Responsive layout across all four breakpoints
- Performance budget met — sub-second LCP on mobile

**Definition of Done:** The landing page is visually complete, motion is choreographed, and the experience is indistinguishable from a premium brand site on both mobile and desktop. No placeholder content.

**Dependencies:** Milestone 1

---

## Milestone 3 — Product Experience

**Objective:** Build the product page — the surface where trust is earned and purchase intent is formed.

**Deliverables:**
- Product detail page with hero photography
- Nutrition facts section with transparent, scannable data
- Ingredient breakdown with sourcing information
- Product image gallery with responsive media
- Customer reviews section
- FAQ section with progressive disclosure

**Definition of Done:** Every piece of information a customer needs to make a purchase decision is present, accessible, and beautifully presented. Nutritional claims are substantiated.

**Dependencies:** Milestone 1, Milestone 2 (shared components and motion system)

---

## Milestone 4 — Authentication

**Objective:** Enable customer accounts with secure, frictionless authentication.

**Deliverables:**
- Sign-up flow with email verification
- Login flow with session management
- Password reset flow
- User profile creation and editing
- Auth middleware protecting customer-only routes

**Definition of Done:** A customer can create an account, log in, reset their password, and access their profile. All authentication is session-based, HTTP-only, and server-validated.

**Dependencies:** Milestone 1 (database, Auth.js configuration)

---

## Milestone 5 — Shopping Experience

**Objective:** Build the pre-checkout commerce layer — the mechanisms that turn browsing into buying.

**Deliverables:**
- Cart with add, remove, quantity adjustment, and persistent state
- Wishlist functionality tied to customer accounts
- Coupon system with validation and discount calculation
- Reward points accumulation and redemption
- Referral code generation and tracking

**Definition of Done:** A customer can build a cart, save items, apply discounts, and see reward points — all with real-time feedback and no page reloads. Cart state persists across sessions for authenticated users.

**Dependencies:** Milestone 3 (product data), Milestone 4 (authentication for wishlist, rewards, referrals)

---

## Milestone 6 — Checkout

**Objective:** Build a checkout flow that converts with zero friction and zero dark patterns.

**Deliverables:**
- Address collection and management
- Razorpay payment integration — UPI, cards, wallets, net banking
- Order creation with inventory validation
- Invoice generation with GST compliance
- Order confirmation page and email notification

**Definition of Done:** A customer can go from cart to confirmed order in under sixty seconds. Payment is processed securely. The confirmation email arrives within one minute. No payment data touches our servers.

**Dependencies:** Milestone 5 (cart), Milestone 4 (authentication), Razorpay service adapter

---

## Milestone 7 — Shipping

**Objective:** Connect order fulfillment to logistics infrastructure.

**Deliverables:**
- Shiprocket integration for shipment creation
- Automated courier selection based on serviceability and cost
- Shipping label generation
- Real-time tracking with status updates
- Return and exchange initiation flow

**Definition of Done:** Every confirmed order automatically generates a shipment. Customers receive tracking information via email. Return requests create reverse pickups.

**Dependencies:** Milestone 6 (orders), Shiprocket service adapter, Resend service adapter

---

## Milestone 8 — Customer Dashboard

**Objective:** Give customers a self-service hub for their relationship with PROTIBAE.

**Deliverables:**
- Order history with status and tracking
- Real-time shipment tracking within the dashboard
- Invoice downloads
- Reward points balance and transaction history
- Account settings — profile, addresses, password, communication preferences

**Definition of Done:** A customer can answer every question about their orders, rewards, and account without contacting support. The dashboard is responsive, fast, and consistent with the brand experience.

**Dependencies:** Milestone 4 (authentication), Milestone 6 (orders), Milestone 7 (tracking)

---

## Milestone 9 — Admin Dashboard

**Objective:** Build the operational command center for the PROTIBAE team.

**Deliverables:**
- Analytics overview — revenue, orders, conversion, traffic
- Inventory management — stock levels, low-stock alerts
- Order management — view, update status, process refunds
- Customer management — profiles, order history, communication
- Coupon management — create, edit, deactivate, usage tracking
- GST reporting and tax summary
- Revenue reporting with date-range filtering

**Definition of Done:** The PROTIBAE team can operate the entire business from the admin dashboard without touching the database directly. Every metric needed for daily operations is visible at a glance.

**Dependencies:** Milestone 6 (orders), Milestone 5 (coupons), Milestone 4 (customer data)

---

## Milestone 10 — Warehouse & Inventory

**Objective:** Build the inventory infrastructure for physical product operations.

**Deliverables:**
- SKU management system
- Barcode generation and scanning support
- QR code workflow for product traceability
- Batch tracking with production date and source
- Expiry date monitoring with automated alerts
- Stock level alerts with configurable thresholds

**Definition of Done:** Every unit of product is traceable from production batch to customer delivery. Expiring inventory is flagged before it becomes a problem. Stock alerts prevent overselling.

**Dependencies:** Milestone 9 (admin dashboard), database schema for inventory

---

## Milestone 11 — Optimization

**Objective:** Bring every surface to production quality across performance, accessibility, discoverability, and observability.

**Deliverables:**
- SEO — meta tags, structured data, sitemap, Open Graph, canonical URLs
- Accessibility audit — WCAG AA compliance, keyboard navigation, screen reader testing
- Performance audit — Lighthouse scores above 90 on all metrics, Core Web Vitals passing
- Analytics integration — page views, conversion funnel, user behavior
- Error monitoring — runtime error capture, alerting, and triage workflow

**Definition of Done:** Lighthouse scores exceed 90 across all categories. WCAG AA compliance is verified. Analytics capture every step of the conversion funnel. Runtime errors are captured and alerted within sixty seconds.

**Dependencies:** All previous milestones (optimization is applied across the full surface)

---

## Milestone 12 — Production Launch

**Objective:** Ship PROTIBAE to the world with confidence.

**Deliverables:**
- End-to-end testing across all critical user flows
- CI/CD pipeline — build, test, deploy on every merge to main
- Production deployment with DNS, SSL, and CDN configuration
- Monitoring dashboards — uptime, performance, error rates, business metrics
- Documentation review — all engineering docs verified against final implementation
- Launch checklist — security audit, payment testing, email deliverability, mobile QA

**Definition of Done:** The application is live, monitored, and stable. The team can deploy with confidence. Rollbacks are tested and instant. Every critical flow has been verified in production.

**Dependencies:** All previous milestones

---

## Project Success Criteria

The project is successful when all of the following are true simultaneously:

1. A customer can discover, browse, purchase, and receive a PROTIBAE bar through the website without friction.
2. The digital experience creates an emotional response that makes customers want to share the brand.
3. Lighthouse scores exceed 90 across all categories on mobile.
4. The admin team can operate daily business without engineering support.
5. Every critical user flow is tested, monitored, and alerting.
6. The codebase is documented well enough for a new engineer to contribute in their first week.

---

## Release Philosophy

- **Ship when ready, not when scheduled.** Deadlines inform priority. They do not override quality.
- **Each milestone is independently shippable.** The landing page can go live before checkout exists. Early milestones generate brand awareness while later milestones enable commerce.
- **Preview deployments for every pull request.** No change reaches production without being reviewed in a real environment.
- **Rollbacks are instant.** Every deployment can be reverted in under sixty seconds.
- **No feature flags in perpetuity.** Feature flags are for gradual rollouts, not for hiding unfinished work indefinitely.

---

## Future Roadmap

Beyond the twelve launch milestones, the architecture is designed to support:

- **Multi-flavour product expansion** — new SKUs without engineering changes
- **Subscription commerce** — recurring orders with pause, skip, and cancel
- **Branded merchandise** — apparel and accessories through the same storefront
- **Wholesale and B2B** — role-based pricing and bulk ordering
- **International expansion** — multi-currency, multi-language, regional compliance
- **Mobile application** — native experience consuming the same backend
- **AI-powered personalization** — product recommendations, smart reordering, conversational support

These capabilities are not scheduled. They are architecturally possible. When the business is ready, the codebase will be too.

---

*End of Roadmap. Coding Standards (`07-coding-standards.md`) will define implementation-level conventions.*
