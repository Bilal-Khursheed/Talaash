# -*- coding: utf-8 -*-


import numpy as np
import face_recognition
import sys
from csv import writer
import csv
import os



inputfilepath = 'TALAASH\\talash\\public\\upload\\sunaa.jpeg'

readimage = face_recognition.load_image_file(inputfilepath)
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

