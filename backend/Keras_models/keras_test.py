import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import tensorflow as tf
from tensorflow import keras
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras import Sequential
from keras.layers import Flatten, Dense
from keras.applications.vgg19 import VGG19
import numpy as np
import cv2

# Remember to change all of the absolute paths to yours!
# Test data pulled from: https://www.kaggle.com/tongpython/cat-and-dog
# sudo python3 -m pip install (dependency name)
# Dependencies needed: tensorflow, keras, pillow, python3
# Create a folder to save your model under Keras_models (mkdir animal_model)


# Predict on a single image (use openCV), will predict at the end
animal_label = {0: 'Cat', 1: 'Dog'}
sample_image = cv2.imread('/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/Test/dogs/dog.4002.jpg')
sample_image = cv2.resize(sample_image, (128, 128))
sample_image = np.reshape(sample_image,[1,128,128,3])
sample_image = sample_image/255.0

# Determine if model has already been trained (clean out animal_model to retrain)
try: 
    model = keras.models.load_model('./animal_model') # folder for stored model
    
    # Predict for single image
    animal_result = model.predict(sample_image)
    print(animal_result);
    print("Single image prediction: " + animal_label[animal_result.argmax()])
except:
    training_directory = './data/Train';
    testing_directory = './data/Test';

    # Augment datasets
    training_data_generator = ImageDataGenerator(rescale = 1./255,horizontal_flip=True, vertical_flip=True, zoom_range=0.3);
    train_generator = training_data_generator.flow_from_directory(directory=training_directory,target_size=(128,128),class_mode='categorical',batch_size=32)

    testing_data_generator = ImageDataGenerator(rescale = 1./255,horizontal_flip=True, vertical_flip=True, zoom_range=0.3);
    test_generator = testing_data_generator.flow_from_directory(directory=testing_directory,target_size=(128,128),class_mode='categorical',batch_size=32)

    # Train vgg19 model
    vgg19 = VGG19(weights='imagenet',include_top=False,input_shape=(128,128,3))

    for layer in vgg19.layers:
        layer.trainable = False
        
    model = Sequential()
    model.add(vgg19)
    model.add(Flatten())

    # Specify Layers
    model.add(Dense(2,activation='sigmoid'))

    # Print summary of model used for training then compile
    model.summary()
    model.compile(optimizer="adam",loss="categorical_crossentropy",metrics ="accuracy")

    print("Model compiled, ready for training\n");

    history = model.fit(train_generator,
                steps_per_epoch=len(train_generator)//32,
                epochs=13) # Might want to go up to 20 epochs

    model.evaluate(test_generator)

    print("Finished training and evaluation, now saving model \n");
    model.save('./animal_model')

    # Prediction
    print("Prediction for single image: ")
    animal_result = model.predict(sample_image)
    print(animal_label[animal_result.argmax()])