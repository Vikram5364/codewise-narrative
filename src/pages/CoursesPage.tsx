
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  ListTree, 
  Network, 
  Hash, 
  MinusSquare, 
  SortAsc, 
  Sigma,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { topics } from '@/data/sampleData';

const iconMap: Record<string, React.ElementType> = {
  'brackets-square': MinusSquare,
  'link': ListTree,
  'git-branch': GitBranch,
  'network': Network,
  'hash': Hash,
  'sort-asc': SortAsc,
  'sigma': Sigma
};

const CoursesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">All Courses</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Explore our comprehensive data structures and algorithms curriculum
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon] || GitBranch;
            const totalLessons = topic.lessons.length;
            const totalDuration = topic.lessons.reduce((acc, lesson) => acc + lesson.duration, 0);
            
            return (
              <Card key={topic.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{totalLessons} lessons</span>
                  </div>
                  <CardTitle className="mt-3">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {topic.lessons.slice(0, 3).map((lesson) => (
                      <li key={lesson.id} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{lesson.title}</span>
                      </li>
                    ))}
                    {topic.lessons.length > 3 && (
                      <li className="text-muted-foreground text-sm ml-3">
                        + {topic.lessons.length - 3} more lessons
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {totalDuration} min total
                  </div>
                  <Link to={`/lesson/${topic.lessons[0].id}`}>
                    <Button variant="ghost" className="gap-1">
                      <span>Start Learning</span>
                      <ChevronRight className="h-4 w-4" />
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

export default CoursesPage;
