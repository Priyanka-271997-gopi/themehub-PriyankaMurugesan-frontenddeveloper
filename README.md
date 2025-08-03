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

your-project/
├── src/
│   ├── components/
│   │   ├── Header.tsx ✅
│   │   ├── Layout.tsx ✅
│   │   └── ProductCard.tsx ✅
│   ├── contexts/
│   │   └── ThemeContext.tsx ✅
│   ├── hooks/
│   │   └── useProducts.ts ✅
│   ├── pages/
│   │   ├── Home.tsx ✅
│   │   ├── About.tsx ✅
│   │   └── Contact.tsx ✅
│   ├── types/
│   │   └── index.ts ✅
│   ├── App.tsx ✅
│   ├── main.tsx ✅
│   └── index.css ✅
├── index.html ✅
├── package.json ✅
├── tailwind.config.js ✅
├── vite.config.ts ✅
└── tsconfig.json ✅


## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
https://github.com/Priyanka-271997-gopi/themehub-PriyankaMurugesan-frontenddeveloper.git

## 📦 How to Run Locally
bash
npm install
npm run dev

📦 Features
🎨 Switch between multiple themes  3 Dynamic themes (Light, Dark, Dim)

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

/**
 * useProducts Hook
 * Fetches product data from API and manages loading/error state.
 */

import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product list
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Product fetch error:', err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

export default useProducts;


 add documentation

| File/Folder           | What to Document                             |
| --------------------- | -------------------------------------------- |
| `components/*.tsx`    | What the component does and key props used   |
| `contexts/*.tsx`      | What context it provides and how to use it   |
| `hooks/*.ts`          | What it fetches/returns and any side effects |
| `pages/*.tsx`         | Purpose of the page and structure of layout  |
| `types/*.ts`          | Interface descriptions and expected data     |
| `App.tsx`, `main.tsx` | Routing and App bootstrap info               |


  ## 🔗 Live Demo
[https://themehub-live-demo.netlify.app](https://multithemeswitcherapp.netlify.app/)


