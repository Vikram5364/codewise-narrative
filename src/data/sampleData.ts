import { Topic, Lesson, CodingChallenge } from '../types';

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
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 8,
        difficulty: 'Beginner',
        tags: ['arrays', 'fundamentals']
      },
      {
        id: 'array-operations',
        title: 'Basic Array Operations',
        description: 'Learn about insertion, deletion, and traversal in arrays.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 10,
        difficulty: 'Beginner',
        tags: ['arrays', 'operations']
      },
      {
        id: 'array-searching',
        title: 'Searching in Arrays',
        description: 'Learn about linear and binary search algorithms for arrays.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['arrays', 'searching', 'algorithms']
      },
      {
        id: 'array-sorting',
        title: 'Sorting Arrays',
        description: 'Introduction to basic sorting algorithms for arrays.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['arrays', 'sorting', 'algorithms']
      },
      {
        id: 'multidimensional-arrays',
        title: 'Multidimensional Arrays',
        description: 'Working with 2D and 3D arrays and their applications.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['arrays', 'multidimensional', 'advanced']
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
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 9,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'fundamentals']
      },
      {
        id: 'linked-lists-operations',
        title: 'Linked List Operations',
        description: 'Learn about insertion, deletion, and traversal in linked lists.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'operations']
      },
      {
        id: 'doubly-linked-lists',
        title: 'Doubly Linked Lists',
        description: 'Understanding doubly linked lists and their implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 11,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'doubly-linked']
      },
      {
        id: 'circular-linked-lists',
        title: 'Circular Linked Lists',
        description: 'Understanding circular linked lists and their applications.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['linked-lists', 'circular']
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
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['trees', 'fundamentals']
      },
      {
        id: 'binary-trees',
        title: 'Binary Trees',
        description: 'Understand binary trees and their implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['trees', 'binary-trees']
      },
      {
        id: 'binary-search-trees',
        title: 'Binary Search Trees',
        description: 'Learn about binary search trees and their operations.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['trees', 'binary-search-trees']
      },
      {
        id: 'avl-trees',
        title: 'AVL Trees',
        description: 'Understanding self-balancing AVL trees and rotations.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['trees', 'avl', 'balanced']
      },
      {
        id: 'red-black-trees',
        title: 'Red-Black Trees',
        description: 'Understanding red-black trees and their implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 20,
        difficulty: 'Advanced',
        tags: ['trees', 'red-black', 'balanced']
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Master graph data structures and algorithms.',
    icon: 'network',
    lessons: [
      {
        id: 'graphs-intro',
        title: 'Introduction to Graphs',
        description: 'Learn the basics of graph data structures and representations.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 11,
        difficulty: 'Intermediate',
        tags: ['graphs', 'fundamentals']
      },
      {
        id: 'graph-traversal',
        title: 'Graph Traversal Algorithms',
        description: 'Learn BFS and DFS traversal techniques for graphs.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['graphs', 'algorithms']
      },
      {
        id: 'shortest-path-algorithms',
        title: 'Shortest Path Algorithms',
        description: 'Learn Dijkstra\'s and Bellman-Ford algorithms for finding shortest paths.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['graphs', 'algorithms', 'shortest-path']
      },
      {
        id: 'minimum-spanning-trees',
        title: 'Minimum Spanning Trees',
        description: 'Understanding Prim\'s and Kruskal\'s algorithms for MST.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 17,
        difficulty: 'Advanced',
        tags: ['graphs', 'algorithms', 'mst']
      }
    ]
  },
  {
    id: 'hash-tables',
    title: 'Hash Tables',
    description: 'Learn about hash tables and their efficient lookup operations.',
    icon: 'hash',
    lessons: [
      {
        id: 'hash-tables-intro',
        title: 'Introduction to Hash Tables',
        description: 'Learn the basics of hash tables and hash functions.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 10,
        difficulty: 'Intermediate',
        tags: ['hash-tables', 'fundamentals']
      },
      {
        id: 'collision-resolution',
        title: 'Collision Resolution Techniques',
        description: 'Learn various methods to handle collisions in hash tables.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['hash-tables', 'advanced']
      },
      {
        id: 'hash-maps',
        title: 'Hash Maps and Their Applications',
        description: 'Understanding hash maps and their practical applications.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 13,
        difficulty: 'Intermediate',
        tags: ['hash-tables', 'hash-maps', 'applications']
      }
    ]
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Master various sorting algorithms and their implementation.',
    icon: 'sort-asc',
    lessons: [
      {
        id: 'bubble-sort',
        title: 'Bubble Sort',
        description: 'Learn about the simplest sorting algorithm and its implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['sorting', 'algorithms']
      },
      {
        id: 'selection-sort',
        title: 'Selection Sort',
        description: 'Learn about selection sort algorithm and its implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 10,
        difficulty: 'Beginner',
        tags: ['sorting', 'algorithms']
      },
      {
        id: 'insertion-sort',
        title: 'Insertion Sort',
        description: 'Learn about insertion sort algorithm and its implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 11,
        difficulty: 'Beginner',
        tags: ['sorting', 'algorithms']
      },
      {
        id: 'merge-sort',
        title: 'Merge Sort',
        description: 'Understanding the divide-and-conquer merge sort algorithm.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['sorting', 'algorithms', 'divide-and-conquer']
      },
      {
        id: 'quick-sort',
        title: 'Quick Sort',
        description: 'Learn about the quick sort algorithm and its implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['sorting', 'algorithms', 'divide-and-conquer']
      },
      {
        id: 'heap-sort',
        title: 'Heap Sort',
        description: 'Learning heap sort and its connection to heap data structure.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 16,
        difficulty: 'Advanced',
        tags: ['sorting', 'algorithms', 'heaps']
      }
    ]
  },
  {
    id: 'dp',
    title: 'Dynamic Programming',
    description: 'Master the art of solving complex problems using dynamic programming.',
    icon: 'sigma',
    lessons: [
      {
        id: 'dp-intro',
        title: 'Introduction to Dynamic Programming',
        description: 'Learn the basics of dynamic programming and its applications.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Advanced',
        tags: ['dp', 'fundamentals']
      },
      {
        id: 'memoization',
        title: 'Memoization Techniques',
        description: 'Learn about top-down dynamic programming with memoization.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 18,
        difficulty: 'Advanced',
        tags: ['dp', 'techniques']
      },
      {
        id: 'tabulation',
        title: 'Tabulation Techniques',
        description: 'Learn about bottom-up dynamic programming with tabulation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 17,
        difficulty: 'Advanced',
        tags: ['dp', 'techniques']
      },
      {
        id: 'dp-problems',
        title: 'Common DP Problems',
        description: 'Solving classic dynamic programming problems and patterns.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 20,
        difficulty: 'Advanced',
        tags: ['dp', 'problems']
      }
    ]
  },
  {
    id: 'heaps',
    title: 'Heaps',
    description: 'Learn about heap data structures and priority queues.',
    icon: 'stacked-bar-chart',
    lessons: [
      {
        id: 'heaps-intro',
        title: 'Introduction to Heaps',
        description: 'Learn the basics of heap data structures and their properties.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 12,
        difficulty: 'Intermediate',
        tags: ['heaps', 'fundamentals']
      },
      {
        id: 'min-max-heaps',
        title: 'Min Heaps and Max Heaps',
        description: 'Understanding min heaps, max heaps and their implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 14,
        difficulty: 'Intermediate',
        tags: ['heaps', 'types']
      },
      {
        id: 'priority-queues',
        title: 'Priority Queues',
        description: 'Implementing and using priority queues with heaps.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['heaps', 'priority-queues']
      }
    ]
  }
];

