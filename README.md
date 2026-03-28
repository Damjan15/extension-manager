# Browser Extension Manager

![Browser Extension Manager](./public/images/preview.jpg)

A clean and responsive Browser Extension Manager web application built with React.js, Vite, Tailwind CSS V4, and JSON Server. It allows users to view, toggle, and remove browser extensions, with full support for light and dark mode.

---

## Features

- 📋 **View Extensions** — Displays all extensions fetched from a local JSON Server API
- ✅ **Toggle Extensions** — Enable or disable extensions with an animated toggle switch
- 🗑️ **Remove Extensions** — Remove any extension from the list instantly
- 🔍 **Filter Extensions** — Filter the list by All, Active, or Inactive extensions
- 🌗 **Light & Dark Mode** — Toggle between light and dark themes, with preference saved to localStorage
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop screen sizes
- ♿ **Accessible** — Hover and focus states on all interactive elements

---

## Tech Stack

- [React.js](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS V4](https://tailwindcss.com/) — Utility-first CSS framework
- [JSON Server](https://github.com/typicode/json-server) — Mock REST API

---

## Project Structure

```
extension-manager/
├── db/
│   └── data.json              # JSON Server mock database
├── public/
│   └── images/                # Extension logos and icons
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.jsx     # App header with logo and theme toggle
│   │   └── ui/
│   │       ├── ExtensionCard.jsx  # Individual extension card
│   │       ├── ExtensionGrid.jsx  # Grid layout with filter tabs
│   │       ├── FilterTab.jsx      # Filter tab button (All/Active/Inactive)
│   │       └── Toggle.jsx         # Animated toggle switch
│   ├── context/
│   │   └── ThemeContext.jsx   # Light/dark mode context and hook
│   ├── hooks/
│   │   └── useExtensions.js   # Custom hook for extensions state and actions
│   ├── services/
│   │   └── extensionService.js # API calls to JSON Server
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v8 or higher

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/extension-manager.git
cd extension-manager
```

2. **Install dependencies**

```bash
npm install
```

### Running the App

This project requires **two terminals** running simultaneously.

**Terminal 1 — Start the JSON Server (Mock API):**

```bash
npm run server
```

The API will be available at `http://localhost:3001/extensions`

**Terminal 2 — Start the Vite Dev Server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## API Endpoints

| Method | Endpoint          | Description                        |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/extensions`     | Fetch all extensions               |
| PATCH  | `/extensions/:id` | Toggle an extension's active state |
| DELETE | `/extensions/:id` | Remove an extension                |

---
