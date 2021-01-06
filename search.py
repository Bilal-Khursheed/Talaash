# -*- coding: utf-8 -*-


import numpy as np
import face_recognition
import sys
from csv import writer
import csv
import os
import urllib.request


inputfilepath = 'https://res.cloudinary.com/dztyioznk/image/upload/v1609969742/reportPics/c63dewtepxd4rfsogjuw.jpg'
response = urllib.request.urlopen(inputfilepath)
readimage = face_recognition.load_image_file(response)
unknown_Encodings = face_recognition.face_encodings(readimage)[0]

with open("datafile.csv", "r") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for lines in csv_reader:
        s = lines[7]
        KnownEncoding = np.array(list(map(float, s[1:-1].split())))
        results = face_recognition.compare_faces(
            [KnownEncoding], unknown_Encodings)
        if results[0] == True:
            print(lines[0], ",", lines[1], ",", lines[2], ",",
                  lines[3], ",", lines[4], ",", lines[5], ",", lines[6])

    os.remove(inputfilepath)

