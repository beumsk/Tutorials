# PYTHON - ... - by Beumsk



# To create a comment. Shown in code only. Indent 2spaces
# /* Multiple line comment */




# Python project structure
# my-python-project/
# ├── venv/            # Virtual environment
# ├── src/             # Source code
# │   ├── __init__.py  # Package initializer
# │   ├── app.py       # Entry point
# │   ├── utils.py     # Utility module
# ├── requirements.txt # Dependency list




# Print
print("Hello world!")




# Variables
name = "John" # string
age = 25 # int
grade = 7.8 # float
isAdult = true # boolean
undefined = None # None




# Lists

list1 = [1, 2, 3]
list1.append(4) # Adds 4 to the end
list1.insert(1, 10) # Inserts 10 at index 1
list1.remove(2) # Removes the first occurrence of 2
print(list1) # Output: [1, 10, 3, 4]



# Tuples, immutable version of list

tuple1 = (1, "two") # cannot be modified



# Sets, list of unique elements

fruits = {1, 2, 3}
fruits.add(4) # Adds 4 to the set
fruits.discard(2) # Removes 2 from the set
print(fruits) # Output: {1, 3, 4}



# Dicts, dictionaries

dict1 = {"name": "John", "age": 25}
dict1["city"] = "Brussels" # Adding a new key-value pair
print(dict1["name"]) # Output: John
del dict1["age"] # Removing a key-value pair
print(dict1) # Output: {"name": "John", "city": "Brusselss"}




# Comparison
25 == 25 # true




# Conditionals
if age > 18:
    print("Adult")
else:
    print("Minor")




# For loop
for i in range(5):
    print(i)




# While loop
count = 0
while count < 5:
    print(count)
    count += 1




# JSON
import json
dict1 = {"name": "John", "age": 25}
dict1JSON = json.dumps(dict1) # Convert dictionary to JSON string
print(dict1JSON)  # Output: {"name": "John", "age": 25}
parsedJSON = json.loads(dict1JSON) # Parse JSON string to dictionary
print(parsedJSON)  # Output: {'name': 'John', 'age': 25}




# Functions
def greet(name):
    return f"Hello, {name}!"
print(greet("John"))  # Output: Hello, John!


# Lambda
square = lambda x: x ** 2
print(square(5))  # Output: 25
# Using lambda in a map function
numbers = [1, 2, 3, 4]
squared = map(lambda x: x ** 2, numbers)
print(list(squared))  # Output: [1, 4, 9, 16]


# Function parameters
def greet(name="World", *args, **kwargs):
    print(f"Hello, {name}!")
    print("Arguments:", args)
    print("Keyword Arguments:", kwargs)

greet("John", 1, 2, color="blue", age=30)
# Hello, John!
# Arguments: (1, 2)
# Keyword Arguments: {'color': 'blue', 'age': 30}




# Scope: LEGB rule
# Local: Variables defined inside a function.
# Enclosing: Variables in the nearest enclosing scope (for example, nested functions).
# Global: Variables defined at the top level of the module.
# Built-in: Predefined names in Python (for example, len, print).
x = "global"
def outer_function():
    x = "enclosing"
    def inner_function():
        x = "local"
        print(x)
    inner_function()
outer_function() # Output: local
print(x) # Output: global




# Classes
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} makes a sound."
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks."

# Using the classes
generic_animal = Animal("Generic Animal")
dog = Dog("Buddy")

print(generic_animal.speak()) # Output: Generic Animal makes a sound.
print(dog.speak()) # Output: Buddy barks.


# Polymorphism
class Bird:
    def fly(self):
        return "Birds can fly."
class Penguin(Bird):
    def fly(self):
        return "Penguins cannot fly."
def get_flight_ability(bird):
    print(bird.fly())

sparrow = Bird()
penguin = Penguin()

get_flight_ability(sparrow) # Output: Birds can fly.
get_flight_ability(penguin) # Output: Penguins cannot fly.


# Prototypes

class Calculator:
    def add(self, a, b):
        return a + b
    def multiply(self, a, b):
        return a * b

calc = Calculator()
print(calc.add(5, 3)) # Output: 8
print(calc.multiply(5, 3)) # Output: 15




# Export (utils.py) & Import (main.py)
def add(a, b):
    return a + b
def multiply(a, b):
    return a * b

from utils import add, multiply
print(add(2, 3))       # Output: 5
print(multiply(2, 3))  # Output: 6




# Package manager: pip (python installer package)
# pip install requests # or any other package
import requests
response = requests.get("https://api.example.com/data")
print(response.json())
# bashCopy codepip install -r requirements.txt # usually listing dependencies in that file



# Virtual environments (isolate dependencies)
# python -m venv myenv # Creating a Virtual Environment
# myenv\Scripts\activate # Activating the Virtual Environment for windows
# source myenv/bin/activate # Activating the Virtual Environment for macOS/Linux
# pip install flask # Installing Libraries in the Virtual Environment
# deactivate # Deactivating the Virtual Environment




# Exception handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
else:
    print("No errors occurred!")
finally:
    print("Execution complete.")
# Output:
# Error: division by zero
# Execution complete.




# Common errors

# SyntaxError: Occurs when code violates Python's syntax rules.
print("Hello World"  # Missing closing parenthesis

# TypeError: Raised when an operation is applied to an object of inappropriate type.
print("Hello" + 5)  # Cannot concatenate str and int

# ValueError: Raised when a function receives an argument of the correct type but invalid value.
int("abc")  # Cannot convert string to int




# Web development (backend)
# with Django or Flask



# Testing
# with pytest



# Scraping
# with BeautifulSoup



# REST API 
# with Flask



# Automation
# with os & shutil



# Data visiualisation
# with pandas & matplotlib



# Machine learning
# with tensorflow







