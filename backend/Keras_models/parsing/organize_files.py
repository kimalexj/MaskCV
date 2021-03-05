import os
import shutil

# Training directories
with_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Train/with_mask'
without_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Train/without_mask'
incorrect_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Train/incorrect_mask'

# new locations
test_with_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Test/with_mask'
test_without_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Test/without_mask'
test_incorrect_directory = '/Users/alexjkim/Desktop/Projects/MaskCV/backend/Keras_models/data/mask/Test/incorrect_mask'

# Main (Move quarter of files in each training directory to test)
to_transfer_with = round((len(os.listdir(with_directory)) / 4) * 3);
to_transfer_without = round((len(os.listdir(without_directory)) / 4) * 3);
to_transfer_incorrect = round((len(os.listdir(incorrect_directory)) / 4) * 3);

# With mask directory
transferred = to_transfer_with
for filename in os.listdir(with_directory):
    if (transferred > 0 & filename.endswith(".jpg")):
        shutil.move(os.path.join(with_directory, filename), os.path.join(test_with_directory, filename))
        transferred = transferred - 1

# Without mask directory
transferred = to_transfer_without
for filename in os.listdir(without_directory):
    if (transferred > 0 & filename.endswith(".jpg")):
        shutil.move(os.path.join(without_directory, filename), os.path.join(test_without_directory, filename))
        transferred = transferred - 1

# Incorrect mask directory
transferred = to_transfer_incorrect
for filename in os.listdir(incorrect_directory):
    if (transferred > 0 & filename.endswith(".jpg")):
        shutil.move(os.path.join(incorrect_directory, filename), os.path.join(test_incorrect_directory, filename))
        transferred = transferred - 1



