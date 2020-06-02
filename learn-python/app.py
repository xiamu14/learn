# -*- coding: utf-8 -*-

# import tensorflow as tf

# # Set up a linear classifier.
# classifier = tf.estimator.LinearClassifier()

# # Train the model on some example data.
# classifier.train(input_fn=train_input_fn, steps=2000)

# # Use it to predict.
# predictions = classifier.predict(input_fn=predict_input_fn)
from __future__ import print_function

import math

from IPython import display
from matplotlib import cm
from matplotlib import pyplot as plt
from sklearn import metrics
import numpy as np
import pandas as pd
import tensorflow as tf

tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
pd.options.display.max_rows = 10
pd.options.display.float_format = '{:.1f}'.format

california_housing_dataframe = pd.read_csv(
    "https://download.mlcc.google.cn/mledu-datasets/california_housing_train.csv", sep=",")

# print(california_housing_dataframe)


def preprocess_features(california_housing_dataframe):
    selected_features = california_housing_dataframe[
        [
            'latitude',
            "longitude",
            "housing_median_age",
            "total_rooms",
            "total_bedrooms",
            "population",
            "households",
            "median_income"
        ]
    ]
    processed_features = selected_features.copy()
    processed_features["rooms_per_person"] = (
        california_housing_dataframe["total_rooms"] /
        california_housing_dataframe["population"])
    return processed_features


def preprocess_targets(california_housing_dataframe):
    output_targets = pd.DataFrame()
    output_targets["median_house_value"] = (
        california_housing_dataframe["median_house_value"] / 1000.0)
    return output_targets


training_examples = preprocess_features(
    california_housing_dataframe.head(12000))
training_examples.describe()

training_targets = preprocess_targets(california_housing_dataframe.head(12000))
training_targets.describe()

validation_examples = preprocess_features(
    california_housing_dataframe.tail(5000))
validation_examples.describe()

validation_targets = preprocess_targets(
    california_housing_dataframe.tail(5000))
validation_targets.describe()
