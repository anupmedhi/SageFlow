# SageFlow - Student Wellbeing Platform 🧠✨

A premium, modern web + mobile application designed to track and improve student mental wellbeing through intuitive role-based portals. Built with a focus on psychological safety, calming aesthetics, and actionable insights.


## 🚀 Key Features

### 🎓 For Students (Mobile-First Experience)
*   **Daily Mood Check-ins**: Simple, non-intrusive emoji-based logging.
*   **Gamified Wellbeing**: Earn streaks and badges for consistent self-care.
*   **Interactive Activities**:
    *   **Memory Game**: Cognitive exercise.
    *   **Puzzle Solver**: Stress-relief focus activity.
    *   **Breathing Exercises**: Guided animation for relaxation.
*   **Journaling**: Safe space for daily thoughts.

### 👩‍🏫 For Teachers
*   **Class Pulse**: Real-time aggregated sentiment analysis of the classroom.
*   **At-Risk Alerts**: Early warning system for students showing signs of distress.
*   **Detailed Analytics**: Charts and trends to track class morale over time.

### 👨‍👩‍👧 For Parents
*   **Child Overview**: Holistic view of their child's emotional trends.
*   **Harmony Score**: AI-driven metric for family & student balance.
*   **Book a Professional**: Direct booking integration with school counselors.

### 🩺 For Counselors (New!)
*   **Multi-School Management**: Switch between campuses to manage wider cohorts.
*   **Active Case Management**: Detailed student files with observation tracking.
*   **AI Insights**: Automated suggestions based on student data trends.
*   **Booking Approvals**: Manage appointments and session requests.

---

## 🛠 Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: vanilla CSS Modules + CSS Variables (Design Tokens)
*   **Icons**: Lucide React
*   **Charts**: Recharts
*   **Fonts**: 'Outfit' (Headings) & 'Inter' (Body)

---

## 📂 Project Structure

```bash
src/app/
├── page.tsx                     # Landing Page (Role Selection)
├── globals.css                  # Global Design System (Variables)
├── auth/                        # Authentication Portals
│   ├── student/                 # Student Login/Signup
│   ├── parent/                  # Parent Login (OTP flow)
│   ├── teacher/                 # Teacher Login
│   └── counsellor/              # Counselor Login & Specialist Signup
├── dashboard/                   # Web Dashboards
│   ├── layout.tsx               # Common Dashboard Wrapper
│   ├── counsellor/              # Counselor Portal (Case Mgmt, Booking)
│   ├── teacher/                 # Teacher Portal (Class Analytics)
│   └── parent/                  # Parent Portal (Child Progress)
└── student/                     # Student Mobile App Experience
    ├── assessment/              # Daily Check-in Flow
    ├── components/              # Games (Memory, Puzzle) & Widgets
    ├── history/                 # Mood Logs
    ├── journal/                 # Private Diary
    └── page.tsx                 # Student Home Feed
```

## 🎨 Design System

SageFlow uses a sophisticated color palette tailored to each user persona to evoke specific psychological biological responses:

*   **Global**: `Slate` & `Indigo` (Professional, Trust)
*   **Students**: `Violet` & `Pink` (Creativity, Playfulness, Calm)
*   **Teachers**: `Red` & `Warm Gray` (Alertness, Authority, Care)
*   **Parents**: `Emerald` & `Teal` (Growth, Stability, Peace)
*   **Counselors**: `Deep Indigo` & `Slate` (Clinical, wisdom, Depth)

## 🏃‍♂️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/anupmedhi/SageFlow.git
    cd SageFlow
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000)

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---
*Built with ❤️ for Student Mental Health.*
