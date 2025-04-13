
export interface Lesson {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: number; // in minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  sections?: {
    title: string;
    content: string;
  }[];
}

export interface CodingChallenge {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  starterCode: string;
  language: 'javascript' | 'python' | 'java' | 'cpp';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  testCases: TestCase[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface UserProgress {
  completedLessons: string[]; // Lesson IDs
  completedChallenges: string[]; // Challenge IDs
  currentLesson?: string; // Current Lesson ID
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}
