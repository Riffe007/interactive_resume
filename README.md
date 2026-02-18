# Interactive Resume — riffe.tech

Modern interactive portfolio and resume for Timothy Riffe.  
Built with Next.js, TypeScript, and a motion-forward UI architecture.  
Deployed on Vercel at:

👉 https://www.riffe.tech

---

## Overview

This project powers the public-facing interactive resume and portfolio for Timothy Riffe.

It is designed to:
- Present case studies in a structured, executive-ready format
- Demonstrate frontend engineering and motion system capabilities
- Serve as the foundation for an AI-powered portfolio assistant + CRM system

This is not a static résumé page — it is an evolving technical showcase and product platform.

---

## Current Capabilities

- Interactive project sections
- Motion-enhanced UI (Framer Motion / GSAP)
- 3D-ready components (Three.js / @react-three/fiber)
- Case study–style presentation of experience
- Deployed and managed via Vercel

---

## Technology Stack

### Frontend
- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js / @react-three/fiber / drei
- React Flow (architecture diagrams)
- Leaflet / React Leaflet (mapping components if enabled)

### Hosting
- Vercel (Production Deployment)

---

## Local Development

### Prerequisites
- Node.js 18+ recommended
- npm / yarn / pnpm

### Install
```bash
npm install
```
### Run Development Server
```
npm run dev
```
Visit:
http://localhost:3000

### Build for Production
```
npm run build
npm run start
```

# Deployment
Production deployment is handled via Vercel.

The live domain:
https://riffe.tech

No manual Github Pages deployment is used.

# Environment Variables

At present, the core frontend requires no environment variables.

Planned backend integrations (not yet implemented) will require:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
```
Server-side secrets will never be exposed to the client.

# Roadmap

This repository is evolving into a full AI-powered portfolio platform.

Planned upgrades:

## 1. Supabase CRM Integration

Contacts

Conversations

Resume generation logs

Appointment requests

Audit trail

## 2. AI Portfolio Assistant

RAG over portfolio + resume

Tool calls:

create_contact

log_inquiry

generate_resume_version

create_appointment_request

Structured data storage of interactions

## 3. Resume Generator

Paste Job Description

Generate tailored resume

Export PDF

Store version history in Supabase

## 4. Case Study Expansion

Problem → Constraints → Architecture → Outcome format

Interactive architecture visualizations

Security / compliance posture documentation

Metrics-driven project proof

## Repository Notes

This repository is dedicated to the riffe.tech portfolio platform.

It is not a general-purpose template.

The content and design are proprietary.

# Intellectual Property

© 2026 Timothy Riffe. All rights reserved.

The content, branding, design, and written materials in this repository may not be reused, redistributed, or reproduced without explicit permission.

#Philosophy

This project exists to demonstrate:

Systems thinking

AI-native architecture

Frontend engineering discipline

Production deployment standards

Technical storytelling

It is a living system and will continue to evolve alongside new projects and research.

```
---

If you want, next we can:

- Refactor your `package.json` properly (clean name, remove wrong deploy script)
- Clean `next.config.ts` for Vercel-only
- Or design the Supabase schema + assistant tool contract so we start turning this into a real AI portfolio system

You’re close. Now we just make it intentional instead of aspirational.
```
