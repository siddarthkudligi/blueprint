# Blueprint Educational Platform

A modern educational platform for professional skills development, inspired by WNBPC.

## Project Structure

```
blueprint/
├── frontend/          # Next.js frontend application
├── backend/           # FastAPI backend application
└── docs/             # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- PostgreSQL

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create .env file:
   ```bash
   cp ../.env.example .env
   # Update the environment variables in .env
   ```
5. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Database Setup
1. Create PostgreSQL database:
   ```sql
   CREATE DATABASE blueprint;
   ```
2. Update the DATABASE_URL in your .env file
3. Run database migrations (once implemented)

## Features
- Professional skills development programs
- Course management
- User authentication
- Program registration
- Contact forms
- Admin dashboard (coming soon)

## Development
- Frontend runs on: http://localhost:3000
- Backend API runs on: http://localhost:8000
- API documentation: http://localhost:8000/docs
