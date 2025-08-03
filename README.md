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


src/components/Header.tsx
tsx
/**
 * Header Component
 * Displays the top navigation bar with theme switch and site branding.
 */

import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Site Logo */}
      {/* Theme Toggle Button */}
    </header>
  );
};

export default Header;

2)src/contexts/ThemeContext.tsx
tsx

/**
 * ThemeContext
 * Manages global theme state (e.g., light/dark/custom themes)
 * using React Context API.
 */

import { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext(...);

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);

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


3)src/pages/Home.tsx
tsx

/**
 * Home Page
 * Displays a list of product cards and the layout with header.
 */

import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      {/* Product List Rendering */}
    </div>
  );
};

export default Home;

src/types/index.ts
ts

/**
 * Global Type Definitions
 * Define interfaces used throughout the project.
 */

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

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


