# Blueprint Educational Platform

A modern educational platform for professional skills development, featuring text-to-speech capabilities.

## Live Demo
Frontend: [https://blueprint-eight-orpin.vercel.app/](https://blueprint-eight-orpin.vercel.app/)

## Features
- Text-to-Speech conversion using Google's TTS service
- Modern, responsive UI with Tailwind CSS
- Real-time audio playback
- Error handling and loading states

## Tech Stack
- Frontend: Next.js 14 with TypeScript and Tailwind CSS
- Backend: FastAPI with Python 3.9+
- Text-to-Speech: Google Text-to-Speech (gTTS)

## Project Structure
```
blueprint/
├── frontend/           # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js app router
│   │   └── components/# React components
│   ├── next.config.js # Next.js configuration
│   └── .env.local.example # Environment variables template
├── backend/           # FastAPI backend
│   ├── routes/       # API endpoints
│   ├── models/       # Data models
│   └── requirements.txt # Python dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python 3.9+
- Git

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.local.example .env.local
   ```

4. Update `.env.local` with your configuration:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel project settings:
   - Add `NEXT_PUBLIC_API_URL` pointing to your backend URL
3. Deploy settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Backend (Coming Soon)
- Backend deployment instructions will be added once the backend is deployed
- Currently runs locally for development

## Development Workflow
1. Create feature branches from `main`
2. Make changes and test locally
3. Commit with descriptive messages
4. Push and create pull requests
5. Vercel will automatically deploy preview builds

## API Documentation
- Backend API documentation available at: `http://localhost:8000/docs`
- Main endpoints:
  - `POST /api/v1/text-to-speech`: Convert text to speech
    ```json
    {
      "text": "Text to convert to speech"
    }
    ```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Future Plans
- User authentication
- Multiple language support
- Save and share audio files
- Backend deployment
- Additional AI features

## License
MIT License - see LICENSE file for details
