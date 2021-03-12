from mtcnn.mtcnn import MTCNN
import face_recognition
import cv2
import matplotlib.pyplot as plt

path = "/Users/adnanahmad/Desktop/test4.jpeg"

# MTCNN

# initialise the detector class.
detector = MTCNN()

# load an image as an array
image = face_recognition.load_image_file(path)

# detect faces from input image.
face_locations = detector.detect_faces(image)

# draw bounding box and five facial landmarks of detected face
for face in zip(face_locations):
    (x, y, w, h) = face[0]['box']
    landmarks = face[0]['keypoints']
    cv2.rectangle(image,(x,y),(x+w,y+h),(255,0,0),2)
    for key, point in landmarks.items():
        cv2.circle(image, point, 2, (255, 0, 0), 6)

plt.axis('off')
plt.imshow(image)
plt.show()

# HAAR CASCADE

# FACE CASCADE
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

img = cv2.imread(path)
img = cv2.cvtColor(img, cv2.IMREAD_GRAYSCALE)
out_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR) #colored output image

# Faces
faces = face_cascade.detectMultiScale(img, scaleFactor=1.1, minNeighbors=2)

for (x,y,w,h) in faces:
    cv2.rectangle(out_img, (x, y), (x + w, y + h), (255, 0, 0), 2)

plt.axis('off')
plt.imshow(out_img)
plt.show()