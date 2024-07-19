def greet():
    print("hello tazo")
    
greet()  



def add(num1, num2, operation):
    if operation == "+":
     result(num1 + num2)
    elif operation == "-":
     result(num1 - num2)
    else:
     result("invalid operation")
     return result

add(4, 3, "-")
add(7, 8, "+")

