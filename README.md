# Tutor AI: Personalized Learning with Supermemory  

## Inspiration  
As students, we’ve all faced the frustration of not finding clear answers outside class hours. Office hours are limited, TA queues are long, and generic AI tutors often lack the context of the actual course. We wanted to build a system that could act as a 24/7 personalized tutor, powered directly by the course material provided by professors.  

## What it does  
Tutor AI is a smart academic assistant that:  
- Lets professors upload lecture slides, notes, and assignments.  
- Gives students a simple chat interface to ask course-related questions.  
- Uses Supermemory to provide extended context and track learning history so students can learn from their mistakes.  
- Keeps everything private, since models run locally or on controlled servers.  

## How we built it  
- **Frontend:** React + Vite + Bootstrap, with a clean chatbot-like interface for students and a portal for teachers to upload content.  
- **Backend:** FastAPI in Python, with endpoints for file upload, text upload, and querying the LLM.  
- **Database:** AWS DynamoDB to track students, their classes, and upcoming tests.  
- **AI + Memory:** OpenAI API integrated with Supermemory for context persistence and query handling.  
- **Deployment:** AWS for hosting backend functions and storage.  

## Challenges we ran into  
- Setting up API keys and environment variables properly so keys weren’t exposed.  
- Dealing with CORS issues between React frontend and FastAPI backend.  
- Integrating Supermemory, since the Python client wasn’t readily available.  
- Time management during the hackathon while splitting backend and frontend responsibilities.  

## Accomplishments that we're proud of  
- Built a fully working demo with both student and teacher portals in a short time.  
- Achieved smooth chat-style Q&A with real backend integration.  
- Learned to deploy scalable backend functions on AWS.  
- Designed a UI that is both simple and effective.  

## What we learned  
- How to wire up frontend-backend pipelines quickly using FastAPI and React.  
- Importance of CORS and environment management in full-stack projects.  
- How to balance building something practical while also pushing into new territory with Supermemory.  
- Collaboration under tight deadlines is just as important as the code itself.  

## What's next for Tutor AI  
- Add file upload for students so they can ask questions about their own notes.  
- Expand to more LMS integrations (Canvas, Blackboard, etc.).  
- Implement quiz generation from professor content to help with test prep.  
- Fine-tune models on university-specific jargon for even higher accuracy.  
- Deploy as a fully managed service for universities.  
