# -*- coding: utf-8 -*-
"""
Created on Mon Feb 20 09:42:35 2023

@author: micha
"""

import speech_recognition as sr
filename = "test_speech.wav"
r = sr.Recognizer()
with sr.AudioFile(filename) as source:
    # listen for the data (load audio to memory)
    audio_data = r.record(source)
    # recognize (convert from speech to text)
    text = r.recognize_google(audio_data)
    print(text)