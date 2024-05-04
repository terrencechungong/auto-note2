import React from 'react';
import { useQuiz } from './QuizContext';

function LectureNotes({ course, lecture }) {

    return (
        <div>
            <h1>Lecture Summary</h1>
            <div><strong>Course:</strong> Data Structures <br /> <strong>Lecture:</strong> Lecture 1</div>
            <div className="summary-container" style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <h3>Summary:</h3>
                <p>Here we have followed the flow of learning a data structure and then the most related and important algorithms used by that data structure.

1. Learn Data Structures
Data structures are essential components that help organize and store data efficiently in computer memory. They provide a way to manage and manipulate data effectively, enabling faster access, insertion, and deletion operations. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs , each serving specific purposes based on the requirements of the problem at hand. Understanding data structures is fundamental for designing efficient algorithms and optimizing software performance.

Common Data Structures to learn:
1. Array
Array is a linear data structure that stores a collection of elements of the same data type. Elements are allocated contiguous memory, allowing for constant-time access. Each element has a unique index number.

Operations on Array:
Traversal: Iterating through the elements of an array.
Insertion: Adding an element to the array at a specific index.
Deletion: Removing an element from the array at a specific index.
Searching: Finding an element in the array by its value or index.
Types of Arrays:
One-dimensional array: A simple array with a single dimension.
Multidimensional array: An array with multiple dimensions, such as a matrix.
Applications of Array:
Storing data in a sequential manner
Implementing queues, stacks, and other data structures
Representing matrices and tables
Related Topics on Array:
Arrays Tutorial
Top 50 Array Coding Problems for Interviews
Practice problems on Arrays
2. String
A string is a sequence of characters, typically used to represent text. It is considered a data type that allows for the manipulation and processing of textual data in computer programs.

Operations on String:
Concatenation: Joining two strings together.
Comparison: Comparing two strings lexicographically.
Substring extraction: Extracting a substring from a string.
Search: Searching for a substring within a string.
Modification: Changing or replacing characters within a string.
Applications of String:
Text processing
Pattern matching
Data validation
Database management
Related posts:
String Tutorial
Top 50 String Coding Problems for Interviews
Practice Problems on String
3. Linked Lists
A linked list is a linear data structure that stores data in nodes, which are connected by pointers. Unlike arrays, linked lists are not stored in contiguous memory locations.

Characteristics of Linked List:
Dynamic: Linked lists can be easily resized by adding or removing nodes.
Non-contiguous: Nodes are stored in random memory locations and connected by pointers.
Sequential access: Nodes can only be accessed sequentially, starting from the head of the list.
Operations on Linked List:
Creation: Creating a new linked list or adding a new node to an existing list.
Traversal: Iterating through the list and accessing each node.
Insertion: Adding a new node at a specific position in the list.
Deletion: Removing a node from the list.
Search: Finding a node with a specific value in the list.</p>
            </div>
        </div>
    );
}

export default LectureNotes;
