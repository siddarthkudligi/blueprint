from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from gtts import gTTS
import base64
import io

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/text-to-speech")
async def text_to_speech(request: TextRequest):
    try:
        # Create an in-memory bytes buffer
        mp3_fp = io.BytesIO()
        
        # Create gTTS object and save to buffer
        tts = gTTS(text=request.text, lang='en')
        tts.write_to_fp(mp3_fp)
        
        # Get the value and encode to base64
        mp3_fp.seek(0)
        audio_base64 = base64.b64encode(mp3_fp.read()).decode()
        
        return {"audio": audio_base64}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
