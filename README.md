# 🎓 School Management

A full-stack school management application built with **Laravel** and **React.js**.

The project follows a separated architecture where Laravel is responsible for the backend REST API and React.js handles the frontend user interface.

---

## 📌 Overview

**School Management** is a web application designed to centralize and simplify the management of school-related data and operations.

The project is being developed with a modern full-stack architecture:

```text
React.js
    ↓
Axios
    ↓
Laravel REST API
    ↓
Eloquent ORM
    ↓
MySQL
```

The main goal is to build a clean, maintainable, and scalable application while applying modern development practices.

---

## 🚀 Tech Stack

### Backend

* **Laravel 12**
* **PHP**
* **Laravel Sanctum**
* **Eloquent ORM**
* **MySQL**
* REST API
* API Validation
* Database Migrations
* Seeders & Factories

### Frontend

* **React.js**
* **JavaScript**
* **Vite**
* **Axios**
* **React Router**
* CSS / UI framework

### Development Tools

* Git
* GitHub
* Composer
* npm
* VS Code

---

## 🏗️ Project Architecture

The project is organized into two independent applications:

```text
school-mangment/
│
├── back-end/                 # Laravel REST API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   ├── Requests/
│   │   │   └── Resources/
│   │   ├── Models/
│   │   └── ...
│   │
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   │   ├── factories/
│   │   ├── migrations/
│   │   └── seeders/
│   │
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   │
│   ├── storage/
│   ├── tests/
│   ├── artisan
│   ├── composer.json
│   └── .env.example
│
├── front-end/                # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔄 Application Flow

The application follows a client-server architecture.

```text
┌─────────────────────┐
│      React.js       │
│      Frontend       │
└──────────┬──────────┘
           │
           │ Axios / HTTP
           ↓
┌─────────────────────┐
│    Laravel API      │
│      Backend        │
└──────────┬──────────┘
           │
           │ Eloquent ORM
           ↓
┌─────────────────────┐
│       MySQL         │
│      Database       │
└─────────────────────┘
```

Example:

```text
React Component
      ↓
Axios GET /api/students
      ↓
Laravel Route
      ↓
Controller
      ↓
Student Model
      ↓
MySQL
      ↓
JSON Response
      ↓
React State
      ↓
UI
```

---

## 📚 Main Development Concepts

This project is also designed to apply important full-stack development concepts.

### Laravel

* MVC architecture
* RESTful APIs
* Models
* Controllers
* Migrations
* Relationships
* Seeders
* Factories
* Form Requests
* Validation
* API Resources
* Authentication
* Authorization
* Pagination
* Searching
* Filtering
* Error handling

### React

* Functional Components
* Props
* State Management
* Hooks
* `useState`
* `useEffect`
* React Router
* Forms
* Axios
* API integration
* Component reusability
* Conditional rendering
* Searching
* Filtering
* Pagination

---

## 🗄️ Database

The backend uses **MySQL** as the relational database.

Laravel migrations are used to define and manage the database structure.

Example entities planned for the application include:

```text
Users
Students
Teachers
Classes
Subjects
...
```

Relationships between entities are handled using Laravel's **Eloquent ORM**.

> Database entities and relationships will evolve as the application is developed.

---

## 🔐 Authentication

Authentication is handled by the Laravel backend.

The frontend communicates with the backend through API requests.

The authentication architecture is based on Laravel's authentication system and **Laravel Sanctum**.

---

## 📡 API

The backend exposes REST API endpoints consumed by the React application.

Example structure:

```text
/api/students
/api/teachers
/api/classes
/api/subjects
```

The exact endpoints will evolve according to the application's features.

---

## ⚛️ React & Axios

The frontend uses **Axios** to communicate with the Laravel API.

Example request flow:

```text
React
  ↓
Axios
  ↓
GET /api/students
  ↓
Laravel
  ↓
JSON response
  ↓
