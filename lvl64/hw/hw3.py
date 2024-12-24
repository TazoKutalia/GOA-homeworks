def can_step(barrier, space_accessible, signal):
    return not barrier and (space_accessible or signal)
