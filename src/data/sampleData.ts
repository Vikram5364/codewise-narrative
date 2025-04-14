
import { Topic, Lesson, CodingChallenge, UserProgress, TestCase } from '../types';

// Sample user progress data
export const userProgressSample: UserProgress = {
  completedLessons: ['arrays-intro', 'array-operations', 'linked-lists-intro'],
  completedChallenges: ['challenge-1', 'challenge-2'],
  currentLesson: 'array-searching'
};

// Sample coding challenge data
export const challenges: CodingChallenge[] = [
  {
    id: 'challenge-1',
    lessonId: 'arrays-intro',
    title: 'Reverse an Array',
    description: 'Write a function to reverse the elements of an array in-place.',
    starterCode: 'function reverseArray(arr) {\n  // Your code here\n  \n  return arr;\n}',
    language: 'javascript',
    difficulty: 'Easy',
    testCases: [
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '[5, 4, 3, 2, 1]',
        isHidden: false
      },
      {
        input: '["apple", "banana", "cherry"]',
        expectedOutput: '["cherry", "banana", "apple"]',
        isHidden: false
      },
      {
        input: '[true, false, true]',
        expectedOutput: '[true, false, true]',
        isHidden: true
      }
    ]
  },
  {
    id: 'challenge-2',
    lessonId: 'array-operations',
    title: 'Find Max Element',
    description: 'Write a function to find the maximum element in an array.',
    starterCode: 'function findMax(arr) {\n  // Your code here\n  \n  return 0;\n}',
    language: 'javascript',
    difficulty: 'Easy',
    testCases: [
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '5',
        isHidden: false
      },
      {
        input: '[-1, -5, -3, -2]',
        expectedOutput: '-1',
        isHidden: false
      },
      {
        input: '[10, 10, 10]',
        expectedOutput: '10',
        isHidden: true
      }
    ]
  },
  {
    id: 'challenge-3',
    lessonId: 'array-searching',
    title: 'Binary Search Implementation',
    description: 'Implement binary search to find an element in a sorted array.',
    starterCode: 'function binarySearch(arr, target) {\n  // Your code here\n  // Return index of target or -1 if not found\n  \n  return -1;\n}',
    language: 'javascript',
    difficulty: 'Medium',
    testCases: [
      {
        input: '[[1, 2, 3, 4, 5], 3]',
        expectedOutput: '2',
        isHidden: false
      },
      {
        input: '[[1, 3, 5, 7, 9], 5]',
        expectedOutput: '2',
        isHidden: false
      },
      {
        input: '[[2, 4, 6, 8, 10, 12], 7]',
        expectedOutput: '-1',
        isHidden: true
      }
    ]
  }
];

