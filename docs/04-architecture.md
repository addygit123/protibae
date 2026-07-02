# PROTIBAE — Architecture

> The technical architecture of PROTIBAE.
> This document defines how the system is structured, why each technology was chosen, and how data flows through the application.
> Every engineering decision must trace back to these architectural principles.

**Document:** `04-architecture.md`
**Status:** Living Document
**Owner:** Engineering Leadership
**Last Revised:** July 2026
**Parent Documents:** `00-project-constitution.md` · `01-project-specification.md` · `02-brand-guidelines.md` · `03-design-system.md`

---

## 1. Architecture Goals

Five goals, in priority order. When trade-offs arise, higher-priority goals win.

1. **Performance.** Sub-second time-to-interactive on every page. Performance is not an optimization — it is the baseline. A slow PROTIBAE is a broken PROTIBAE.
2. **Security.** Payment data, customer information, and authentication must be protected at every layer. Security is a prerequisite, never a retrofit.
3. **Maintainability.** The codebase must be navigable by a new engineer in their first week. Readability, convention, and documentation take precedence over cleverness.
4. **Scalability.** The architecture must support multi-product catalogs, subscriptions, wholesale, and internationalization without rewrites. We build for the next two years, not the next two weeks.
5. **Developer Experience.** Fast feedback loops, type safety, hot reload, and clear error messages. The toolchain should accelerate the engineer, never obstruct them.

---

## 2. High-Level Architecture

PROTIBAE is a server-rendered, edge-deployed web application with a relational database, external service integrations, and a CDN-backed media layer.

| Layer | Role |
|---|---|
| **Client** | The browser — responsible for rendering the UI, handling interactions, managing client-side state, and executing animations. Receives pre-rendered HTML from the server and hydrates only where interactivity is required. |
| **Server** | The application server — responsible for rendering pages, executing business logic, processing form submissions, communicating with the database, and orchestrating external service calls. Runs at the edge where possible. |
| **Database** | The persistent data store — responsible for products, orders, customers, inventory, and all transactional data. Accessed exclusively through an ORM layer. No raw queries in application code. |
| **Third-party Services** | External systems for payments, shipping, email, and media. Each integration is isolated behind a service boundary so that replacing a provider does not require application-level changes. |
| **CDN** | Edge-cached static assets, optimized images, and pre-rendered pages. The CDN is the first responder for the majority of requests. |
| **Deployment** | Continuous deployment from the main branch. Every merge triggers a build, test, and deploy pipeline. Rollbacks are instant. Preview deployments exist for every pull request. |

---

## 3. Technology Stack

Every technology in the stack was chosen for an architectural reason — not trend, familiarity, or default.

| Technology | Architectural Reason |
|---|---|
| **Next.js 15** | Server-first rendering model with edge deployment, streaming, partial prerendering, and built-in routing. Eliminates the need for a separate backend while providing the performance characteristics of a static site. |
| **React 19** | Server Components eliminate unnecessary client-side JavaScript. Concurrent rendering enables non-blocking UI updates. The component model enforces composability — aligned with the constitution's "composition over inheritance" principle. |
| **TypeScript** | Type safety catches errors at compile time, not in production. Explicit types serve as documentation. Enforces the "explicit over implicit" engineering principle. |
| **Tailwind CSS** | Utility-first styling eliminates naming debates, prevents CSS bloat, and co-locates styles with markup. Design tokens map directly to the design system. Purging removes unused styles automatically. |
| **Shadcn UI** | Unstyled, accessible component primitives that we own and customize — not a dependency we import. Components live in the codebase, fully modifiable, with no version-lock to an external library. |
| **Prisma** | Type-safe database access with auto-generated types from the schema. Migrations are version-controlled. The schema is the single source of truth for data structure. |
| **PostgreSQL (Neon)** | Relational integrity for transactional ecommerce data — orders, payments, inventory. Neon provides serverless scaling, branching for preview environments, and zero cold-start connections. |
| **Auth.js** | Standardized authentication with session management, OAuth providers, and credential-based login. Abstracts authentication complexity without vendor lock-in. |
| **Cloudinary** | On-the-fly image transformation, responsive delivery, and format optimization. Product photography — the brand's most critical visual asset — must load fast at every breakpoint without manual resizing. |
| **Razorpay** | India-first payment infrastructure supporting UPI, cards, wallets, and net banking. Handles PCI compliance at the gateway level, keeping payment data out of our systems entirely. |
| **Shiprocket** | Multi-courier aggregation, automated shipping label generation, and tracking. Abstracts logistics complexity so we focus on the customer experience, not carrier negotiations. |
| **Resend** | Transactional email with modern deliverability, templating, and observability. Order confirmations, shipping updates, and account notifications must arrive reliably and look like PROTIBAE. |
| **GSAP** | Production-grade animation engine for complex, choreographed motion sequences — hero animations, scroll-driven reveals, and product showcases. Where motion is storytelling, GSAP provides the control and performance that CSS transitions cannot. |
| **Framer Motion** | Component-level animation for React — mount/unmount transitions, layout animations, and gesture-driven interactions. Handles the motion that lives inside the component tree. |
| **Vercel** | Edge deployment with automatic scaling, preview deployments per PR, built-in analytics, and zero-config integration with Next.js. The deployment layer should be invisible — Vercel makes it so. |

