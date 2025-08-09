
🧾 E-Commerce Backend - README.txt

This backend powers a microservices-based e-commerce system using NestJS. It is divided into two services:

1. 📦 product-order-service
2. 👤 customer-service

Each service runs independently and communicates via RabbitMQ (message broker).

────────────────────────────
📂 Services Overview:
────────────────────────────

1. Product-Order Service (port: 3000)
- Handles: Products, Orders
- Technologies: NestJS, PostgreSQL, TypeORM, RabbitMQ
- Routes:
  - GET    /products
  - POST   /products
  - GET    /orders
  - POST   /orders
  

2. Customer Service (port: 3001)
- Handles: Customer management
- Technologies: NestJS, PostgreSQL, TypeORM, RabbitMQ
- RabbitMQ queue: 'resolve_customer'
- Routes:
  - GET    /customers
  - POST   /customers

────────────────────────────
🧱 Tech Stack:
────────────────────────────
- NestJS (v10+)
- TypeORM (PostgreSQL ORM)
- PostgreSQL
- RabbitMQ (via amqp-connection-manager)
- DTO + Validation Pipes
- Node.js 18+

────────────────────────────
🗃️ Folder Structure:
────────────────────────────

product-order-service/
│
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── products/
│   │   ├── product.entity.ts
│   │   ├── products.service.ts
│   │   ├── products.controller.ts
│   │   └── dto/
│   ├── orders/
│   │   ├── order.entity.ts
│   │   ├── orders.service.ts
│   │   ├── orders.controller.ts
│   │   └── dto/
│   └── rabbitmq/
│       ├── rabbitmq.module.ts
│       └── rabbitmq.client.ts

customer-service/
│
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── customers/
│   │   ├── customer.entity.ts
│   │   ├── customers.service.ts
│   │   ├── customers.controller.ts
│   │   └── dto/

────────────────────────────
🚀 Getting Started:
────────────────────────────

1. ✅ Install PostgreSQL and create two databases:
   - ecommerce_products_orders
   - ecommerce_customers

2. ✅ Install RabbitMQ locally (port 5672)

3. ✅ Environment Setup:
   - Configure TypeORM in both services using TypeOrmModule.forRoot({...})
   - Set DB name, port, username, and password correctly

4. ✅ Install dependencies:
   cd product-order-service
   npm install

   cd customer-service
   npm install

5. ✅ Run services (in two terminals):
   npm run start:dev

6. ✅ RabbitMQ must be running:
   http://localhost:15672 (user: guest / guest)

────────────────────────────
📬 Microservice Communication:
────────────────────────────

- product-order-service sends a message to customer-service via RabbitMQ:
  Queue: 'resolve_customer'

- customer-service responds with:
  { customerId, name, phone }

- product-order-service saves the order using the customerId.

────────────────────────────
📋 Sample Order Payload:
────────────────────────────

POST http://localhost:3000/orders

{
  "name": "Rushikesh",
  "email": "rushi@gmail.com",
  "phone": "8855894025",
  "productIds": [1, 2],
  "totalAmount": 999.99
}

────────────────────────────
📌 Notes:
────────────────────────────
- Each service runs independently
- Communication uses message-based patterns
- productIds in orders are stored as JSON array
- RabbitMQ queue names must match in sender/receiver

────────────────────────────
🧪 Testing Endpoints:
────────────────────────────

- Product APIs: http://localhost:3000/products
- Order APIs: http://localhost:3000/orders
- Customer APIs: http://localhost:3001/customers


