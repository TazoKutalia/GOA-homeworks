def should_recall_info(task_urgent, info_needed, enough_time):
    return task_urgent or (info_needed and enough_time)
