# 🏝️ The Wild Oasis — Admin Dashboard

A full-featured hotel & cabin management dashboard that gives staff one secure place to manage bookings, cabins, guests, and daily operations. Built with **React**, **Vite**, and **Supabase** while mastering the React ecosystem.

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img alt="React Query" src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
  <img alt="styled-components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
</p>


---

## ✨ Features

### 🔐 Authentication & Account Management
- Secure staff login powered by **Supabase Auth**, with protected routes so only authenticated users can access the dashboard.
- Add new staff accounts directly from the app.
- Personal account settings — update your name, avatar, and password at any time.
- Automatic redirect to login for unauthenticated visitors, with a smooth loading state while auth is verified.

### 🛏️ Cabin Management
- Full CRUD for cabins: create, edit, duplicate, and delete listings.
- Each cabin includes name, capacity, price, discount, description, and a photo (image upload via **Supabase Storage**).
- Filter cabins by discount status and sort by name, price, or capacity.
- One-click duplicate to quickly create similar listings.

### 📅 Bookings Management
- Central bookings table showing guest, cabin, dates, status, and total for every reservation.
- Filter by status (unconfirmed / checked-in / checked-out) and sort by date or amount.
- Paginated results for fast, manageable browsing.
- Detailed booking view with full guest, stay, and payment info.
- Delete bookings with a confirmation step to prevent accidents.

### 🛎️ Check-in / Check-out Workflow
- Streamlined check-in flow: confirm payment and optionally add breakfast, with the total recalculating automatically.
- One-click check-out for guests completing their stay.
- A **"Today's Activity"** widget surfacing all arrivals and departures, with quick-action buttons right from the dashboard.

### 📊 Dashboard & Analytics
- At-a-glance KPI tiles: total bookings, sales, check-ins, and occupancy rate.
- Sales chart visualizing revenue and extras over time.
- Stay-duration chart showing the distribution of booking lengths.
- Adjustable reporting window — last 7, 30, or 90 days.

### ⚙️ Hotel Settings
- Configure global booking rules from one screen: min/max nights, max guests per booking, and breakfast price.
- Inline editing — changes save automatically as you update each field.

### 🎨 User Experience
- Full **dark mode** with system-preference detection and remembered choice.
- Toast notifications confirming every action instantly.
- Reusable modals and dropdown menus for a clean, consistent interface.
- Sortable, filterable, paginated tables throughout.
- Form validation on every input, plus friendly loading spinners, empty states, and error boundaries.

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | React + Vite |
| **Backend** | Supabase (database, auth, file storage) |
| **Server state** | React Query (TanStack Query) |
| **Styling** | styled-components |
| **Forms** | react-hook-form |
| **Charts** | Recharts |
| **Routing** | React Router |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- A free [Supabase](https://supabase.com/) project

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YouseffEl-Gindy/Elgindy-Hostel.git
cd Elgindy-Hostel

# 2. Install dependencies
npm install

# 3. Add your Supabase credentials
#    Set your project URL and anon key in the Supabase client config
#    (e.g. src/services/supabase.js)

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Start the dev server
npm run build     # Build for production
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

---

## 📁 Project Structure

```
src/
├── features/      # Feature-based modules (cabins, bookings, dashboard, ...)
├── ui/            # Reusable UI components (Button, Modal, Table, ...)
├── services/      # Supabase API calls
├── hooks/         # Custom hooks
├── pages/         # Route-level page components
├── context/       # Global context (e.g. dark mode)
├── styles/        # Global styles & theme
└── utils/         # Helpers & constants
```

---

## 📚 About This Project

This is a **learning project** built to deepen my understanding of modern React —
managing server state cleanly with React Query, building a consistent design system,
and handling every loading, empty, and error state so the user is never left guessing.

It's based on the **"The Ultimate React Course"** by Jonas Schmedtmann. 🙏

---

## 👋 Contact

**Youseff Elgindy** — Front-End React Developer

- 🌐 Portfolio: [youseff-elgindy.vercel.app](https://youseff-elgindy.vercel.app/)
- 💼 Open to front-end React roles — feel free to reach out!

---

<p align="center">Mastering React, one project at a time 💪</p>
