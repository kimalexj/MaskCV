import matplotlib.pyplot as plt
from mtcnn.mtcnn import MTCNN
import face_recognition
import cv2


from mask_model import classifyImage

print(cv2.__version__)

# GLOBAL VARIABLES
BOX_THICKNESS = 2

# initialise the detector class.
detector = MTCNN()

nose_cascade = cv2.CascadeClassifier('./xml_cascades/nose.xml')
mouth_cascade = cv2.CascadeClassifier('./xml_cascades/mouth.xml')

path = "/Users/adnanahmad/Desktop/group1.jpeg"
out_img = face_recognition.load_image_file(path)

# Faces
faces = detector.detect_faces(out_img)

#plot boxes for faces
for face in zip(faces):
    (x, y, w, h) = face[0]['box']

    # percentage of head you want to show above and below face detection
    percent_cutoff_x = 0.15
    percent_cutoff_y = 0.30

    # cropped out faces (grayscaled and colored)
    y_top = int(max(y - (percent_cutoff_y * h), 0))
    y_bottom = int(y + h + (percent_cutoff_y * h))

    x_left = int(max(x - (percent_cutoff_x * w), 0))
    x_right = int(x + w + (percent_cutoff_x * w))

    face = out_img[y_top:y_bottom, x_left:x_right]

    classification = classifyImage(face)

    if (classification == 'Without Mask'):
        cv2.rectangle(out_img, (x, y), (x + w, y + h), (255, 0, 0), BOX_THICKNESS)
        cv2.putText(out_img, "NO MASK", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)
    elif (classification == 'With Mask'):
        cv2.rectangle(out_img, (x, y), (x + w, y + h), (0, 255, 0), BOX_THICKNESS)
        cv2.putText(out_img, "MASK", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
    else:

        # Nose and Mouth extraction
        nose = nose_cascade.detectMultiScale(face, scaleFactor=1.2, minNeighbors=6)
        mouth = mouth_cascade.detectMultiScale(face, scaleFactor=1.2, minNeighbors=6)

        # plot nose for current faces
        nose_not_covered = False
        for (nx, ny, nw, nh) in nose:
            nose_not_covered = True
            cv2.rectangle(face, (nx, ny), (nx + nw, ny + nh), (255, 0, 0), BOX_THICKNESS)

        mouth_not_covered = False
        for (mx, my, mw, mh) in mouth:
            mouth_not_covered = True
            cv2.rectangle(face, (mx, my), (mx + mw, my + mh), (255, 0, 0), BOX_THICKNESS)

        resp = ""
        if nose_not_covered and mouth_not_covered:
            resp = "NOSE, MOUTH"
        else:
            resp = "NOSE" if nose_not_covered else "MOUTH"

        cv2.rectangle(out_img, (x, y), (x + w, y + h), (255, 165, 0), BOX_THICKNESS)
        cv2.putText(out_img, "INCORRECT: " + resp, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 165, 0), 2)

# Turn axis off
plt.axis('off')

plt.imshow(out_img)
plt.show()