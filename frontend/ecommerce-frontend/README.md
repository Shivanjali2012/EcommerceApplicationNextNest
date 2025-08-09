# 🛒 E-Commerce Frontend

This is the **frontend** application of a microservices-based e-commerce system built using **Next.js** and **Tailwind CSS**. It connects to two backend services (Product-Order and Customer Service) to enable users to:

- Browse products
- Add items to a cart
- Place an order
- View past orders

---

## 🔧 Tech Stack

| Tech             | Purpose                                      |
|------------------|----------------------------------------------|
| **Next.js 14**   | React-based frontend framework                |
| **Tailwind CSS** | Utility-first CSS framework                   |
| **Axios**        | HTTP client for calling APIs                  |
| **SweetAlert2**  | Alert popups (for success/failure messages)   |
| **React Context**| Global cart state                             |

---

## 📁 Project Structure

ecommerce-frontend/
├── app/ # Pages and routes (Next.js App Router)
│ ├── page.tsx # Home page (Product listing)
│ ├── cart/ # Cart page (items added)
│ ├── checkout/ # Checkout form
│ ├── orders/ # Order history page
├── context/
│ └── CartContext.tsx # React Context for global cart state
├── services/
│ ├── api.ts # Axios instances for each backend service
│ ├── orderService.ts # Order-related API functions
│ ├── productService.ts # Product API functions
│ └── customerService.ts # Customer API functions (optional)
├── public/
│ └── screens/ # Screenshots or assets (optional)
├── styles/
│ └── globals.css # Tailwind base styles
├── tailwind.config.js # Tailwind config
├── next.config.js # Domain whitelist for external images
├── package.json # Project dependencies and scripts
└── README.md

yaml
Copy
Edit

---

## 🌐 Features

✅ **Product Listing**  
✅ **Add to Cart**  
✅ **Checkout with name,phone**  
✅ **Submit order to backend via Rabitmq**  
✅ **Order history view**  
✅ **SweetAlert feedback popups**  
✅ **Responsive layout with Tailwind CSS**  
✅ **Image rendering using Unsplash links**

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js `v18+`
- npm or yarn
- Running backend services:
  - Product-Order Service (on `http://localhost:3000`)
  - Customer Service (on `http://localhost:3001`)

---

### 🔨 Installation

```bash
# Clone the project
git clone https://github.com/yourusername/ecommerce-frontend.git

# Enter project folder
cd ecommerce-frontend

# Install dependencies
npm install
▶️ Running the App
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

⚙️ Image Config (Already Set)
js
Copy
Edit
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
};
🔌 API Integration
All API functions are defined in /services.

API	File	Description
GET /products	productService.ts	Fetch product list
POST /orders	orderService.ts	Create a new order
GET /orders	orderService.ts	Get all past orders
PATCH /orders/:id	orderService.ts	Cancel an existing order
GET /customers	customerService.ts	Fetch customer data (optional)

All services use Axios with separate base URLs for each backend microservice.

💳 Checkout Form
Form takes:

Name

Phone

Then sends order details with:

Cart items (product IDs)

Total amount



