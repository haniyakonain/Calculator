# 🧮 Calculator

A **modern**, **responsive** calculator web application built with **React** and styled with **Tailwind CSS**. This app offers a clean, intuitive interface for basic mathematical operations and is designed to work seamlessly across all devices. ✨


---

## ✨ Features

- ➕ **Basic Arithmetic**: Perform addition, subtraction, multiplication, and division.  
- 📱 **Responsive Design**: Works beautifully on desktops, tablets, and smartphones.  
- 🎨 **Modern UI**: Features gradient backgrounds, smooth animations, and a sleek design.  
- 🚫 **Error Handling**: Handles invalid inputs gracefully.  
- 🖥️ **Real-Time Display**: Instant feedback with live calculation results.  
- 💡 **Intuitive Interface**: Simple and user-friendly experience for everyone.

---

## ✅ Prerequisites

Before you begin, make sure you have:  
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
calculator/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── card.jsx
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

- **React** 🌟  
- **Vite** ⚡  
- **Tailwind CSS** 🎨  
- **Lucide React** (for icons) ✍️  
- **Radix UI** (for additional UI components) 🛠️  

---

## 🛠️ Usage

1. 🖋️ Enter the first number in the **"First Number"** input field.  
2. 🖋️ Enter the second number in the **"Second Number"** input field.  
3. 📑 Select an operator from the dropdown menu (**+, -, *, /**).  
4. 🟢 Click **"Calculate"** to view the result instantly.  
5. 🔄 Use **"Clear"** to reset all inputs.

---

## ⚠️ Error Handling

This calculator gracefully handles:  
- **Empty Input Fields**: Prompts for input if any field is left blank.  
- **Division by Zero**: Displays an error message.  
- **Invalid Operations**: Ensures only valid calculations are processed.

---

## 🎨 Customization

Customize the calculator’s design by editing the **Tailwind CSS classes** in:  
- `src/components/SimpleCalculator.jsx`  
- `src/components/ui/card.jsx`

---

## 🤝 Contributing

We welcome contributions!  

1. 🍴 Fork the repository.  
2. 🌿 Create a feature branch:  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. 💾 Commit your changes:  
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. 🚀 Push to the branch:  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. 📬 Open a Pull Request.  

---

## 📜 License

This project is licensed under the **MIT License**. For more details, see the `LICENSE` file.  

---

