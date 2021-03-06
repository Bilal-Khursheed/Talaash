
import numpy as np
import face_recognition
import sys
from csv import writer
import urllib.request


def append_list_as_row(file_name, list_of_elem):
    # Open file in append mode
    with open(file_name, 'a+', newline='') as write_obj:
        # Create a writer object from csv module
        csv_writer = writer(write_obj)
        # Add contents of list as last row in the csv file
        csv_writer.writerow(list_of_elem)


inputfilepath = sys.argv[1]
Name = sys.argv[2]
Gender = sys.argv[3]
Age = sys.argv[4]
Time = sys.argv[5]
Address = sys.argv[6]
Wear = sys.argv[7]
Phone = sys.argv[8]

response = urllib.request.urlopen(inputfilepath)
readimage = face_recognition.load_image_file(response)
Encodings = face_recognition.face_encodings(readimage)[0]
row_contents = [Name, Gender, Age, Time, Address, Wear, Phone, Encodings]
append_list_as_row('datafile.csv', row_contents)
