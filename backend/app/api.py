from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Suggestions(BaseModel):
    input: str
    suggest: List

dummy_spellcheck = {
    "input": "ացուշ",
    "suggest": [
        {
            "term": "ապուշ",
            "score": 0.982,
        },
        {
            "term": "անուշ",
            "score": 0.682,
        },
    ]
}

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Բարեւ"}

@app.post("/suggest", tags=["spellcheck"])
async def spellcheck(inputDict: dict) -> Suggestions:
    print(inputDict)
    return { "data": dummy_spellcheck }
