#!/usr/bin/python3
"""Define  class Square."""


class Square:
    """Represent the square."""

    def __init__(self, size=0):
        """Initializing the new square.
        Args:
            size (int): The size of the new square.
        """
        if not isinstance(size, int):
            raise TypeError("size has to be an integer")
        elif size < 0:
            raise ValueError("size has to be >= 0")
        self.__size = size

    def area(self):
        """Returns the current area of the square."""
        return (self.__size * self.__size)
