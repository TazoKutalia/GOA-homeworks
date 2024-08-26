def filter_short_strings(strings):
    short_strings = []
    for s in strings:
        if len(s) <= 4:
            short_strings.append(s)
    
    return short_strings


