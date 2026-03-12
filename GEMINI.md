# GEMINI.md - ไข่ Thunder (Egg Thunder)

## Project Overview
**ไข่ Thunder** is a B2C e-commerce subscription service designed to provide fresh, high-quality eggs (Size 0, free-range) to customers on a weekly basis. The service focuses on convenience for urban dwellers or those who prefer a consistent, automated supply of fresh eggs.

### Key Features
- **Subscription Model:** 3-month commitment, weekly delivery of 14 eggs.
- **Product focus:** Single-product offering to reduce complexity.
- **Roles:**
  - **Customer (ไข่น้อย):** Subscribes and receives deliveries.
  - **Delivery Staff (พ่อไก่ซิ่ง):** Manages and confirms deliveries.
  - **Admin (แม่ไก่):** Manages products, subscriptions, and schedules.

## Project Structure
The repository contains business documentation, system design diagrams, and initial database/code implementations.

```text
/
├── 01_my-ecommerce.md            # Problem statement, solution, and project overview
├── 02_business-model-canvas...   # Excalidraw diagram for BMC
├── 03_use-case-diagram...        # Excalidraw diagram for system use cases
├── 04_er-diagram...              # Excalidraw diagram for database design
├── 05_product-backlog.md         # User stories for Customers, Delivery, and Admin
├── 06_bring-it-to-javascript.js  # Basic JavaScript data structure prototype
└── postgresql/                   # Database schema and mock data
    ├── create-tables.sql         # Main table definitions (currently generic template)
    ├── query.sql                 # Sample SQL queries
    └── 01_suppliers.sql...       # Mock data scripts (01-07)
```

## Tech Stack
- **Database:** PostgreSQL
- **Logic:** JavaScript (Node.js)
- **Design:** Excalidraw (Diagrams), Markdown (Documentation)

## Getting Started

### Database Setup
The current SQL files in the `postgresql/` directory are based on a burger shop template (likely for learning purposes). To set up the environment:
1. Ensure PostgreSQL is installed.
2. Run `postgresql/create-tables.sql` to create the schema.
3. Execute the numbered scripts (e.g., `01_suppliers.sql` to `07_order_items.sql`) to seed mock data.
4. Use `postgresql/query.sql` to test the setup.

### Running JavaScript
The project includes a basic JS file for data handling:
```bash
node 06_bring-it-to-javascript.js
```

## Development Conventions
- **Documentation First:** All business requirements and use cases are documented in Markdown and Excalidraw before implementation.
- **Surgical SQL:** The database scripts are split into schema creation and data seeding for modularity.
- **TODO:** The current SQL schema (Suppliers, MenuItems, etc.) needs to be refactored to align with the "Egg Thunder" subscription model (Subscriptions, Delivery Schedules, Customers).

## Future Roadmap (Product Backlog)
- Implement user registration and login (PB-01, PB-02).
- Develop the subscription payment flow (PB-04, PB-06).
- Create the automated delivery schedule generator (PB-16).
- Implement the delivery staff confirmation interface (PB-12).
