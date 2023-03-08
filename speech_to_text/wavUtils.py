from os import listdir
from os.path import isfile, join
import glob
import speech_recognition as sr 

fileList = glob.glob("audio-chunks\*.wav")
whole_text = ""
r = sr.Recognizer()
for f in fileList:
    #print(f)
    with sr.AudioFile(f) as source:
        audio_listened = r.record(source)
        # try converting it to text
        try:
            text = r.recognize_google(audio_listened)
        except sr.UnknownValueError as e:
            print("Error:", str(e))
        else:
            text = f"{text.capitalize()}. "
            print(f, ":", text)
            whole_text += "\n" + text
            
outputFile = open("output.txt", "w")
outputFile.write(whole_text)
outputFile.close()