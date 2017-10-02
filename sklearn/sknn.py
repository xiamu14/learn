# import datasets
from scipy.spatial import distance
from sklearn.datasets import load_iris
from sklearn.cross_validation import train_test_split
from sklearn.metrics import accuracy_score
from sklearn import tree
from sklearn.neighbors import KNeighborsClassifier

def euc(a, b):
    return distance.euclidean(a, b)

class ScrappyKNN():
    def fit(self, X_train, y_train):
        self.X_train = X_train
        self.y_train = y_train

    def predict(self, X_test):
        predictions = []
        for row in X_test:
            label = self.closeset(row)
            predictions.append(label)
        return predictions

    def closeset(self, row):
        best_dist = euc(row, self.X_train[0])
        best_index = 0
        for i in range(1, len(self.X_train)):
            dist = euc(row, X_train[i])
            if dist < best_dist:
                best_dist = dist
                best_index = i

        return self.y_train[best_index]

iris = load_iris()

X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = .5)

# train
# 决策树
# my_classifier = tree.DecisionTreeClassifier()
# my_classifier = KNeighborsClassifier()
my_classifier = ScrappyKNN()

my_classifier.fit(X_train, y_train)

predictions = my_classifier.predict(X_test)

# print(predictions)
# print(y_test)
# 将预测标签和真实标签比较
print(accuracy_score(y_test, predictions))
