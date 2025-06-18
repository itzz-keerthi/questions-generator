# AI Engine (Monorepo)

This folder is a self-contained monorepo designed to power the AI Engine of the Auto Poll Generation system.  
Built using **pnpm workspaces** and **Turborepo**, it enables modular development and scalable AI services.

## Structure
- `packages/`: Contains independent modules like cron jobs, AI services, etc.
- `turbo.json`: Defines caching & build pipeline rules.
- `pnpm-workspace.yaml`: Declares workspace packages for pnpm.

## Metadata
- Author: Shaik Balaji Mahammad Rafi
- Repo: https://github.com/itzz-keerthi/questions-generator
- Branch: development
- License: MIT
- Status: ⚙️ In Progress
- Last Updated: 2025-06-19

## Dev Commands
```bash
pnpm dev -F transcript-cron   # Run cron dev loop
pnpm build -F transcript-cron # Compile TypeScript
```

