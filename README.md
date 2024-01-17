# Fashion Store Inventory Management API

Welcome to the Fashion Store Inventory Management API documentation. This API is designed to assist in managing the inventory of a fashion store, allowing users to handle user authentication and manage product details efficiently.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Authentication](#authentication)
   - [Create User](#create-user)
   - [Login User](#login-user)
   - [View Users](#view-users)
   - [Edit User Information](#edit-user-information)
   - [Delete User](#delete-user)
3. [Product Management](#product-management)
   - [Authorization Token](#authorization-token)
   - [Create Product](#create-product)
   - [View Products](#view-products)
   - [Edit/Update Product Info](#editupdate-product-info)
   - [Delete Product](#delete-product)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- Clone this repository: `git clone https://github.com/Dukesanmi/Inventory-Management-API-for-Fashion-Stores.git`
- Navigate to the project directory: `cd fashion-store-api`
- Install dependencies: `npm install`

### Installation

1. Create a `.env` file in the project root and set the following variables:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

2. Run the server:

```bash
npm start
```

The API is still currently in development and so will be available at `http://localhost:3000`.

## Authentication 

### Create User

**Endpoint:** `POST /api/users`

**Request Body:**

```json
{
  "name": "Your Business Name",
  "email": "your@email.com",
  "password": "yourpassword"
}
```

### Login User

**Endpoint:** `POST /api/users/login`

**Request Body:**

```json
{
  "email": "your@email.com",
  "password": "yourpassword"
}
```

### View Users

**Endpoint:** `GET /api/users`

### Edit User Information

**Endpoint:** `PATCH /api/users/:userId`

**Request Body:**

```json
{
  "name": "Updated Business Name",
  "email": "updated@email.com",
  "password": "updatedpassword"
}
```

### Delete User

**Endpoint:** `DELETE /api/users/:userId`



## Product Inventory Management

### Authorization Token 
A unique token will be generated and returned to you when you sign up and whenever you log into your account. For authorization, add this token to your request header in the format of `Bearer <token>`. This will enable you access resources in the below endpoints.

### Add new Product

**Endpoint:** `POST /api/products`

**Request Body:**

```json
{
  "name": "Product Name",
  "category": "clothing",
  "quantity": 100,
  "currency": "NGN",
  "price": 50,
  "store": "<userId>"
}
```
Note: Category can be either `Clothing`, `Foot wears`, `Head wears` or `Accessories` and Currency can be either of `NGN`, `USD`, `GBP`, `EUR` or `CAD`.

### View Products

**Endpoint:** `GET /api/products`

### Edit/Update Product Info

**Endpoint:** `PATCH /api/products/:productId`

**Request Body:**

```json
{
  "name": "Updated Product Name",
  "category": "Foot wears",
  "quantity": 150,
  "currency": "USD",
  "price": 75
}
```

### Delete Product

**Endpoint:** `DELETE /api/products/:productId`

## Conclusion

Congratulations! You are now ready to use the Fashion Store Inventory Management API. For detailed information on each endpoint, refer to the specific sections above. If you encounter any issues or have questions, feel free to reach out to me for support. Happy coding!
