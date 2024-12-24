def manual_filter(array, remove_elements):
    filtered_array = []
    for element in array:
        if element not in remove_elements:
            filtered_array.append(element)
    return filtered_array
