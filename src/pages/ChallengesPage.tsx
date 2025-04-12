
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Tag, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { challenges, topics } from '@/data/sampleData';

const ChallengesPage = () => {
  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'javascript':
        return 'JS';
      case 'python':
        return 'PY';
      case 'java':
        return 'JV';
      case 'cpp':
        return 'C++';
      default:
        return 'CODE';
    }
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Coding Challenges</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Test your knowledge with practical coding challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => {
            const relatedLesson = topics
              .flatMap(topic => topic.lessons)
              .find(lesson => lesson.id === challenge.lessonId);
            
            const lessonTopic = relatedLesson 
              ? topics.find(topic => topic.lessons.some(l => l.id === relatedLesson.id))
              : null;
            
            return (
              <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`flex items-center gap-1 ${getDifficultyColor(challenge.difficulty)}`}
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      <span>{lessonTopic?.title || 'General'}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>~15 min</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getLanguageIcon(challenge.language)}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/lesson/${challenge.lessonId}`} className="w-full">
                    <Button variant="default" className="w-full justify-between">
                      <span>Solve Challenge</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ChallengesPage;
