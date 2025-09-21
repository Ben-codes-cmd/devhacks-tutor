from fastapi import FastAPI, UploadFile, File
import uvicorn
from uploadContext import uploadClient
from SupermemoryOpenAIClient import SupermemoryOpenAI
import boto3
from pydantic import BaseModel
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SUPERMEMORY_API_KEY = os.getenv("SUPERMEMORY_API_KEY")

"""
Set environment variables SUPERMEM_API_KEY and OPENAI_API_KEY as shown on the doc
***Query all API endpoints using 127.0.0.1:8000/{insert endpoint here}
"""

app = FastAPI()
uploadClient = uploadClient(os.environ['SUPERMEM_API_KEY'])
model = SupermemoryOpenAI(os.environ['OPENAI_API_KEY'], os.environ['SUPERMEM_API_KEY'], "user123")

# DynamoDB client
dynamodb = boto3.resource("dynamodb", region_name="us-east-1")
table = dynamodb.Table("Students")

class Student(BaseModel):
    student_id: str
    name: str
    classes: list[str] = []
    upcoming_tests: list[str] = []
    notes: str = ""

class Text(BaseModel):
    section: str
    text: str

class Query(BaseModel):
    question: str

"""
 send json object of the following format:
 {
    "question": "{question entered by user}"
 }

 expected response is of format:
 {
    "status": 200,
    "message": "{LLM response}"
 }
"""
@app.get("/query")
async def query_llm(query: Query):
    return {
        "status": 200,
        "message": model.query_LLM(query.question)
        }



@app.post("/upload/file")
async def upload_context_file(file: UploadFile = File(...)):

    save_path = os.path.join("uploads", file.filename)
    
    with open(save_path, "wb") as f:
        content = await file.read()
        f.write(content)
    
    uploadClient.uploadFile(Path(save_path))
    return

@app.post("/upload/text")
async def upload_context_text(text: Text):
    return uploadClient.uploadText(text.text, text.section)


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
