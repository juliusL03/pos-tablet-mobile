# 🛒 POS System – Tablet & Mobile Ready

A modern Point-of-Sale (POS) system UI built using **Next.js**, **TypeScript**, and **Tailwind CSS**. This design is responsive, works seamlessly on tablet and mobile, and includes features like:

- Barcode/search input
- Product category browsing
- Payment method selection
- Receipt preview
- Colorful grocery item layout

---

## 📱 Preview

> A sleek, intuitive layout for in-store checkout and barcode scanning.

![POS Preview](./public/preview.png)

---

## ⚙️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Icons via [Lucide](https://lucide.dev/)

---

## 📦 Project Structure

```
.
├── app/
│   └── page.tsx              # Main page
├── components/
│   ├── BarcodeSearch.tsx     # Barcode or search input with icons
│   ├── ProductCard.tsx       # Product display card
│   ├── CartSidebar.tsx       # Cart & receipt preview
│   └── PaymentModal.tsx      # Payment selection modal
├── public/
│   └── preview.png           # Screenshot of UI (add manually)
├── styles/
│   └── globals.css           # Tailwind & global styles
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/pos-tablet-mobile.git
cd pos-tablet-mobile
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🛠 Development Notes

- This project uses `"use client"` components.
- State is managed using `useState` and props drilling.
- Add your own logic for barcode scanning, payment API, and receipt printing (e.g., `window.print()`).
- Customize products in the mock data inside `pos.tsx`.

---

## 📸 Screenshots

> Add your screenshots in the `public/` folder and reference them in the markdown.

---

## 📝 License

MIT © 2025 Julius Legaspi