---

## 4. Folder Architecture

The folder structure encodes responsibility boundaries. If a file is in the wrong folder, it is architecturally wrong — regardless of whether it works.

| Directory | Responsibility |
|---|---|
| `apps/web/` | The primary web application. All application code lives here. The monorepo structure supports future apps (admin, mobile-web) without restructuring. |
| `src/components/` | Shared, reusable UI components — buttons, inputs, cards, navigation. These are brand-level primitives. They know nothing about business logic. |
| `src/features/` | Feature-scoped modules — product, cart, checkout, account, orders. Each feature encapsulates its own components, hooks, actions, and types. Features are the primary organizational unit. |
| `src/lib/` | Core utilities, configuration, and shared logic — database client, auth configuration, constants. The foundation layer that features depend on. |
| `src/services/` | External integration adapters — Razorpay, Shiprocket, Cloudinary, Resend. Each service is isolated behind a clean interface. Replacing a provider means changing one file, not searching the codebase. |
| `src/hooks/` | Shared React hooks — viewport detection, scroll position, media queries. Hooks that are feature-specific live inside the feature directory instead. |
| `src/types/` | Shared TypeScript type definitions. Feature-specific types live inside the feature directory. |
| `src/utils/` | Pure utility functions — formatting, validation, calculation. No side effects. No dependencies on React or business logic. |
| `prisma/` | Database schema, migrations, and seed data. The schema is the source of truth for data structure. |
| `public/` | Static assets — favicons, Open Graph images, robots.txt. No application logic. |
| `docs/` | Engineering documentation. This handbook. |

### Boundary Rules

- Components never import from features. Features import from components.
- Services never import from features. Features import from services.
- Utilities never import from anything except other utilities.
- Circular dependencies between directories are forbidden.

---

## 5. Data Flow

Data moves through the application in predictable, traceable paths.

**Browsing → Purchase:**
User → Page (Server Component) → Database Query → Rendered HTML → Client Hydration → Add to Cart (Client State) → Checkout (Server Action) → Razorpay (Payment Gateway) → Order Creation (Database) → Confirmation Email (Resend) → Shipping Label (Shiprocket)

**Admin → Fulfillment:**
Admin → Dashboard → Server Action → Database Update → Shiprocket API → Tracking Number → Customer Email Notification

**Content → Display:**
Product Data (Database) → Server Component → Image URL (Cloudinary Transform) → Optimized Delivery (CDN) → Rendered Page

### Flow Rules

- All database writes go through Server Actions. No direct database calls from client components.
- All external API calls go through the service layer. No third-party SDK calls scattered across features.
- Client state is minimal — cart contents, UI state, form inputs. Business state lives on the server.

---

## 6. Design Principles

1. **Server Components First.** Every component is a Server Component by default. Client Components are introduced only when the component requires browser APIs, event handlers, or client-side state.
2. **Client Components Only When Needed.** Interactivity is not an excuse for client rendering. If a component can be split into a Server Component wrapper with a small Client Component child, it must be.
3. **Server Actions for Mutations.** All data mutations — order creation, cart updates, form submissions — use Server Actions. No client-side API route calls for state changes.
4. **Composition Over Inheritance.** Components are composed from smaller components. No prop-heavy monoliths. No render-prop chains. Small, focused, composable units.
5. **Feature-First Organization.** Code is organized by what it does (product, cart, checkout), not by what it is (components, hooks, utils). Shared primitives live outside features. Everything else lives inside.
6. **Separation of Concerns.** UI components do not contain business logic. Business logic does not contain UI decisions. Service adapters do not contain application logic.

---

## 7. External Integrations

