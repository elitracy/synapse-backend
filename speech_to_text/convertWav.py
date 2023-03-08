from os import path
from pydub import AudioSegment

# files                                                                         
src = "quantum algo problems.mp3"
dst = "quantum algo problems.wav"

# convert wav to mp3                                                            
sound = AudioSegment.from_mp3(src)
sound.export(dst, format="wav")