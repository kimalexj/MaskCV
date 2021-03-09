# Be sure to delete the saved model in /mask_model before running
import cv2
from mask_model import classifyImage

img = cv2.imread('/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Test/without_mask/2.jpg');
classifyImage(img)