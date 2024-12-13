def is_anagram(test, original):
    if len(test) != len(original):
        return False
    test_sorted = sorted(test.lower())
    original_sorted = sorted(original.lower())
    return test_sorted == original_sorted
