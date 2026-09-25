# CSC220 Week 9 Guided Lab 1 Solution

## Register and Login Endpoints

This solution matches Guided Lab 1 in `CSC220_Week9_Authentication_and_Security_Guided_Labs.docx`.
It adds authentication routes to the existing Student REST API.

## Included Files

```text
config/db.js
controllers/studentController.js
models/Student.js
models/User.js
routes/students.js
routes/auth.js
app.js
package.json
.env.example
.gitignore
README.md
CSC220_Week9_Guided_Lab1_Postman_Collection.json
```

## How to Run

### 1. Install dependencies

```powershell
npm install
```

### 2. Create `.env`

Copy `.env.example` and rename it to `.env`.

Update the values:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/csc220
JWT_SECRET=my_super_secret_key
PORT=3000
```

### 3. Run the server

```powershell
npm run dev
```

Expected output:

```text
MongoDB connected
Running on http://localhost:3000
```

## Test Register

```text
POST http://localhost:3000/api/auth/register
```

Body -> raw -> JSON:

```json
{
  "email": "student1@example.com",
  "password": "password123"
}
```

Expected status:

```text
201 Created
```

The response should include `id`, `email`, and `role`, but not the password.

## Test Login

```text
POST http://localhost:3000/api/auth/login
```

Body -> raw -> JSON:

```json
{
  "email": "student1@example.com",
  "password": "password123"
}
```

Expected response:

```json
{
  "token": "..."
}
```

## Test Wrong Login

Use the same email with the wrong password.

Expected status:

```text
401 Unauthorized
```

Expected response:

```json
{
  "error": "Invalid credentials"
}
```

## Student Routes

These routes are still available in Lab 1 and are not protected yet:

- `GET /api/students`
- `GET /api/students/:id`
- `POST /api/students`
- `PATCH /api/students/:id`
- `DELETE /api/students/:id`

JWT protection is added in `week9_lab2_solution`.

## Important

Do not upload:

```text
node_modules/
.env
```
