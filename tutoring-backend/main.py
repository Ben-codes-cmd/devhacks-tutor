from fastapi import FastAPI
import boto3
from pydantic import BaseModel

app = FastAPI()

# DynamoDB client
dynamodb = boto3.resource("dynamodb", region_name="us-east-1")
table = dynamodb.Table("Students")

class Student(BaseModel):
    student_id: str
    name: str
    classes: list[str] = []
    upcoming_tests: list[str] = []
    notes: str = ""

@app.post("/students")
def create_student(student: Student):
    table.put_item(Item=student.dict())
    return {"msg": "Student created", "student": student}

@app.get("/students/{student_id}")
def get_student(student_id: str):
    resp = table.get_item(Key={"student_id": student_id})
    return resp.get("Item", {})

@app.put("/students/{student_id}")
def update_student(student_id: str, student: Student):
    table.put_item(Item=student.dict())
    return {"msg": "Student updated"}