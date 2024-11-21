def simple_calculator():
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    
    operation = input("Choose an operation (+ for addition, - for subtraction): ")

    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    else:
        result = "Invalid operation"
    
    print(f"The result is: {result}")

simple_calculator()
