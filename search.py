# -*- coding: utf-8 -*-


import numpy as np
import face_recognition
import sys
from csv import writer
import csv
import os


# if len(sys.argv<2):
#     print("Not enough arguments")
# else:
#     inputfilepath = sys.argv[1]

#inputfilepath = 'TALAASH\\talash\\public\\Reportpics\\1871.jpg'
inputfilepath = sys.argv[1]
# print(inputfilepath)
readimage = face_recognition.load_image_file(inputfilepath)
unknown_Encodings = face_recognition.face_encodings(readimage)[0]
# row_contents = [Name,person_type,Contact,Details,Encodings]
# append_list_as_row('datafile.csv', row_contents)

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
    # else:
    #   print("not found") Name, Gender, Age, Time, Address, Wear,Contact
# >C:\Users\syeda\anaconda3\Scripts\activate