Each integration is isolated behind a service adapter. The application depends on the adapter interface, never on the provider's SDK directly.

| Service | Role | Isolation Rationale |
|---|---|---|
| **Razorpay** | Payment processing — order creation, verification, refunds | PCI compliance boundary. Payment logic never touches application state directly. |
| **Shiprocket** | Shipping — label generation, courier selection, tracking | Logistics abstraction. Courier changes do not affect application code. |
| **Cloudinary** | Media — upload, transformation, delivery | Asset pipeline isolation. Changing CDN providers does not affect component markup. |
| **Resend** | Email — transactional notifications, order confirmations | Communication abstraction. Email templates and delivery are decoupled from business logic. |
| **Analytics** | Tracking — page views, conversions, performance metrics | Observation layer. Analytics never blocks rendering or affects user experience. |

---

## 8. Performance Strategy

Performance is the first architectural goal. These strategies enforce it.

| Strategy | Application |
|---|---|
| **Static Generation** | Marketing pages, product pages with infrequent changes are statically generated at build time and revalidated on a schedule. |
| **Streaming** | Dynamic pages stream HTML progressively. The shell renders immediately; data-dependent sections stream in as they resolve. |
| **Image Optimization** | All product and lifestyle images are served through Cloudinary with automatic format negotiation, responsive sizing, and lazy loading below the fold. |
| **Partial Prerendering** | Pages combine a static shell with dynamic slots. The static shell is served from the CDN instantly; dynamic slots stream in from the server. |
| **Lazy Loading** | Below-fold sections, modals, and non-critical interactive components are loaded on demand. Initial JavaScript payload is minimized. |
| **Edge Caching** | CDN-level caching for static assets, pre-rendered pages, and API responses with appropriate cache-control headers. |

---

## 9. Security Strategy

| Layer | Approach |
|---|---|
| **Authentication** | Session-based authentication via Auth.js. Tokens are HTTP-only, secure, and same-site. No authentication state in client-accessible storage. |
| **Authorization** | Role-based access control at the Server Action level. Admin routes and actions are protected by middleware. No client-side-only authorization checks. |
| **Secrets** | All API keys, database credentials, and service tokens are stored in environment variables. Never committed to the repository. Rotated on a regular schedule. |
| **Input Validation** | All user input is validated on the server using a schema validation library. Client-side validation is a UX convenience, never a security boundary. |
| **Rate Limiting** | Authentication endpoints, checkout flows, and API routes are rate-limited at the middleware layer to prevent abuse. |
| **Payment Security** | Payment data never touches our servers. Razorpay handles PCI compliance at the gateway. We store only order references and transaction IDs. |

---

## 10. Future Scalability

The architecture is designed for what PROTIBAE becomes, not just what it is at launch.

| Future Capability | Architectural Preparation |
|---|---|
| **Multi-product Catalog** | Database schema, product components, and navigation are designed for multiple SKUs from day one. Adding a product is a content operation, not an engineering project. |
| **Subscriptions** | The order model supports recurring purchase references. Razorpay subscription APIs integrate through the existing payment service adapter. |
| **Internationalization** | Content structure supports locale-aware rendering. Currency, language, and regional formatting are abstracted — not hardcoded. |
| **Wholesale** | Role-based access supports B2B pricing tiers and bulk ordering without a separate application. |
| **Mobile App** | Business logic in Server Actions and service adapters is reusable across clients. A future mobile app consumes the same backend. |
| **AI Features** | The service adapter pattern extends to AI providers. Recommendation engines, chatbots, and personalization integrate as additional services without architectural changes. |

---

## 11. Architecture Checklist

Every new feature must satisfy these criteria before implementation begins.

- [ ] The feature has a clear owner and a written specification.
- [ ] Server Components are used by default. Client Components are justified.
- [ ] All mutations use Server Actions, not client-side API calls.
- [ ] External services are accessed through the service layer, not directly.
- [ ] Database access goes through Prisma. No raw queries.
- [ ] All user input is validated on the server with a schema validator.
- [ ] The feature does not introduce circular dependencies between directories.
- [ ] The feature respects the performance budget — no regressions in LCP, FID, or CLS.
- [ ] Authentication and authorization are enforced at the server level.
- [ ] The feature works at all four responsive breakpoints.
- [ ] The feature degrades gracefully without JavaScript where possible.
- [ ] The folder location matches the responsibility boundaries defined in this document.

---

*End of Architecture. The Roadmap (`06-roadmap.md`) will define implementation phases, milestones, and delivery timelines.*
