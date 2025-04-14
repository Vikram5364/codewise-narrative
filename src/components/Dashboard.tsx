
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, BookOpen, Code, Award, BarChart3 } from 'lucide-react';
import { topics, userProgressSample } from '@/data/sampleData';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { completedLessons, completedChallenges, currentLesson } = userProgressSample;
  
  // Calculate overall progress
  const totalLessons = topics.reduce((acc, topic) => acc + topic.lessons.length, 0);
  const progressPercentage = Math.round((completedLessons.length / totalLessons) * 100);
  
  // Find current lesson details
  const currentLessonDetails = currentLesson ? 
    topics.flatMap(t => t.lessons).find(l => l.id === currentLesson) : 
    undefined;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>
              Pick up where you left off
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentLessonDetails ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium">{currentLessonDetails.title}</h4>
                    <p className="text-sm text-muted-foreground">{currentLessonDetails.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{currentLessonDetails.duration} min</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{currentLessonDetails.difficulty}</span>
                  </div>
                  <Link to={`/lesson/${currentLessonDetails.id}`}>
                    <Button className="gap-2">
                      <Play className="h-4 w-4" /> Continue
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground">No lesson in progress</p>
                <Link to="/courses">
                  <Button variant="outline" className="mt-2">
                    Start Learning
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-bold">{progressPercentage}%</span>
                <p className="text-sm text-muted-foreground">Overall Completion</p>
              </div>
              
              <Progress value={progressPercentage} className="h-2" />
              
              <div className="pt-4 flex justify-between text-sm">
                <div className="text-center">
                  <div className="font-medium">{completedLessons.length}</div>
                  <div className="text-muted-foreground">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{completedChallenges.length}</div>
                  <div className="text-muted-foreground">Challenges</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">0</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Topics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Card key={topic.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <span className="bg-primary/10 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary" />
                </span>
                {topic.title}
              </CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{topic.lessons.length} lessons</span>
                  <span className="text-muted-foreground">
                    {topic.lessons.filter(lesson => 
                      completedLessons.includes(lesson.id)
                    ).length} completed
                  </span>
                </div>
                <Progress 
                  value={
                    (topic.lessons.filter(lesson => 
                      completedLessons.includes(lesson.id)
                    ).length / topic.lessons.length) * 100
                  } 
                  className="h-1"
                />
              </div>
              <Link to={`/lesson/${topic.lessons[0].id}`}>
                <Button variant="ghost" className="w-full mt-4 gap-1">
                  View Topic <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Practice Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Test your skills with our coding challenges
            </p>
            <Link to="/challenges">
              <Button variant="outline" className="w-full">
                View Challenges
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Track your learning achievements
            </p>
            <Link to="/achievements">
              <Button variant="outline" className="w-full">
                View Achievements
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Your Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View your learning statistics
            </p>
            <Link to="/stats">
              <Button variant="outline" className="w-full">
                View Stats
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
