
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, Code, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoPlayer from '@/components/VideoPlayer';
import CodeEditor from '@/components/CodeEditor';
import { topics, challenges } from '@/data/sampleData';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  // Find the lesson
  const lesson = topics.flatMap(topic => topic.lessons).find(l => l.id === lessonId);
  
  // Find the topic that contains this lesson
  const parentTopic = topics.find(topic => 
    topic.lessons.some(l => l.id === lessonId)
  );
  
  // Find challenges related to this lesson
  const lessonChallenges = challenges.filter(c => c.lessonId === lessonId);
  
  if (!lesson || !parentTopic) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Lesson not found</h1>
          <p className="mt-2 text-muted-foreground">
            The lesson you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button className="mt-4">
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Link>
        
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm font-medium">{parentTopic.title}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{lesson.duration} min</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {lesson.difficulty}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">Previous</Button>
            <Button>Next Lesson</Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="lesson" className="space-y-4">
        <TabsList>
          <TabsTrigger value="lesson" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Lesson
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Challenges
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <ListChecks className="h-4 w-4" />
            Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="lesson" className="space-y-6">
          <VideoPlayer 
            videoUrl={lesson.videoUrl} 
            title={lesson.title}
          />
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Description</h2>
            <p>{lesson.description}</p>
            
            <h2>What You'll Learn</h2>
            <ul>
              <li>Understanding the core concepts of {lesson.title}</li>
              <li>Implementation details and common patterns</li>
              <li>Time and space complexity analysis</li>
              <li>Real-world applications and examples</li>
            </ul>
            
            <h2>Key Concepts</h2>
            <p>
              This lesson covers important concepts related to {parentTopic.title.toLowerCase()}, with a specific focus on {lesson.title.toLowerCase()}.
              You'll learn how to implement these concepts in code and understand the underlying principles.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="challenges">
          {lessonChallenges.length > 0 ? (
            <div className="space-y-6">
              {lessonChallenges.map(challenge => (
                <CodeEditor key={challenge.id} challenge={challenge} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Code className="h-12 w-12 text-muted-foreground mx-auto" />
              <h3 className="mt-4 text-lg font-medium">No challenges yet</h3>
              <p className="mt-2 text-muted-foreground">
                There are no coding challenges for this lesson yet.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="resources">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Additional Resources</h2>
            
            <h3>Documentation</h3>
            <ul>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Official Documentation on {parentTopic.title}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Algorithm Complexity Guide
                </a>
              </li>
            </ul>
            
            <h3>Practice Problems</h3>
            <ul>
              <li>
                <a href="#" className="text-primary hover:underline">
                  LeetCode Problems on {parentTopic.title}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  HackerRank Challenges
                </a>
              </li>
            </ul>
            
            <h3>Books and Articles</h3>
            <ul>
              <li>
                <a href="#" className="text-primary hover:underline">
                  "Introduction to Algorithms" by CLRS
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  "Grokking Algorithms" by Aditya Bhargava
                </a>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LessonPage;
