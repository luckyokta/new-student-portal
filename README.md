# Student Portal

A simple backend CRUD API project built using Express.js. This project was created as an exercise to understand:
- Backend project structure
- RESTful API development
- CRUD operations
- MongoDB integration
- Sending emails using Nodemailer

## Features
- Get all student data
- Get student by ID
- Create new student
- Update existing student data
- Delete student data
- Test email sending using Nodemailer

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer

## Project Structure
```bash
student-portal/
│
├── configurations/  # MongoDB integration
├── controllers/     # Request handlers
├── helpers/         # Mailer, password hash, token generation
├── middlewares/     # Auth and error handling
├── models/          # Database collection schemas (User, Student)
├── routes/          # API routes
├── index.js         # Entry point
├── package.json
└── README.md
```

## Installation & Setup
**1. Clone the repository**
```bash
git clone https://github.com/luckyokta/student-portal.git
```

**2. Navigate to the project folder**
```bash
cd student-portal
```

**3. Install dependencies**
```bash
npm install
```

**4. Create Environment variables**
Create a `.env` file in the root directory
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_project_pass
EMAIL_TO=recipient_email
```

**5. Running The Project**
If you haven't installed nodemon, run:
```bash
npm install nodemon
```

Running the project
```bash
npm start
```

## API Endpoints
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/` | Get all students |
| GET | `/:id` | Get student by ID |
| POST | `/` | Create new student |
| PUT | `/:id` | Update student |
| DELETE | `/:id` | Delete student |
| GET | `/test-email` | Send test email using Nodemailer |

## Nodemailer Integration
This project includes a simple Nodemailer implementation to practice sending emails using Node.js.

The `/test-email` endpoint can be used to verify whether email delivery is working properly.