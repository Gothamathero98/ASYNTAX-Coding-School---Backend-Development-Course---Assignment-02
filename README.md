# Employee Management System - Assignment 02

A full-stack web application for managing employees, departments, roles, and attendance tracking with user authentication and authorization.

## 🎯 Project Overview

This is a Node.js + Express backend application built with modern technologies for managing:
- **User Authentication** (Registration, Login, Password Change)
- **Employee Management** (CRUD operations)
- **Department Management**
- **Role Management**
- **Attendance Tracking** (Check-in/Check-out)

**Tech Stack:**
- **Backend**: Node.js + Express.js
- **Database**: Supabase (PostgreSQL)
- **Caching**: Upstash Redis
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, express-sanitize, xss-clean
- **Validation**: Joi

---

## 📋 Prerequisites

Before running the project, ensure you have:
- Node.js (v16 or higher)
- npm (v7 or higher)
- Supabase account and project
- Upstash Redis account

---

## 🚀 Installation & Setup

### 1. Clone or Download the Project
```bash
cd "Assignment 02"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Configuration

Create a `.env` file in the root directory. You can copy from `.env.example`:

```bash
# Copy example file
copy .env.example .env
```

**Required Environment Variables:**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_change_me
JWT_EXPIRES_IN=8h

# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_supabase_service_key_here

# Redis/Upstash Configuration
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AXxx...

# CORS Configuration (comma-separated)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

**How to Get These Values:**

1. **Supabase**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Copy `Project URL` and `Service Role Key` from project settings

2. **Upstash Redis**:
   - Go to [upstash.com](https://upstash.com)
   - Create a new Redis database
   - Copy REST URL and REST Token

3. **JWT_SECRET**:
   - Generate a strong random string (use: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

---

## 📁 Project Structure

```
Assignment 02/
├── src/
│   ├── config/              # Configuration files
│   │   ├── redis.js        # Redis/Upstash connection
│   │   └── supabase.js     # Supabase connection
│   │
│   ├── controllers/        # Request handlers
│   │   ├── auth.controller.js
│   │   ├── employee.controller.js
│   │   ├── department.controller.js
│   │   ├── role.controller.js
│   │   └── attendance.controller.js
│   │
│   ├── services/           # Business logic
│   │   ├── auth.service.js
│   │   ├── employee.service.js
│   │   ├── department.service.js
│   │   ├── role.service.js
│   │   └── attendance.service.js
│   │
│   ├── repositories/       # Database queries
│   │   ├── auth.repository.js
│   │   ├── employee.repository.js
│   │   ├── department.repository.js
│   │   ├── role.repository.js
│   │   └── attendance.repository.js
│   │
│   ├── routers/            # Route definitions
│   │   ├── auth.routes.js
│   │   ├── employee.routes.js
│   │   ├── department.routes.js
│   │   ├── role.routes.js
│   │   ├── attendance.routes.js
│   │   └── index.js
│   │
│   ├── middlewares/        # Middleware functions
│   │   ├── auth.middleware.js      # JWT verification
│   │   ├── cors.middleware.js      # CORS settings
│   │   ├── sanitise.middleware.js  # Input sanitization
│   │   └── validate.middleware.js  # Schema validation
│   │
│   ├── models/             # Joi validation schemas
│   │   ├── auth.model.js
│   │   ├── employee.model.js
│   │   ├── department.model.js
│   │   ├── role.model.js
│   │   └── attendance.model.js
│   │
│   └── utils/              # Utility functions
│       ├── appError.js     # Custom error class
│       ├── catchAsync.js   # Exception wrapper
│       ├── errorHandler.js # Global error handler
│       ├── jwt.js          # JWT utilities
│       └── responseHandler.js # Standard responses
│
├── frontend/               # Frontend files
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── employees.html
│   ├── departments.html
│   ├── roles.html
│   ├── attendance.html
│   ├── styles.css
│   └── api.js
│
├── app.js                  # Express app configuration
├── server.js               # Server entry point
├── package.json            # Project dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── API_ENDPOINTS.md        # API documentation
├── TECHNICAL_REPORT_GUIDELINES.md  # Report guidelines
└── README.md              # This file
```

---

## 🏃‍♂️ Running the Project

### Development Mode (with hot-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in `.env`)

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/auth/register` | Register new user | ❌ |
| POST | `/auth/login` | User login | ❌ |
| GET | `/auth/me` | Get current user | ✅ |
| POST | `/auth/logout` | User logout | ✅ |
| PUT | `/auth/change-password` | Change password | ✅ |

### Employee Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/employees` | Get all employees | ✅ |
| GET | `/employees/:id` | Get specific employee | ✅ |
| POST | `/employees` | Create new employee | ✅ |
| PUT | `/employees/:id` | Update employee | ✅ |
| DELETE | `/employees/:id` | Delete employee | ✅ |

### Department Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/departments` | Get all departments | ✅ |
| GET | `/departments/:id` | Get specific department | ✅ |
| POST | `/departments` | Create new department | ✅ |
| PUT | `/departments/:id` | Update department | ✅ |
| DELETE | `/departments/:id` | Delete department | ✅ |