export const challenges: CodingChallenge[] = [
  {
    id: 'challenge-1',
    lessonId: 'arrays-intro',
    title: 'Find Maximum Element',
    description: 'Write a function to find the maximum element in an array.',
    starterCode: `function findMax(arr) {\n  // Your code here\n}`,
    language: 'javascript',
    difficulty: 'Easy',
    testCases: [
      {
        input: '[1, 3, 5, 7, 9]',
        expectedOutput: '9'
      },
      {
        input: '[-5, -2, -10, -1]',
        expectedOutput: '-1'
      }
    ]
  },
  {
    id: 'challenge-2',
    lessonId: 'array-operations',
    title: 'Reverse an Array',
    description: 'Write a function to reverse the elements of an array in-place.',
    starterCode: `function reverseArray(arr) {\n  // Your code here\n}`,
    language: 'javascript',
    difficulty: 'Easy',
    testCases: [
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '[5, 4, 3, 2, 1]'
      },
      {
        input: '["a", "b", "c"]',
        expectedOutput: '["c", "b", "a"]'
      }
    ]
  }
];

export const userProgressSample: { completedLessons: string[], completedChallenges: string[], currentLesson?: string } = {
  completedLessons: ['arrays-intro'],
  completedChallenges: ['challenge-1'],
  currentLesson: 'array-operations'
};
