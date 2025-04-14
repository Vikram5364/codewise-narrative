
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  GitBranch, 
  ListTree, 
  Network, 
  Hash, 
  MinusSquare, 
  SortAsc, 
  Sigma,
  ChevronRight,
  BarChart3,
  Search,
  Check
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import DsaCoursesNav from '@/components/DsaCoursesNav';
import { topics, userProgressSample } from '@/data/sampleData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const iconMap: Record<string, React.ElementType> = {
  'brackets-square': MinusSquare,
  'link': ListTree,
  'git-branch': GitBranch,
  'network': Network,
  'hash': Hash,
  'sort-asc': SortAsc,
  'sigma': Sigma,
  'stacked-bar-chart': BarChart3
};

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const topicFilter = searchParams.get('topic');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter topics based on URL parameter
  const filteredTopics = topicFilter 
    ? topics.filter(topic => topic.id === topicFilter)
    : topics;
  
  // Filter lessons based on search query
  const filterLessons = (topic: typeof topics[0]) => {
    if (!searchQuery) return topic.lessons;
    
    return topic.lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

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
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
            <DsaCoursesNav />
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search lessons..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Lessons</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              {filteredTopics.map((topic) => {
                const filteredLessons = filterLessons(topic);
                
                if (filteredLessons.length === 0) return null;
                
                const Icon = iconMap[topic.icon] || GitBranch;
                const totalDuration = filteredLessons.reduce((acc, lesson) => acc + lesson.duration, 0);
                
                return (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-bold">{topic.title}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredLessons.map((lesson) => {
                        const isCompleted = userProgressSample.completedLessons.includes(lesson.id);
                        const isCurrent = userProgressSample.currentLesson === lesson.id;
                        
                        return (
                          <Card key={lesson.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${isCurrent ? 'border-primary' : ''}`}>
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <Badge variant={lesson.difficulty === 'Beginner' ? 'default' : lesson.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                                  {lesson.difficulty}
                                </Badge>
                                {isCompleted && (
                                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-400">
                                    <Check className="h-3 w-3 mr-1" /> Completed
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="mt-3">{lesson.title}</CardTitle>
                              <CardDescription>{lesson.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {lesson.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration} min
                              </div>
                              <Link to={`/lesson/${lesson.id}`}>
                                <Button variant={isCompleted ? "outline" : "default"} className="gap-1">
                                  <span>{isCompleted ? "Review" : "Start"} Lesson</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
            
            <TabsContent value="beginner" className="space-y-8">
              {filteredTopics.map((topic) => {
                const beginnerLessons = filterLessons(topic).filter(lesson => lesson.difficulty === 'Beginner');
                
                if (beginnerLessons.length === 0) return null;
                
                const Icon = iconMap[topic.icon] || GitBranch;
                
                return (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-bold">{topic.title} - Beginner</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {beginnerLessons.map((lesson) => {
                        const isCompleted = userProgressSample.completedLessons.includes(lesson.id);
                        
                        return (
                          <Card key={lesson.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <Badge>Beginner</Badge>
                                {isCompleted && (
                                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-400">
                                    <Check className="h-3 w-3 mr-1" /> Completed
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="mt-3">{lesson.title}</CardTitle>
                              <CardDescription>{lesson.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {lesson.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration} min
                              </div>
                              <Link to={`/lesson/${lesson.id}`}>
                                <Button variant={isCompleted ? "outline" : "default"} className="gap-1">
                                  <span>{isCompleted ? "Review" : "Start"} Lesson</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
            
            <TabsContent value="intermediate" className="space-y-8">
              {filteredTopics.map((topic) => {
                const intermediateLessons = filterLessons(topic).filter(lesson => lesson.difficulty === 'Intermediate');
                
                if (intermediateLessons.length === 0) return null;
                
                const Icon = iconMap[topic.icon] || GitBranch;
                
                return (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-bold">{topic.title} - Intermediate</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {intermediateLessons.map((lesson) => {
                        const isCompleted = userProgressSample.completedLessons.includes(lesson.id);
                        
                        return (
                          <Card key={lesson.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <Badge variant="secondary">Intermediate</Badge>
                                {isCompleted && (
                                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-400">
                                    <Check className="h-3 w-3 mr-1" /> Completed
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="mt-3">{lesson.title}</CardTitle>
                              <CardDescription>{lesson.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {lesson.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration} min
                              </div>
                              <Link to={`/lesson/${lesson.id}`}>
                                <Button variant={isCompleted ? "outline" : "default"} className="gap-1">
                                  <span>{isCompleted ? "Review" : "Start"} Lesson</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-8">
              {filteredTopics.map((topic) => {
                const advancedLessons = filterLessons(topic).filter(lesson => lesson.difficulty === 'Advanced');
                
                if (advancedLessons.length === 0) return null;
                
                const Icon = iconMap[topic.icon] || GitBranch;
                
                return (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-bold">{topic.title} - Advanced</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {advancedLessons.map((lesson) => {
                        const isCompleted = userProgressSample.completedLessons.includes(lesson.id);
                        
                        return (
                          <Card key={lesson.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <Badge variant="destructive">Advanced</Badge>
                                {isCompleted && (
                                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-400">
                                    <Check className="h-3 w-3 mr-1" /> Completed
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="mt-3">{lesson.title}</CardTitle>
                              <CardDescription>{lesson.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {lesson.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration} min
                              </div>
                              <Link to={`/lesson/${lesson.id}`}>
                                <Button variant={isCompleted ? "outline" : "default"} className="gap-1">
                                  <span>{isCompleted ? "Review" : "Start"} Lesson</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
