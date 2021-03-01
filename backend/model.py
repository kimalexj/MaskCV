import matplotlib.pyplot as plt
import cv2

print(cv2.__version__)

# get cascade

# DEFAULT CASCADE
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# USE CORRECT FILE PATH BEFORE UNCOMMENTING
"""
nose_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'nose.xml')
mouth_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'mouth.xml')
"""


# CHANGE pass in image with correct pwd
img = cv2.imread('/Users/adnanahmad/Desktop/test.jpg')

img = cv2.cvtColor(img, cv2.IMREAD_GRAYSCALE)

faces = face_cascade.detectMultiScale(img)

# UNCOMMENT WHEN YOU FIX ABOVE
""" 
noses = nose_cascade.detectMultiScale(img)
mouths = mouth_cascade.detectMultiScale(img);
"""

out_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR) #colored output image


#plot boxes for faces
for (x,y,w,h) in faces:
    cv2.rectangle(out_img,(x,y),(x+w,y+h),(0,0,255),1)

# UNCOMMENT WHEN YOU FIX ABOVE
"""
for (x,y,w,h) in noses:
    cv2.rectangle(out_img,(x,y),(x+w,y+h),(0,0,255),1)

for (x,y,w,h) in mouths:
    cv2.rectangle(out_img,(x,y),(x+w,y+h),(0,0,255),1)
"""

plt.imshow(out_img)
plt.show()