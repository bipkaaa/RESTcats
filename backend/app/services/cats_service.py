from fastapi.responses import JSONResponse

mocked_cats = [
    {"id": 1, "name": "cutie", "type": "GET", "description": "meowie meow"},
    {"id": 2, "name": "neutral", "type": "POST", "description": "meow"},
    {"id": 3, "name": "killer", "type": "DELETE", "description": "aggressive meow"},
]

async def get_all_cats():
    return JSONResponse(mocked_cats)