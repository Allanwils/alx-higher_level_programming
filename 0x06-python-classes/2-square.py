#!/usr/bin/python3
"""Defining a class Square."""


class Square:
    """Representation of  a square."""

    def __init__(self, size=0):
        """Initializing a new Square.
        Args:
            size (int): The size of the new square.
        """
        if not isinstance(size, int):
            raise TypeError("size has to be an integer")
        elif size < 0:
            raise ValueError("size has to  be >= 0")
        self.__size = size
