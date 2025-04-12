
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lesson, Topic } from '@/types';
import { topics } from '@/data/sampleData';

interface LessonNavigationProps {
  currentLessonId: string;
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ currentLessonId }) => {
  // Find current lesson and its topic
  const currentTopic = topics.find(topic => 
    topic.lessons.some(lesson => lesson.id === currentLessonId)
  );
  
  if (!currentTopic) {
    return null;
  }
  
  // Get all lessons flattened in order
  const allLessons = topics.flatMap(topic => topic.lessons);
  
  // Find current lesson index
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
  
  if (currentIndex === -1) {
    return null;
  }
  
  // Get previous and next lessons
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  
  return (
    <div className="flex gap-2 justify-between sm:justify-end">
      {prevLesson ? (
        <Link to={`/lesson/${prevLesson.id}`}>
          <Button variant="outline" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled className="flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>
      )}
      
      {nextLesson ? (
        <Link to={`/lesson/${nextLesson.id}`}>
          <Button className="flex items-center gap-1">
            <span className="hidden sm:inline">Next Lesson</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Button disabled className="flex items-center gap-1">
          <span className="hidden sm:inline">Next Lesson</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default LessonNavigation;