export const topics: Topic[] = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Learn about arrays, the most fundamental data structure used in programming.',
    icon: 'brackets-square',
    lessons: [
      {
        id: 'arrays-intro',
        title: 'Introduction to Arrays',
        description: 'Learn the basics of arrays and how they store data in memory.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 8,
        difficulty: 'Beginner',
        tags: ['arrays', 'fundamentals'],
        sections: [
          {
            title: "Overview",
            content: "Arrays are one of the most fundamental data structures in computer science. An array is a collection of elements, all of the same type, stored in contiguous memory locations. This makes accessing array elements very efficient, as the exact memory address of any element can be calculated using its index position."
          },
          {
            title: "Memory Structure",
            content: "In memory, arrays are stored as contiguous blocks. Each element of an array occupies the same amount of memory space. For instance, in a 32-bit system, an integer array would use 4 bytes per element. This property allows for constant-time access to any element in the array using its index."
          },
          {
            title: "Time Complexity",
            content: "Arrays offer O(1) time complexity for accessing elements by index. However, operations like insertion or deletion (except at the end) typically have O(n) time complexity as they require shifting elements."
          }
        ]
      },
      {
        id: 'array-operations',
        title: 'Basic Array Operations',
        description: 'Learn about insertion, deletion, and traversal in arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 10,
        difficulty: 'Beginner',
        tags: ['arrays', 'operations'],
        sections: [
          {
            title: "Traversal",
            content: "Traversing an array means visiting each element of the array exactly once. This is typically done using loops, such as for or while loops. Traversal has a time complexity of O(n) where n is the number of elements in the array."
          },
          {
            title: "Insertion",
            content: "Inserting an element at a specific position in an array requires shifting all elements after that position one step to the right. For insertion at the end of an array, the time complexity is O(1), but for insertion at the beginning or middle, it's O(n) due to the need for shifting elements."
          },
          {
            title: "Deletion",
            content: "Deleting an element from an array involves removing the element and then shifting all elements after it one step to the left to fill the gap. Like insertion, deletion at the end has O(1) time complexity, but deletion at the beginning or middle has O(n) time complexity."
          }
        ]
      },
      {
        id: 'array-searching',
        title: 'Searching in Arrays',
        description: 'Learn about linear and binary search algorithms for arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['arrays', 'searching', 'algorithms'],
        sections: [
          {
            title: "Linear Search",
            content: "Linear search is the simplest searching algorithm. It checks each element of the array sequentially until it finds the target element or reaches the end of the array. The time complexity is O(n), where n is the number of elements in the array."
          },
          {
            title: "Binary Search",
            content: "Binary search is an efficient algorithm for finding an item from a sorted array. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. The time complexity is O(log n)."
          },
          {
            title: "Comparison",
            content: "While linear search works on both sorted and unsorted arrays, binary search requires the array to be sorted. However, binary search is significantly more efficient for large arrays."
          }
        ]
      },
      {
        id: 'array-sorting',
        title: 'Sorting Arrays',
        description: 'Introduction to basic sorting algorithms for arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['arrays', 'sorting', 'algorithms']
      },
      {
        id: 'multidimensional-arrays',
        title: 'Multidimensional Arrays',
        description: 'Working with 2D and 3D arrays and their applications.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'multidimensional', 'advanced']
      },
      {
        id: 'array-algorithms',
        title: 'Common Array Algorithms',
        description: 'Master common algorithms and techniques for array manipulation.',
        imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        duration: 16,
        difficulty: 'Intermediate',
        tags: ['arrays', 'algorithms']
      },
      {
        id: 'array-hashing',
        title: 'Array Hashing Techniques',
        description: 'Learn how to use arrays for efficient hashing implementations.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 13,
        difficulty: 'Intermediate',
        tags: ['arrays', 'hashing']
      },
      {
        id: 'array-two-pointers',
        title: 'Two Pointers Technique',
        description: 'Master the two pointers technique for solving array problems.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'algorithms', 'techniques']
      },
      {
        id: 'array-sliding-window',
        title: 'Sliding Window Technique',
        description: 'Learn the sliding window approach for array problems.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['arrays', 'algorithms', 'techniques']
      },
      {
        id: 'array-prefix-sum',
        title: 'Prefix Sum Arrays',
        description: 'Understanding prefix sum arrays and their applications.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['arrays', 'techniques']
      },
      {
        id: 'array-binary-search',
        title: 'Advanced Binary Search',
        description: 'Advanced applications of binary search in arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['arrays', 'searching', 'algorithms']
      },
      {
        id: 'array-dynamic-programming',
        title: 'Dynamic Programming with Arrays',
        description: 'Solving complex problems using dynamic programming on arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['arrays', 'dp', 'algorithms']
      },
      {
        id: 'array-bit-manipulation',
        title: 'Bit Manipulation with Arrays',
        description: 'Using bit manipulation techniques for array problems.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['arrays', 'bit-manipulation']
      },
      {
        id: 'array-kadanes-algorithm',
        title: "Kadane's Algorithm",
        description: "Understanding Kadane's algorithm for maximum subarray problems.",
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'algorithms']
      },
      {
        id: 'array-boyer-moore',
        title: 'Boyer-Moore Majority Vote',
        description: 'Learning the Boyer-Moore majority vote algorithm.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 13,
        difficulty: 'Intermediate',
        tags: ['arrays', 'algorithms']
      },
      {
        id: 'array-dutch-flag',
        title: 'Dutch National Flag Algorithm',
        description: 'Understanding the Dutch national flag algorithm for sorting.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['arrays', 'sorting', 'algorithms']
      },
      {
        id: 'array-matrix-operations',
        title: 'Matrix Operations',
        description: 'Learn operations on matrices represented as 2D arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 16,
        difficulty: 'Intermediate',
        tags: ['arrays', 'matrix', 'multidimensional']
      },
      {
        id: 'array-subarray-problems',
        title: 'Subarray Problems',
        description: 'Solving various subarray problems using efficient techniques.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 17,
        difficulty: 'Advanced',
        tags: ['arrays', 'algorithms', 'subarrays']
      },
      {
        id: 'array-monotonic-stack',
        title: 'Monotonic Stack Technique',
        description: 'Using monotonic stacks to solve array problems efficiently.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['arrays', 'stack', 'techniques']
      },
      {
        id: 'array-circular-arrays',
        title: 'Circular Arrays',
        description: 'Working with circular arrays and related algorithms.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'circular']
      },
      {
        id: 'array-efficient-rotation',
        title: 'Efficient Array Rotation',
        description: 'Learn efficient techniques for rotating arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 16,
        difficulty: 'Intermediate',
        tags: ['arrays', 'rotation', 'algorithms']
      },
      {
        id: 'array-sparse-arrays',
        title: 'Sparse Arrays',
        description: 'Working with sparse arrays efficiently.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'sparse', 'memory']
      },
      {
        id: 'array-jagged-arrays',
        title: 'Jagged Arrays',
        description: 'Understanding and implementing jagged arrays.',
        imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['arrays', 'jagged', 'multidimensional']
      },
      {
        id: 'array-parallel-algorithms',
        title: 'Parallel Array Algorithms',
        description: 'Implementing array algorithms for parallel processing.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['arrays', 'parallel', 'algorithms']
      },
      {
        id: 'array-cache-optimizations',
        title: 'Cache-Friendly Array Operations',
        description: 'Optimizing array operations for better cache utilization.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['arrays', 'optimization', 'cache']
      }
    ]
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    description: 'Understand linked lists and their advantages over arrays.',
    icon: 'link',
    lessons: [
      {
        id: 'linked-lists-intro',
        title: 'Introduction to Linked Lists',
        description: 'Learn the basics of linked lists and their memory structure.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 9,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'fundamentals'],
        sections: [
          {
            title: "What are Linked Lists?",
            content: "A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a reference (or link) to the next node in the sequence. This structure allows for efficient insertion and deletion of elements from any position in the list."
          },
          {
            title: "Memory Structure",
            content: "Unlike arrays, linked lists don't require contiguous memory allocation. Each node can be stored anywhere in memory, with pointers connecting them in sequence. This dynamic memory allocation makes linked lists flexible in size."
          },
          {
            title: "Types of Linked Lists",
            content: "There are several types of linked lists: singly linked lists (each node points to the next node), doubly linked lists (each node points to both the next and previous nodes), and circular linked lists (the last node points back to the first node)."
          }
        ]
      },
      {
        id: 'linked-lists-operations',
        title: 'Linked List Operations',
        description: 'Learn about insertion, deletion, and traversal in linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'operations'],
        sections: [
          {
            title: "Traversal",
            content: "Traversing a linked list involves visiting each node in the list. This is done by starting at the head and following the next pointers until the end of the list is reached. The time complexity is O(n), where n is the number of nodes."
          },
          {
            title: "Insertion",
            content: "Insertion in a linked list is more efficient than in arrays. To insert a node, you simply update the pointers. Insertion at the beginning takes O(1) time, while insertion at the end or in the middle takes O(n) time (because you need to traverse to the insertion point)."
          },
          {
            title: "Deletion",
            content: "Deletion in a linked list involves changing pointers to skip the node being deleted. Like insertion, deletion at the beginning is O(1), while deletion elsewhere is O(n) due to the need to traverse to that point."
          }
        ]
      },
      {
        id: 'doubly-linked-lists',
        title: 'Doubly Linked Lists',
        description: 'Understanding doubly linked lists and their implementation.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 11,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'doubly-linked']
      },
      {
        id: 'circular-linked-lists',
        title: 'Circular Linked Lists',
        description: 'Understanding circular linked lists and their applications.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'circular']
      },
      {
        id: 'linked-list-vs-array',
        title: 'Linked Lists vs Arrays',
        description: 'Comparing linked lists and arrays - when to use each.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 8,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'arrays', 'comparison']
      },
      {
        id: 'linked-list-reverse',
        title: 'Reversing a Linked List',
        description: 'Learn techniques to reverse a linked list in-place.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-cycle',
        title: 'Detecting Cycles',
        description: 'Algorithms to detect cycles in linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 13,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-two-pointers',
        title: 'Two Pointers in Linked Lists',
        description: 'Using the two pointers technique for linked list problems.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms', 'techniques']
      },
      {
        id: 'linked-list-intersection',
        title: 'Finding Intersection Points',
        description: 'Algorithms to find intersection points in linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-merge',
        title: 'Merging Linked Lists',
        description: 'Learn to merge two sorted linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 11,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-palindrome',
        title: 'Palindrome Linked Lists',
        description: 'Checking if a linked list is a palindrome.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 13,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-partition',
        title: 'Partitioning Linked Lists',
        description: 'Techniques to partition linked lists around a value.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 14,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-deep-copy',
        title: 'Deep Copy of Linked Lists',
        description: 'Creating deep copies of complex linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'algorithms']
      },
      {
        id: 'linked-list-lru-cache',
        title: 'LRU Cache Implementation',
        description: 'Using linked lists to implement an LRU cache.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'cache', 'applications']
      },
      {
        id: 'linked-list-implementation',
        title: 'Custom Implementation',
        description: 'Building your own linked list class from scratch.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'implementation']
      },
      {
        id: 'linked-list-recursion',
        title: 'Recursive Techniques',
        description: 'Solving linked list problems using recursion.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 14,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'recursion', 'algorithms']
      },
      {
        id: 'linked-list-skip',
        title: 'Skip Lists',
        description: 'Understanding skip lists and their implementation.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'advanced-structures']
      },
      {
        id: 'linked-list-xor',
        title: 'XOR Linked Lists',
        description: 'Memory-efficient implementation using XOR linked lists.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        duration: 17,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'advanced-structures']
      },
      {
        id: 'linked-list-applications',
        title: 'Real-world Applications',
        description: 'Practical applications of linked lists in software systems.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'applications']
      },
      {
        id: 'linked-list-memory-pools',
        title: 'Memory Pools for Linked Lists',
        description: 'Using memory pools for efficient linked list implementations.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'memory', 'optimization']
      },
      {
        id: 'linked-list-persistent',
        title: 'Persistent Linked Lists',
        description: 'Creating persistent versions of linked list data structures.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'persistent', 'immutable']
      },
      {
        id: 'linked-list-multithreaded',
        title: 'Thread-Safe Linked Lists',
        description: 'Implementing thread-safe linked lists for concurrent applications.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 17,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'multithreading', 'concurrency']
      },
      {
        id: 'linked-list-functional',
        title: 'Functional Programming with Linked Lists',
        description: 'Using linked lists in functional programming paradigms.',
        imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        duration: 14,
        difficulty: 'Advanced',
        tags: ['linked-lists', 'functional-programming']
      }
    ]
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'Explore tree data structures and their applications.',
    icon: 'git-branch',
    lessons: [
      {
        id: 'trees-intro',
        title: 'Introduction to Trees',
        description: 'Learn the basics of tree data structures and terminology.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['trees', 'fundamentals'],
        sections: [
          {
            title: "What are Trees?",
            content: "A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node, and every node (except the root) has exactly one parent node. A node can have multiple child nodes."
          },
          {
            title: "Tree Terminology",
            content: "Important terms include: root (the topmost node), parent, child, leaf (a node with no children), height (longest path from root to leaf), depth (distance from a node to the root), and siblings (nodes with the same parent)."
          },
          {
            title: "Types of Trees",
            content: "There are various types of trees such as binary trees, binary search trees (BST), AVL trees, Red-Black trees, B-trees, and more. Each type has specific properties and use cases."
          }
        ]
      },
      {
        id: 'binary-trees',
        title: 'Binary Trees',
        description: 'Learn about binary trees and their properties.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['trees', 'binary-trees'],
        sections: [
          {
            title: "Binary Tree Basics",
            content: "A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child. This constraint allows for efficient traversal and search algorithms."
          },
          {
            title: "Properties",
            content: "Key properties of binary trees include height (the length of the longest path from root to leaf), depth (the level or distance of a node from the root), and balance factor (difference in height between left and right subtrees)."
          },
          {
            title: "Traversal Algorithms",
            content: "Binary trees can be traversed in different ways: in-order (left, root, right), pre-order (root, left, right), post-order (left, right, root), and level-order (breadth-first traversal)."
          }
        ]
      },
      {
        id: 'binary-search-trees',
        title: 'Binary Search Trees',
        description: 'Understanding binary search trees and their efficient operations.',
        imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['trees', 'bst', 'searching'],
        sections: [
          {
            title: "What are Binary Search Trees?",
            content: "A Binary Search Tree (BST) is a binary tree where each node's left subtree contains only nodes with keys less than the node's key, and each node's right subtree contains only nodes with keys greater than the node's key."
          },
          {
            title: "Operations",
            content: "BSTs support operations like search, insertion, and deletion in O(log n) time on average, making them efficient for dictionary-like applications."
          },
          {
            title: "Balancing",
            content: "Unbalanced BSTs can degrade to linked lists, with O(n) operation time. This is why balanced variants like AVL trees and Red-Black trees are often used in practice."
          }
        ]
      },
      {
        id: 'avl-trees',
        title: 'AVL Trees',
        description: 'Learn about self-balancing AVL trees and their implementation.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['trees', 'avl', 'balanced']
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Master graph algorithms and representations.',
    icon: 'network',
    lessons: [
      {
        id: 'graphs-intro',
        title: 'Introduction to Graphs',
        description: 'Learn the basics of graph theory and representations.',
        imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['graphs', 'fundamentals']
      }
    ]
  },
  {
    id: 'hash-tables',
    title: 'Hash Tables',
    description: 'Learn about efficient key-value storage with hash tables.',
    icon: 'hash',
    lessons: [
      {
        id: 'hash-tables-intro',
        title: 'Introduction to Hash Tables',
        description: 'Learn how hash tables provide efficient data access.',
        imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['hash-tables', 'fundamentals']
      }
    ]
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Explore various sorting algorithms and their complexity.',
    icon: 'sort-asc',
    lessons: [
      {
        id: 'bubble-sort',
        title: 'Bubble Sort',
        description: 'Learn the simplest sorting algorithm: bubble sort.',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        duration: 8,
        difficulty: 'Beginner',
        tags: ['sorting', 'algorithms']
      }
    ]
  },
  {
    id: 'dp',
    title: 'Dynamic Programming',
    description: 'Master dynamic programming for complex optimization problems.',
    icon: 'sigma',
    lessons: [
      {
        id: 'dp-intro',
        title: 'Introduction to Dynamic Programming',
        description: 'Learn the fundamental concepts of dynamic programming.',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['dp', 'algorithms']
      }
    ]
  },
  {
    id: 'heaps',
    title: 'Heaps',
    description: 'Understand heap data structures and their applications.',
    icon: 'stacked-bar-chart',
    lessons: [
      {
        id: 'heaps-intro',
        title: 'Introduction to Heaps',
        description: 'Learn about binary heaps and priority queues.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        duration: 11,
        difficulty: 'Intermediate',
        tags: ['heaps', 'binary-heaps']
      }
    ]
  }
];
