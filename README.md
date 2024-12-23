# 📊 Calculator

A **modern**, **intuitive** calculator web application built with **React** and styled with **Tailwind CSS**. Perform basic arithmetic operations in real-time with a responsive, gradient-enhanced UI. ✨

---

## ✨ Features

- ➕ **Basic Arithmetic**: Add, subtract, multiply, and divide numbers effortlessly.
- 📱 **Responsive Design**: Looks great on desktops, tablets, and smartphones.
- 🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations.
- ⚠️ **Error Handling**: Detects and handles invalid inputs (e.g., division by zero).
- 🌐 **Real-Time Display**: Instantly shows calculation results.
- 💪 **Simple Interface**: Easy-to-use layout for all users.

---

## ✅ Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (version 17.0.0 or higher) 🟢
- **npm** (comes bundled with Node.js) 📦

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone [git@github.com:haniyakonain/calculator.git]
   cd calculator
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open the app in your browser**:
   ```
   http://localhost:5173
   ```

---

## 📂 Project Structure

```
calculator-app/
├── src/
│   ├── components/
│   │   └── SimpleCalculator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 📦 Dependencies

- **React** ✨
- **Tailwind CSS** 🎨
- **Lucide React** (for icons) ✍️

---

## 🛠️ Usage

1. 📈 Enter the first number in the **"First Number"** input field.
2. 📉 Enter the second number in the **"Second Number"** input field.
3. ➗ Select an operator from the dropdown menu (**+, -, *, /**).
4. 💡 Click **"Calculate"** to see the result instantly.
5. 🔄 Use **"Clear"** to reset all inputs.

---

## ⚠️ Error Handling

This calculator gracefully handles:
- **Empty Inputs**: Prompts users to fill in both fields.
- **Division by Zero**: Displays an error message.
- **Invalid Operations**: Ensures only supported operations are processed.

---

## 🎨 Customization

Modify the calculator’s design by editing the **Tailwind CSS classes** in `src/components/SimpleCalculator.jsx`.

---

## 🧩 Contributing

We welcome contributions! Follow these steps:

1. 🌟 Fork the repository.
2. 📄 Create a feature branch:
   ```bash
   git checkout -b feature/YourAmazingFeature
   ```
3. 📂 Commit your changes:
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. 📢 Push to the branch:
   ```bash
   git push origin feature/YourAmazingFeature
   ```
5. 📩 Open a Pull Request.

---

## 📋 License

This project is licensed under the **MIT License**. For details, see the `LICENSE` file.

---

Made with ❤️ by **Haniya Konain**.
