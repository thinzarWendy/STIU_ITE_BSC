# CSC220 Guided Lab Solution
## Middleware & a Rendered Page

This is the solution code for **In Class Practice: Middleware & a Rendered Page**.

## Features

- Express server
- Logger middleware
- `express.json()` middleware
- `GET /api/students`
- `GET /api/students/:id`
- `POST /api/students`
- `GET /api/students?major=IT`
- `GET /students` rendered with EJS
- 404 JSON handler

## How to Run

Install dependencies:

```powershell
npm install
```

Run with nodemon:

```powershell
npm run dev
```

Open in browser:

```text
http://localhost:3000
http://localhost:3000/api/students
http://localhost:3000/api/students/2
http://localhost:3000/api/students?major=IT
http://localhost:3000/students
```

## Test POST /api/students

Use Postman, Thunder Client, or REST Client.

Method:

```text
POST
```

URL:

```text
http://localhost:3000/api/students
```

Body JSON:

```json
{
  "id": 6,
  "name": "May",
  "major": "IT"
}
```

Expected status:

```text
201 Created
```

## GitHub Submission Reminder

Do not push:

```text
node_modules/
.env
```