React state
```

This separation allows the frontend and backend to remain independent applications.

---

## 🔎 Search & Filtering

The application is designed to support common data-management operations such as:

* Searching
* Filtering
* Sorting
* Pagination
* Dynamic data loading

These operations will be implemented progressively as the application grows.

---

## 🧩 Reusable Components

The React frontend follows a component-based architecture.

Reusable components may include:

```text
Button
Input
Modal
Table
Card
Navbar
Sidebar
Pagination
Form
...
```

The goal is to avoid unnecessary duplication and keep the frontend maintainable.

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

```bash
cd school-mangment
```

---

# ⚙️ Backend Setup

Go to the Laravel backend:

```bash
cd back-end
```

Install PHP dependencies:

```bash
composer install
```

Create the environment file:

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Configure your database in:

```text
back-end/.env
```

Example:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=school_management
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

Run seeders when available:

```bash
php artisan db:seed
```

Or:

```bash
php artisan migrate --seed
```

Start the Laravel development server:

```bash
php artisan serve
```

The API will normally be available at:

```text
http://127.0.0.1:8000
```

---

# ⚛️ Frontend Setup

Open another terminal.

Go to:

```bash
cd front-end
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend is currently configured to run on:

```text
http://localhost:3000
```

---

## 🔗 Backend & Frontend

During development, two servers are used:

```text
Frontend
http://localhost:3000

        ↓ Axios

Backend API
http://127.0.0.1:8000
```

The React application communicates with Laravel through HTTP requests.

---

## 🌱 Database Seeding

Laravel seeders and factories are used to generate development data.

Example:

```bash
php artisan db:seed
```

Factories can be used to generate realistic test data during development.

---

## 🧪 Testing

Laravel tests can be executed from the backend directory:

```bash
php artisan test
```

Or:

```bash
vendor/bin/phpunit
```

---

## 🧹 Code Quality

The project aims to follow clean-code principles:

* Clear naming conventions
* Reusable components
* Separation of responsibilities
* RESTful API design
* Validation on the backend
* Reusable frontend services
* Avoiding duplicated logic
* Maintainable project structure

---

## 🌿 Git Workflow

The repository uses Git for version control.

Example workflow:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "feat: add student management"
```

```bash
git push origin main
```

Recommended commit prefixes:

```text
feat:     New feature
fix:      Bug fix
refactor: Code restructuring
docs:     Documentation
style:    UI or formatting changes
test:     Tests
chore:    Maintenance
```

Example:

```text
feat: add student CRUD API
feat: add student list page
fix: resolve student validation error
refactor: improve API structure
docs: update installation instructions
```

---

## 🔒 Environment Variables

Sensitive environment files must not be committed to GitHub.

Do not commit:

```text
.env
```

The repository should contain:

```text
.env.example
```

Developers should create their own `.env` file locally.

---

## 📈 Development Roadmap

### Phase 1 — Project Setup

* [x] Laravel backend
* [x] React frontend
* [x] Separate backend/frontend structure
* [x] Vite configuration
* [x] Git repository setup

### Phase 2 — Backend

* [ ] Database design
* [ ] Migrations
* [ ] Models
* [ ] Relationships
* [ ] Factories
* [ ] Seeders
* [ ] Controllers
* [ ] Form Requests
* [ ] API Resources
* [ ] API routes
* [ ] Validation

### Phase 3 — API

* [ ] CRUD APIs
* [ ] Authentication
* [ ] Authorization
* [ ] Pagination
* [ ] Search
* [ ] Filtering
* [ ] API error handling

### Phase 4 — Frontend

* [ ] React Router
* [ ] Layouts
* [ ] Reusable components
* [ ] Axios configuration
* [ ] API services
* [ ] Forms
* [ ] CRUD interfaces
* [ ] Search
* [ ] Filtering
* [ ] Pagination
* [ ] Loading states
* [ ] Error handling

### Phase 5 — Integration

* [ ] Connect React with Laravel API
* [ ] Authentication flow
* [ ] Protected routes
* [ ] User management
* [ ] Student management
* [ ] Teacher management
* [ ] Class management
* [ ] Subject management

### Phase 6 — Testing & Optimization

* [ ] Backend tests
* [ ] API testing
* [ ] Frontend testing
* [ ] Performance improvements
* [ ] Security review
* [ ] UI/UX improvements
* [ ] Production configuration

---

## 🚀 Future Improvements

Possible future improvements include:

* Role-based access control
* Dashboard analytics
* Notifications
* Advanced search
* Advanced filtering
* File management
* Reporting
* Export functionality
* Responsive design
* Production deployment

---

## 👨‍💻 Author

**Salem Zaafrou**

Full Stack Developer

### Technologies

```text
Laravel
PHP
React.js
JavaScript
MySQL
Axios
Git
GitHub
```

---

## 📄 License

This project is developed for educational and portfolio purposes.

The license may be updated when the project reaches its final version.
