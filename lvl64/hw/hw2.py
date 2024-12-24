def can_go_out(weather_good, enough_time, ready_to_go):
    return weather_good or (enough_time and ready_to_go)
