---
layout: post
title: "Titanic Survival Data"
subtitle: "Basic Exploratory Data Analysis"
background: ''
---

### Basic Exploratory Data Analysis using Titanic data set

The Titanic dataset is a well-known dataset in the field of data science and machine learning. It is a dataset that contains information about the passengers aboard the Titanic ship when it sank on April 15, 1912. The dataset is often used for data analysis and machine learning projects to predict the survival of the passengers based on the attributes given. 

#### Load the Data

To begin, we must first load the data that we want to explore.


```python
# relevant libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
```


```python
train_data = pd.read_csv('data/train.csv')
```


```python
train_data.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Name</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Ticket</th>
      <th>Fare</th>
      <th>Cabin</th>
      <th>Embarked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0</td>
      <td>3</td>
      <td>Braund, Mr. Owen Harris</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>A/5 21171</td>
      <td>7.2500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>Cumings, Mrs. John Bradley (Florence Briggs Th...</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>PC 17599</td>
      <td>71.2833</td>
      <td>C85</td>
      <td>C</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>1</td>
      <td>3</td>
      <td>Heikkinen, Miss. Laina</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>STON/O2. 3101282</td>
      <td>7.9250</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>Futrelle, Mrs. Jacques Heath (Lily May Peel)</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>113803</td>
      <td>53.1000</td>
      <td>C123</td>
      <td>S</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0</td>
      <td>3</td>
      <td>Allen, Mr. William Henry</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>373450</td>
      <td>8.0500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
  </tbody>
</table>
</div>



#### Retrieving Basic Information about the Data


```python
train_data.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 891 entries, 0 to 890
    Data columns (total 12 columns):
     #   Column       Non-Null Count  Dtype  
    ---  ------       --------------  -----  
     0   PassengerId  891 non-null    int64  
     1   Survived     891 non-null    int64  
     2   Pclass       891 non-null    int64  
     3   Name         891 non-null    object 
     4   Sex          891 non-null    object 
     5   Age          714 non-null    float64
     6   SibSp        891 non-null    int64  
     7   Parch        891 non-null    int64  
     8   Ticket       891 non-null    object 
     9   Fare         891 non-null    float64
     10  Cabin        204 non-null    object 
     11  Embarked     889 non-null    object 
    dtypes: float64(2), int64(5), object(5)
    memory usage: 83.7+ KB
    

We note that a significant portion of Cabin data is missing. We will drop Cabin as a feature in our analysis later, and impute the missing values for the other necessary features.

#### Check for Duplicate Values


```python
train_data.duplicated().sum()
```




    0



#### Descriptive Statistics


```python
train_data.describe(include='all')

```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Name</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Ticket</th>
      <th>Fare</th>
      <th>Cabin</th>
      <th>Embarked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>891.000000</td>
      <td>891.000000</td>
      <td>891.000000</td>
      <td>891</td>
      <td>891</td>
      <td>714.000000</td>
      <td>891.000000</td>
      <td>891.000000</td>
      <td>891</td>
      <td>891.000000</td>
      <td>204</td>
      <td>889</td>
    </tr>
    <tr>
      <th>unique</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>891</td>
      <td>2</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>681</td>
      <td>NaN</td>
      <td>147</td>
      <td>3</td>
    </tr>
    <tr>
      <th>top</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Braund, Mr. Owen Harris</td>
      <td>male</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>347082</td>
      <td>NaN</td>
      <td>B96 B98</td>
      <td>S</td>
    </tr>
    <tr>
      <th>freq</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1</td>
      <td>577</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>7</td>
      <td>NaN</td>
      <td>4</td>
      <td>644</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>446.000000</td>
      <td>0.383838</td>
      <td>2.308642</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>29.699118</td>
      <td>0.523008</td>
      <td>0.381594</td>
      <td>NaN</td>
      <td>32.204208</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>std</th>
      <td>257.353842</td>
      <td>0.486592</td>
      <td>0.836071</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>14.526497</td>
      <td>1.102743</td>
      <td>0.806057</td>
      <td>NaN</td>
      <td>49.693429</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>0.000000</td>
      <td>1.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>0.420000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>223.500000</td>
      <td>0.000000</td>
      <td>2.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>20.125000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>7.910400</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>446.000000</td>
      <td>0.000000</td>
      <td>3.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>28.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>14.454200</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>668.500000</td>
      <td>1.000000</td>
      <td>3.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>38.000000</td>
      <td>1.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>31.000000</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>max</th>
      <td>891.000000</td>
      <td>1.000000</td>
      <td>3.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>80.000000</td>
      <td>8.000000</td>
      <td>6.000000</td>
      <td>NaN</td>
      <td>512.329200</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



