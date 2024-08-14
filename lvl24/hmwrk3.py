def filter_integers(numbers):
   
   
    integers = []
    
   
    for num in numbers:
        
        if type(num) == int:
            
            integers.append(num)
    
    return integers


example_list = [1, 2.5, 3, 4.0, 5, 6.7]
print(filter_integers(example_list))  
