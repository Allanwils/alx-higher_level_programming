#!/usr/bin/python3
import sys
def magic_calculation(a, b):
    result = 0
    for i in range(1, 3):
        try:
            if i > a:
                raise Exception("Too far")
            else:
                result += (a ** b) / i
        except Exception as e:
            print("Error: ", e, file=sys.stderr)
            result = b + a
    return result
