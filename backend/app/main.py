from fastapi import FastAPI, Response
from fastapi.responses import JSONResponse
from app.routers.cats_router import router as cats_router

app = FastAPI()

app.include_router(cats_router)