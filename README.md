# SageFlow - Student Wellbeing Platform

A premium, modern web + mobile UI for checking student wellbeing.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Vanilla CSS Modules with Custom Design System (Variables)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Outfit (Headings), Inter (Body)

## Project Structure
- `src/app/globals.css`: Design tokens (Colors, Typography, Utilities).
- `src/app/page.tsx`: Role selection / Landing page.
- `src/app/student`: Mobile-first student experience (Home, Assessment, Completion).
- `src/app/dashboard/teacher`: Teacher dashboard with Class KPIs and Chart.
- `src/app/dashboard/parent`: Parent dashboard with Child overview.
- `src/components/ui`: Reusable atoms (Button, Card).
- `src/components/dashboard`: Dashboard layout components (Sidebar).

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.
