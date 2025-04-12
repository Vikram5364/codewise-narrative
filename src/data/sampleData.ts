
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
        videoUrl: 'https://placeholder-video.com/arrays-intro',
        duration: 8,
        difficulty: 'Beginner',
        tags: ['arrays', 'fundamentals']
      },
      {
        id: 'array-operations',
        title: 'Basic Array Operations',
        description: 'Learn about insertion, deletion, and traversal in arrays.',
        videoUrl: 'https://placeholder-video.com/array-operations',
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
        videoUrl: 'https://placeholder-video.com/linked-lists-intro',
        duration: 9,
        difficulty: 'Beginner',
        tags: ['linked-lists', 'fundamentals']
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
        videoUrl: 'https://placeholder-video.com/bubble-sort',
        duration: 12,
        difficulty: 'Beginner',
        tags: ['sorting', 'algorithms']
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