### Role Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/roles` | Get all roles | ✅ |
| GET | `/roles/:id` | Get specific role | ✅ |
| POST | `/roles` | Create new role | ✅ |
| PUT | `/roles/:id` | Update role | ✅ |
| DELETE | `/roles/:id` | Delete role | ✅ |

### Attendance Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| GET | `/attendance` | Get attendance records | ✅ |
| GET | `/attendance/:id` | Get specific record | ✅ |
| POST | `/attendance` | Create attendance record | ✅ |
| POST | `/attendance/checkin` | Employee check-in | ✅ |
| POST | `/attendance/checkout` | Employee check-out | ✅ |
| PUT | `/attendance/:id` | Update attendance | ✅ |
| DELETE | `/attendance/:id` | Delete attendance | ✅ |

**For detailed API documentation, see [API_ENDPOINTS.md](API_ENDPOINTS.md)**

---

## 🔐 Authentication

### How Authentication Works

1. **Register**: User creates account with email and password
   ```bash
   POST /api/auth/register
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "secure_password"
   }
   ```

2. **Login**: User logs in and receives JWT token
   ```bash
   POST /api/auth/login
   {
     "email": "john@example.com",
     "password": "secure_password"
   }
   ```

3. **Use Token**: Include token in subsequent requests
   ```
   Authorization: Bearer <your_jwt_token>
   ```

4. **Token Validation**: Middleware verifies token on protected routes

5. **Logout**: Token is added to Redis blacklist (revoked)

---

## 🛡️ Security Features

✅ **Password Hashing**: bcryptjs (12 salt rounds)  
✅ **JWT Authentication**: Secure token-based auth  
✅ **Input Sanitization**: XSS and NoSQL injection prevention  
✅ **CORS Configuration**: Whitelist allowed origins  
✅ **Request Validation**: Joi schema validation  
✅ **Token Blacklisting**: Redis-based logout (revocation)  
✅ **Error Handling**: No sensitive info in error messages  
✅ **Environment Variables**: Secrets not hardcoded  

---

## 🧪 Testing the API

### Using cURL

**Register User**:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login User**:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get Current User** (with token):
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <your_token>"
```

**Get All Employees** (with token):
```bash
curl -X GET http://localhost:5000/api/employees \
  -H "Authorization: Bearer <your_token>"
```

### Using Postman

1. Import the API endpoints from [API_ENDPOINTS.md](API_ENDPOINTS.md)
2. Set the `Authorization` header to type `Bearer Token`
3. Paste your JWT token received from login

---

## 📊 Database Schema

### Users Table
- `id` (UUID)
- `name` (String)
- `email` (String, unique)
- `password` (String, hashed)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Employees Table
- `id` (UUID)
- `name` (String)
- `email` (String)
- `department_id` (Foreign Key → departments)
- `role_id` (Foreign Key → roles)
- `salary` (Number)
- `join_date` (Date)
- `is_active` (Boolean)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Departments Table
- `id` (UUID)
- `name` (String)
- `description` (Text)
- `budget` (Number)
- `manager_id` (UUID)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Roles Table
- `id` (UUID)
- `name` (String)
- `title` (String)
- `description` (Text)
- `permissions` (Array/JSON)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Attendance Table
- `id` (UUID)
- `employee_id` (Foreign Key → employees)
- `date` (Date)
- `status` (Enum: present, absent, leave)
- `check_in` (Time)
- `check_out` (Time)
- `duration` (Number - hours)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

---

## 🐛 Error Handling

### HTTP Status Codes
- `200` - OK (Success)
- `201` - Created (Resource created)
- `400` - Bad Request (Invalid input)
- `401` - Unauthorized (Invalid token)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found (Resource not found)
- `409` - Conflict (Resource already exists)
- `500` - Internal Server Error

### Error Response Format
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400
}
```

---

## 🔄 Development Workflow

### Making Changes

1. **Create a new branch** (optional):
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes** to relevant files

3. **Test your changes**:
   ```bash
   npm run dev
   ```

4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

5. **Push changes**:
   ```bash
   git push origin feature/new-feature
   ```

---

## 📝 Available Scripts

```bash
# Start development server with hot-reload
npm run dev

# Start production server
npm start

# Run tests (if configured)
npm test
```

---

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📞 Support & Troubleshooting

### Common Issues

**❌ "Port already in use"**
- Change PORT in `.env` file
- Or kill process using the port

**❌ "Cannot connect to Supabase"**
- Verify `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Check if Supabase project is active

**❌ "Redis connection error"**
- Verify `UPSTASH_REDIS_REST_URL` and token
- Check internet connection

**❌ "JWT token invalid"**
- Ensure token is included in `Authorization` header
- Check if token has expired (default: 8 hours)
- Re-login to get new token

---

## 📄 License

ISC

---

## 👤 Author

**Gothama Thero**

---

## 📅 Version

**Version**: 1.0.0  
**Last Updated**: April 1, 2026

---

## 📚 Related Documentation

- [API_ENDPOINTS.md](API_ENDPOINTS.md) - Complete API reference
- [TECHNICAL_REPORT_GUIDELINES.md](TECHNICAL_REPORT_GUIDELINES.md) - Technical report guidelines
- [.env.example](.env.example) - Environment variables template

---

**Ready to start? Follow the [Installation & Setup](#-installation--setup) section above!** 🚀
