# Pokedex
The data structure that is used in implementing Pokedex is hash table, actually a more generic form of it which is Dictionary (key-value pairs DS).

The data collected/scrapped is stored in form of JSON, which is a open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs.

The algorithm used for sorting functionality is Merge Sort which takes O(nLogn) time complexity. The type filtering is done efficiently because of the structure of nested dictionary. For searching by names we have used simple linear search algorithm which dynamically displays the pokemon containing the substring word entered by the user. 

For web scrapping, the beautiful soup library of python along with request library was used to scrap the pokemon data from https://pokemondb.net website.

## Hash Table
In computing, a hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values.

![Hash Table](https://github.com/Gerosh-George/Pokedex-DSA-/blob/master/images/hash.PNG?raw=true)

- Search: O(1)
- Insert: O(1)
- Algorithm: Average
- Space: O(n)
- Delete: O(1)


A hash function is any function that can be used to map data of arbitrary size to fixed-size values.

![Hash Function](https://github.com/Gerosh-George/Pokedex-DSA-/blob/master/images/hash%20function.PNG?raw=true)

## Dictionary (Python)
A dictionary is defined as a general-purpose data structure for storing a group of objects. A dictionary is associated with a set of keys and each key has a single associated value. When presented with a key, the dictionary will simply return the associated value.




