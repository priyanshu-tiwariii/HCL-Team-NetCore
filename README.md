# Retail Dashboard and Admin Portal

## 1. Project Overview

This project is an enterprise-grade Angular application that serves as a dual-role platform for Customers and Administrators. It utilizes a feature-driven, modular architecture with strict separation of concerns, leveraging Angular's standalone components and functional configuration. The UI is powered by PrimeNG with a custom theme implementation.

## 2. System Architecture

The application enforces a Domain-Driven Design (DDD) approach within its feature modules. Data flows unidirectionally from the data access layer through the domain logic to the presentation layer.

```text
+---------------------------------------------------------+
|                      User Interface                     |
|                (Angular App Shell Layout)               |
+---------------------------+-----------------------------+
                            |
+---------------------------v-----------------------------+
|               Routing & Access Control                  |
|  (guestGuard, authGuard, adminGuard, roleRedirectGuard) |
+---------------------------+-----------------------------+
                            |
+---------------------------v-----------------------------+
|                  Feature Modules                        |
|                                                         |
|  +----------------+  +----------------+  +-----------+  |
|  |  Presentation  |  |     Domain     |  |   Data    |  |
|  | (Pages/State)  |  | (Types/Logic)  |  | (Repos)   |  |
|  +----------------+  +----------------+  +-----------+  |
|                                                         |
|   [Auth] [Home] [Cart] [Orders] [Dashboard] [Products]  |
+---------------------------+-----------------------------+
                            |
+---------------------------v-----------------------------+
|                  Core Infrastructure                    |
|  (HTTP Interceptors, Global Error Handling, Storage)    |
+---------------------------------------------------------+
                            |
+---------------------------v-----------------------------+
|                      Backend API                        |
+---------------------------------------------------------+

```

## 3. Directory Structure

The codebase is organized into four primary domains within the `src/app/` directory:

```text
src/app/
├── core/
│   ├── arch/              # Base architectural classes (Pagination, Request configs)
│   ├── exceptions/        # GlobalErrorHandler and exception adapters
│   ├── guards/            # RBAC routing guards (admin, auth, guest, role-redirect)
│   ├── interceptors/      # HTTP middleware (authInterceptor)
│   ├── layout/            # Main application shell and navigation configurations
│   ├── network/           # API request base configurations
│   ├── pages/             # Global system pages (404 Not Found, 403 Access Denied, 500 Error)
│   ├── service/           # Singleton API and Toast notification services
│   ├── storage/           # Local storage utilities
│   └── utils/             # Date, validation, and file manipulation utilities
├── features/
│   ├── account/           # Customer account settings
│   ├── auth/              # Authentication (Login, Signup, Address)
│   ├── cart/              # Shopping cart management
│   ├── dashboard/         # Administrative analytics overview
│   ├── home/              # Customer storefront
│   ├── my-orders/         # Customer order history
│   ├── orders/            # Administrative order fulfillment
│   └── product/           # Administrative product catalog management
├── shared/
│   └── entities/          # Reusable application-wide types (DataSize, StorageKey, etc.)
├── theme/
│   └── noir-zinc-theme.ts # Custom PrimeNG design tokens
├── app.config.ts          # Application bootstrapping and provider registration
├── app.routes.ts          # Root routing configuration
└── app.ts                 # Root component

```

## 4. Feature Module Architecture Detailed

Every module inside the `features/` directory is isolated and strictly divided into three distinct layers to ensure maintainability and testability:

1. **Presentation Layer (`/presentation`)**: Contains UI components, page-level routing components, and local state management services.
2. **Domain Layer (`/domain`)**: Contains pure business logic services and strict type definitions. It acts as the intermediary between data and presentation.
3. **Data Layer (`/data`)**: Responsible for API communication. It contains data models (Requests/Responses), entities, and repository services responsible for fetching and mapping data.

## 5. Routing and Access Control

The application implements a lazy-loaded routing strategy combined with Role-Based Access Control (RBAC).

* **Public Routes**: Accessible only to unauthenticated users via `guestGuard`.
* `/login`
* `/signup`


* **Authenticated App Shell**: All routes within this shell require authentication via `authGuard`.
* **Customer Role Routes**:
* `/home` (Storefront)
* `/cart`
* `/my-orders`
* `/settings`


* **Administrator Role Routes**: Require both authentication and administrative privileges via `adminGuard`.
* `/dashboard`
* `/orders`
* `/products`


* **Global Error Routes**: `/access-denied`, `/error`, `/not-found`.

## 6. How to Run the Application

### Prerequisites

* Node.js (version 18.x or higher)
* NPM or Yarn package manager
* Angular CLI (version 17 or higher)

### Installation

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Execute the following command to install all required dependencies:
```bash
npm install

```



### Running the Development Server

1. Ensure your backend API is accessible (update API endpoint variables in environment files if necessary).
2. Start the Angular development server by executing:
```bash
ng serve

```


3. Open a web browser and navigate to `http://localhost:4200/`. The application will automatically reload if you modify any of the source files.

### Building for Production

To compile the application for a production environment, execute:

```bash
ng build

```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests via Karma, run:

```bash
ng test

```

