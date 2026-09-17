# Complete Student REST API

CSC220 Activity 9 solution using Express, Mongoose, MongoDB Atlas, and dotenv.

## Requirements

- Node.js and npm
- A MongoDB Atlas cluster
- A MongoDB Atlas database user
- Your current IP address added to Atlas Network Access

## Setup

1. Open this folder in VS Code.
2. Open **Terminal -> New Terminal**.
3. Install the packages:

   ```powershell
   npm install
   ```

4. Create a private `.env` file by copying `.env.example`:

   ```powershell
   Copy-Item .env.example .env
   ```

5. Open `.env` and replace the placeholder connection string with the connection string from MongoDB Atlas.

   Example format:

   ```env
   MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/csc220?retryWrites=true&w=majority
   PORT=3000
   ```

   Do not upload `.env` to GitHub. If the password contains characters such as `@`, `:`, `/`, `?`, `#`, `[`, or `]`, URL-encode the password or reset it to an Atlas-generated password and copy the URI from Atlas.

## Run

Development mode with automatic restart:

```powershell
npm run dev
```

Normal mode:

```powershell
npm start
```

Expected terminal output:

```text
MongoDB connected
Running on http://localhost:3000
```

Stop the server with **Ctrl+C**.

## Test

Open these URLs in a browser:

- `http://localhost:3000/`
- `http://localhost:3000/api/students`

Use Postman, Thunder Client, or the included `requests.http` file to test every REST route.

Routes:

- `GET /api/students` returns all students with `200 OK`.
- `GET /api/students/:id` returns one student with `200 OK`, `404 Not Found`, or `400 Bad Request`.
- `POST /api/students` creates a student with `201 Created` or returns `400 Bad Request`.
- `PATCH /api/students/:id` updates a student with `200 OK`, `404 Not Found`, or `400 Bad Request`.
- `DELETE /api/students/:id` deletes a student with `204 No Content`, `404 Not Found`, or `400 Bad Request`.

Example POST body:

```json
{
  "name": "Nora",
  "major": "CS",
  "score": 88
}
```

Copy the returned `_id` and use it in the single-student, update, and delete URLs:

```text
http://localhost:3000/api/students/PASTE_ID_HERE
```

Example PATCH body:

```json
{
  "score": 95
}
```

DELETE requests should return `204 No Content` with no JSON body.

## Common fixes

- `MONGO_URI is missing`: create `.env` and add the Atlas URI.
- Authentication failure: check the Atlas database username and password.
- Connection timeout: add your current IP under Atlas **Database & Network Access**.
- `nodemon is not recognized`: run `npm install`, then use `npm run dev`.
- Empty array `[]`: the connection works, but no students have been added yet.
