def should_take_item(item_available, item_allowed, another_person_doesnt_want):
    return item_available and item_allowed or not another_person_doesnt_want
