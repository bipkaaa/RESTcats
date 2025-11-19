from services.cats_service import get_all_cats
from fastapi import APIRouter

router = APIRouter()

@router.get('/')
async def get_cats():
    return get_all_cats()