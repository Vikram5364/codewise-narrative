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
        id: 'quick-sort',
        title: 'Quick Sort',
        description: 'Learn about the quick sort algorithm and its implementation.',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        duration: 15,
        difficulty: 'Intermediate',
        tags: ['sorting', 'algorithms']
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
