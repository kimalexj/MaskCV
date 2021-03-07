import matplotlib.pyplot as plt
import cv2

from mask_model import classifyImage

print(cv2.__version__)

# get cascade

# DEFAULT CASCADE
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_alt2.xml')
nose_cascade = cv2.CascadeClassifier('./Keras_models/xml_cascades/nose.xml')
mouth_cascade = cv2.CascadeClassifier('./Keras_models/xml_cascades/mouth.xml')

# CHANGE pass in image with correct pwd
img = cv2.imread('/Users/angelitosomera/Downloads/mask.webp')
img = cv2.cvtColor(img, cv2.IMREAD_GRAYSCALE)
out_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR) #colored output image

# Faces
faces = face_cascade.detectMultiScale(img, scaleFactor=1.2, minNeighbors=6, minSize=(40, 40))

#plot boxes for faces
for (x,y,w,h) in faces:
    # cropped out faces (grayscaled and colored)
    face = img[y:y+h, x:x+w]
    out_face = out_img[y:y+h, x:x+w]

    classification = classifyImage(out_face)

    if (classification == 'Without Mask'):
        cv2.rectangle(out_img, (x, y), (x + w, y + h), (255, 0, 0), 10)
    elif (classification == 'With Mask'):
        cv2.rectangle(out_img, (x, y), (x + w, y + h), (0, 255, 0), 10)
    else:
        # Nose and Mouth extraction
        nose = nose_cascade.detectMultiScale(face, scaleFactor=1.2, minNeighbors=6)
        mouth = mouth_cascade.detectMultiScale(face, scaleFactor=1.2, minNeighbors=6)

        # plot nose for current face
        for (nx, ny, nw, nh) in nose:
            cv2.rectangle(out_face, (nx, ny), (nx + nw, ny + nh), (0, 255, 0), 5)

        for (mx, my, mw, mh) in mouth:
            cv2.rectangle(out_face, (mx, my), (mx + mw, my + mh), (255, 0, 0), 5)

plt.imshow(out_img)
plt.show()