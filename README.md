# 🌿 Paradise Nursery

Paradise Nursery is a React-based shopping application where users can browse a collection of beautiful indoor houseplants and add them to a shopping cart. The application demonstrates React components, React Router, Redux Toolkit state management, and responsive UI design.

---

## 📌 Features

### Landing Page
- Beautiful background image
- Company introduction
- Company name: **Paradise Nursery**
- "Get Started" button to navigate to the product listing page

### Product Listing Page
- Displays multiple indoor houseplants
- Plants organized into three categories
- Each plant includes:
  - Thumbnail image
  - Plant name
  - Price
  - Add to Cart button
- Add to Cart button is disabled after the item is added
- Dynamic shopping cart icon displaying the total number of items
- Navigation bar with links to Home, Plants, and Cart

### Shopping Cart
- View all added plants
- Increase quantity
- Decrease quantity
- Delete items from cart
- Displays:
  - Total number of plants
  - Total amount
  - Total cost for each item
- Continue Shopping button
- Checkout button (Coming Soon)

---

## 🛠 Technologies Used

- React
- React Router DOM
- Redux Toolkit
- React Redux
- CSS3
- Vite

---

## 📂 Project Structure

```
src/
│
├── App.jsx
├── App.css
├── main.jsx
│
├── components/
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
│
└── assets/
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/sabhishek13-py/e-plantShopping.git
```

Move into the project directory

```bash
cd e-plantShopping
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📷 Application Pages

### 🌿 Landing Page
- Company information
- Background image
- Get Started button

### 🪴 Product Listing
- Multiple plant categories
- Dynamic cart count
- Add to Cart functionality

### 🛒 Shopping Cart
- Manage quantities
- Remove products
- View total cost
- Continue Shopping
- Checkout

---

## 👨‍💻 Author

**Yogabhishek Sukuluri**

GitHub: https://github.com/sabhishek13-py

---

## 📄 License

This project was created for educational purposes as part of the Coursera **Developing Front-End Apps with React** final project.
