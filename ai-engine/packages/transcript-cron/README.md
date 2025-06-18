# Transcript Cron Job

This internal package runs a scheduled cron job that simulates fetching transcript data from an endpoint every 2 minutes.

## Features
- Uses `node-cron` for scheduling
- Simulates transcript fetching with rotating mock data
- Terminal-friendly logs with `chalk`

## Scripts
```bash
pnpm dev -F transcript-cron   # Run the cron job
pnpm build -F transcript-cron # Build TS to JS
```

> 📌 Future work: Connect to real transcript endpoint, integrate AI summarizer

---

Author: Rafi  
License: MIT  
Part of: AI Engine Monorepo

