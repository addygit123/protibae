# PROTIBAE

> Premium functional nutrition for the next generation.

## Overview

PROTIBAE is a Gen Z-first functional nutrition brand. This repository contains the digital flagship — the web experience that defines how customers discover, trust, and purchase PROTIBAE products.

## Documentation

All engineering documentation lives in [`/docs`](./docs/).

| Document                                                            | Purpose                                               |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| [`00-project-constitution.md`](./docs/00-project-constitution.md)   | Engineering philosophy, principles, and governance    |
| [`01-project-specification.md`](./docs/01-project-specification.md) | Product vision, personas, and product principles      |
| [`02-brand-guidelines.md`](./docs/02-brand-guidelines.md)           | Brand identity, voice, and visual philosophy          |
| [`03-design-system.md`](./docs/03-design-system.md)                 | UI component standards and design principles          |
| [`04-architecture.md`](./docs/04-architecture.md)                   | System architecture, tech stack, and folder structure |
| [`05-roadmap.md`](./docs/05-roadmap.md)                             | Implementation milestones and delivery plan           |

## Repository Structure

```
protibae/
├── apps/
│   └── web/               # Primary Next.js web application
│       ├── app/           # Next.js App Router (pages, layouts, routing)
│       ├── components/    # Shared UI primitives
│       ├── features/      # Feature-scoped modules
│       ├── lib/           # Core utilities and configuration
│       ├── services/      # External service adapters
│       ├── hooks/         # Shared React hooks
│       ├── types/         # Shared TypeScript types
│       ├── utils/         # Pure utility functions
│       └── prisma/        # Database schema and migrations
├── docs/                  # Engineering documentation
└── .husky/                # Git hooks
```

## Getting Started

```bash
# Copy environment variables
cp apps/web/.env.example apps/web/.env

# Fill in the required values in apps/web/.env

# Install dependencies
pnpm install

# Start the development server
pnpm --filter web dev
```

## Development

```bash
# Lint
pnpm --filter web lint

# Format
pnpm --filter web format

# Type check
pnpm --filter web build
```

## Requirements

- Node.js 20+
- pnpm 9+
- PostgreSQL (via Neon)

## Read First

Every contributor must read [`docs/00-project-constitution.md`](./docs/00-project-constitution.md) before making any changes to this repository.
