import logging

from fastapi import FastAPI

app = FastAPI(root_path="/api")

@app.get("/reserve/{slug}")
async def reserve(slug: str):
    return {"slug": slug}