The training dataset contains 891 rows, each representing a passenger, and 12 columns with various attributes of the passengers. The target variable in this dataset is the "Survived" column, which indicates whether the passenger survived the sinking or not (1 if survived, 0 if not).

-   PassengerId: A unique identifier for each passenger.
-   Pclass: The class of the ticket purchased by the passenger (1st, 2nd, or 3rd).
-   Name: The name of the passenger.
-   Sex: The gender of the passenger.
-   Age: The age of the passenger.
-   SibSp: The number of siblings and/or spouses the passenger had aboard the ship.
-   Parch: The number of parents and/or children the passenger had aboard the ship.
-   Ticket: The ticket number of the passenger.
-   Fare: The price of the ticket.
-   Cabin: The cabin number of the passenger.
-   Embarked: The port of embarkation (C = Cherbourg, Q = Queenstown, S = Southampton).

#### Feature Distributions

The point of visualizing distributions is more than simply learning about the how the data is distributed. Sometimes, we also have to deal with outliers present in our data, and it would be beneficial to remove these outliers as they tend to adversely skew the data.


```python
sns.countplot(x='Survived', data=train_data)
```




    <AxesSubplot:xlabel='Survived', ylabel='count'>




    
![png](/img/posts/basic-eda-titanic/output_14_1.png)
    



```python
sns.countplot(x='Pclass', data=train_data)
```




    <AxesSubplot:xlabel='Pclass', ylabel='count'>




    
![png](/img/posts/basic-eda-titanic/output_15_1.png)
    



```python
sns.countplot(x='Sex', data=train_data)
```




    <AxesSubplot:xlabel='Sex', ylabel='count'>




    
![png](/img/posts/basic-eda-titanic/output_16_1.png)
    



```python
sns.histplot(data=train_data, x="Age", binwidth=1, kde='True')
```




    <AxesSubplot:xlabel='Age', ylabel='Count'>




    
![png](/img/posts/basic-eda-titanic/output_17_1.png)
    



```python
sns.histplot(data=train_data, x="SibSp", binwidth=1, kde='True')
```




    <AxesSubplot:xlabel='SibSp', ylabel='Count'>




    
![png](/img/posts/basic-eda-titanic/output_18_1.png)
    



```python
sns.histplot(data=train_data, x="Parch", binwidth=1, kde='True')
```




    <AxesSubplot:xlabel='Parch', ylabel='Count'>




    
![png](/img/posts/basic-eda-titanic/output_19_1.png)
    



```python
sns.histplot(data=train_data, x="Fare", binwidth=10, kde='True')
# train_data[['Fare']].boxplot()
```




    <AxesSubplot:xlabel='Fare', ylabel='Count'>




    
![png](/img/posts/basic-eda-titanic/output_20_1.png)
    



```python
sns.countplot(x='Embarked', data=train_data)
```




    <AxesSubplot:xlabel='Embarked', ylabel='count'>




    
![png](/img/posts/basic-eda-titanic/output_21_1.png)
    


#### Imputing the Missing Values

For simplicity, we shall impute using the median of the features. A better approach would be to predict and impute missing age values using through a simple linear regression. Pclass is somewhat correlated with Age and could be used as a predictor. Otherwise, we can also consider KNN imputation.


```python
train_data.isnull().sum()
```




    PassengerId      0
    Survived         0
    Pclass           0
    Name             0
    Sex              0
    Age            177
    SibSp            0
    Parch            0
    Ticket           0
    Fare             0
    Cabin          687
    Embarked         2
    dtype: int64




```python
train_data['Age'].fillna(train_data['Age'].median(), inplace=True) 
train_data['Embarked'].fillna(train_data['Age'].median(), inplace=True)
```

#### Correlation Plot


```python
sns.heatmap(train_data.corr(), vmin=-1, vmax=1, annot=True)
```




    <AxesSubplot:>




    
![png](/img/posts/basic-eda-titanic/output_26_1.png)
    


#### A visual on the survival rate of males against females across all ages.


```python
sns.stripplot(data=train_data, x='Sex', y='Age', hue='Survived')
```




    <AxesSubplot:xlabel='Sex', ylabel='Age'>




    
![png](/img/posts/basic-eda-titanic/output_28_1.png)
    


#### A visual on the survival rate by passenger class across all ages.


```python
sns.stripplot(data=train_data, x='Pclass', y='Age', hue='Survived')
```




    <AxesSubplot:xlabel='Pclass', ylabel='Age'>




    
![png](/img/posts/basic-eda-titanic/output_30_1.png)
    

