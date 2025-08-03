# 🌈 ThemeHub – Frontend Developer Task

A dynamic multi-theme switching application showcasing user interface adaptability and personalization.

---

## 👨‍💻 Developed by:
**priyankaMurugesan**

---

## 🚀 Tech Stack

- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🧠 Context API
- 💾 localStorage
- ✅ WCAG Accessibility

---

## 📂 Project Structure

themehub/
├── public/
├── src/
│ ├── assets/ # Images, Icons
│ ├── components/ # Reusable UI components
│ ├── themes/ # Theme-specific styles / configs
│ └── App.tsx # Main app entry
├── tailwind.config.js
├── package.json
└── README.md

## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
https://github.com/Priyanka-271997-gopi/themehub-PriyankaMurugesan-frontenddeveloper.git

## 📦 How to Run Locally
bash
npm install
npm run dev

📦 Features
🎨 Switch between multiple themes

📱 Responsive design (mobile-first)

🧠 Theme state management via Context API

💾 localStorage persistence

🌈 Animated theme transitions

🧑‍🦯 Accessible (WCAG 2.1 compliant)

⚡ Performance-optimized with lazy loading

Visit: http://localhost:5173



 Example 1: Component Documentation
tsx
// ThemeSwitcher.tsx

/**
 * ThemeSwitcher component allows users to toggle between light, dark, and pastel themes.
 * It uses React Context to manage and persist theme across the app.
 */
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeType);
  };

  return (
    <select onChange={handleChange} value={theme}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="pastel">Pastel</option>
    </select>
  );
};

| File          | What to Comment                               |
| ------------- | --------------------------------------------- |
| `App.tsx`     | App structure, layout rendering               |
| `components/` | Purpose of each component, props, state logic |
| `themes/`     | Theme objects, how switching logic works      |
| `utils/`      | Utility functions, helper logic               |
| `context/`    | Context creation, value provided, usage       |


  ## 🔗 Live Demo
[https://themehub-live-demo.netlify.app](https://themehub-live-demo.netlify.app)


