import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import ssl
ssl._create_default_https_context = ssl._create_unverified_context

import tensorflow as tf
from tensorflow import keras
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras import Sequential
from keras.layers import Flatten, Dense, Dropout, LeakyReLU
from keras.applications.vgg19 import VGG19
from keras.applications.vgg16 import VGG16
from keras.callbacks import EarlyStopping
from keras.optimizers import Adam
import numpy as np
import cv2

def classifyImage(img):
    # Current best = 94% testing accuracy

    # Target model folder
    saved_location = "./mask_model_16"

    # Predict on a single image (use openCV), will predict at the end
    mask_label = {0: 'Incorrect Mask', 1: 'With Mask', 2: 'Without Mask'}
    sample_image = img

    sample_image = cv2.resize(sample_image, (128, 128))
    sample_image = np.reshape(sample_image,[1,128,128,3])
    sample_image = sample_image/255.0

    # Determine if model has already been trained (clean out mask_model to retrain)
    try:
        model = keras.models.load_model(saved_location) # folder for stored model

        # Predict for single image
        mask_result = model.predict(sample_image)
        print(mask_result);
        print("Single image prediction: " + mask_label[mask_result.argmax()])
        return mask_label[mask_result.argmax()]
    except:
        training_directory = './data/mask/Train';
        testing_directory = './data/mask/Test';

        # Augment datasets
        training_data_generator = ImageDataGenerator(
                    rescale = 1./255,
                    horizontal_flip=True, 
                    shear_range=0.3,
                    height_shift_range = 0.2, 
                    rotation_range = 10,
                    zoom_range=0.3, 
                    width_shift_range = 0.2);
        train_generator = training_data_generator.flow_from_directory(
                    directory=training_directory,target_size=(128,128),
                    class_mode='categorical',
                    batch_size=128);

        testing_data_generator = ImageDataGenerator(
                    rescale = 1./255,
                    horizontal_flip=True, 
                    shear_range=0.3,
                    height_shift_range = 0.2, 
                    rotation_range = 10,
                    zoom_range=0.3, 
                    width_shift_range = 0.2);
        test_generator = testing_data_generator.flow_from_directory(
                    directory=testing_directory,
                    target_size=(128,128),
                    class_mode='categorical',
                    batch_size=64);

        # Test vgg19 model
        vgg16 = VGG16(weights='imagenet',include_top=False,input_shape=(128,128,3))

        for layer in vgg16.layers:
            layer.trainable = False

        model = Sequential()
        model.add(vgg16)
        model.add(Flatten())

        # Specify Layers
        model.add(Dense(3, activation='sigmoid'))

        # Print summary of model used for training then compile
        model.summary()
        model.compile(optimizer="adam", loss="categorical_crossentropy", metrics ="accuracy")

        print("Model compiled, ready for training\n");

        # Stop training only when validation loss starts increasing (overfitting)
        es = EarlyStopping(monitor='val_loss', patience=8, verbose=0, min_delta=0.001, mode='auto')

        history = model.fit(train_generator,
                    steps_per_epoch=4,
                    validation_data=test_generator,
                    validation_steps=4,
                    epochs=400,
                    callbacks=[es])
        
        # Validation loss/accuracy
        val_accuracy_history = history.history['val_accuracy']
        val_loss_history = history.history['val_loss']
        print("v_accuracy:") 
        print(val_accuracy_history)
        print("v_loss:")
        print(val_loss_history)

        # Training loss/accuracy
        train_accuracy_history = history.history['accuracy']
        train_loss_history = history.history['loss']
        print("t_accuracy:")
        print(train_accuracy_history)
        print("t_loss:")
        print(train_loss_history)

        results = model.evaluate(test_generator)
        print("test loss, test acc: \n", results)

        print("Finished training and evaluation, now saving model \n");
        model.save(saved_location)

        # Prediction
        print("Prediction for single image: ")
        mask_result = model.predict(sample_image)
        print(mask_label[mask_result.argmax()])
        return mask_label[mask_result.argmax()];