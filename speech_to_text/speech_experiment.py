# -*- coding: utf-8 -*-
"""
Created on Mon Feb 20 09:42:35 2023

@author: micha
"""
import soundfile
import wave
import speech_recognition as sr
from pydub import AudioSegment
from pydub.silence import split_on_silence
import os
import sys
if(len(sys.argv)<2):
    raise Exception("Need to have a file argument")
filename = sys.argv[1]
r = sr.Recognizer()

"""
with sr.AudioFile(filename) as source:
    # listen for the data (load audio to memory)
    audio_data = r.record(source)
    # recognize (convert from speech to text)
    text = r.recognize_google(audio_data)
    print(text)
"""    
def get_large_audio_transcription(path):
    """
    Splitting the large audio file into chunks
    and apply speech recognition on each of these chunks
    """
    # open the audio file using pydub
    sound = AudioSegment.from_wav(path)  
    # split audio sound
    chunks = split_on_silence(sound,
        # Longer length = more conistent
        min_silence_len = 300,
        # Silence threshold, might shift to be dynamic
        silence_thresh = sound.dBFS-1,
        # keep the silence, as padding.
        keep_silence=200,
    )
    folder_name = "audio-chunks"
    # create a directory to store the audio chunks
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    whole_text = ""
    # process each chunk 
    for i, audio_chunk in enumerate(chunks, start=1):
        # export audio chunk and save it in
        # the `folder_name` directory.
        chunk_filename = os.path.join(folder_name, f"chunk{i}.wav")
        audio_chunk.export(chunk_filename, format="wav")
        # recognize the chunk
        with sr.AudioFile(chunk_filename) as source:
            audio_listened = r.record(source)
            # try converting it to text
            try:
                text = r.recognize_google(audio_listened)
            except sr.UnknownValueError as e:
                print("Error:", str(e))
            else:
                text = f"{text.capitalize()}. "
                print(chunk_filename, ":", text)
                whole_text += text
    # return the text for all chunks detected
    return whole_text
    
#print(get_large_audio_transcription(filename))