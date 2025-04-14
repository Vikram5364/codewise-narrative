
import React from 'react';
import { BarChart, BarChart3, Clock, Calendar, LineChart, Trophy, BookOpen, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart as RechartsBarChart, Bar } from 'recharts';
import Navigation from '@/components/Navigation';
import { topics, userProgressSample } from '@/data/sampleData';

// Mock data for charts
const weeklyActivity = [
  { name: 'Mon', minutes: 45 },
  { name: 'Tue', minutes: 30 },
  { name: 'Wed', minutes: 60 },
  { name: 'Thu', minutes: 15 },
  { name: 'Fri', minutes: 0 },
  { name: 'Sat', minutes: 90 },
  { name: 'Sun', minutes: 75 },
];

const topicProgress = [
  { name: 'Arrays', completed: 3, total: 25 },
  { name: 'Linked Lists', completed: 1, total: 22 },
  { name: 'Trees', completed: 0, total: 10 },
];

const challengePerformance = [
  { name: 'Easy', attempted: 8, solved: 6 },
  { name: 'Medium', attempted: 4, solved: 2 },
  { name: 'Hard', attempted: 1, solved: 0 },
];

const timeTrend = [
  { date: 'Week 1', minutes: 120 },
  { date: 'Week 2', minutes: 180 },
  { date: 'Week 3', minutes: 240 },
  { date: 'Week 4', minutes: 210 },
  { date: 'Week 5', minutes: 300 },
  { date: 'Week 6', minutes: 270 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

const StatsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Your Learning Stats</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Track your progress and learning journey
          </p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18.5 hrs</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">12%</span> from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgressSample.completedLessons.length}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">3</span> new this week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Challenges Solved</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgressSample.completedChallenges.length}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500 font-medium">1</span> less than last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 days</div>
              <p className="text-xs text-muted-foreground mt-1">Best streak: 12 days</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts */}
        <Tabs defaultValue="activity" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="time">Study Time</TabsTrigger>
          </TabsList>
          
          <TabsContent value="activity" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Weekly Activity
                </CardTitle>
                <CardDescription>
                  Your study time distribution over the past week
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={weeklyActivity}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value} mins`, 'Study Time']} />
                      <Bar dataKey="minutes" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="topics" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Topic Progress
                </CardTitle>
                <CardDescription>
                  Your progress in different topic areas
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={topicProgress}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" domain={[0, dataMax => Math.max(dataMax, 10)]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip 
                        formatter={(value, name, props) => {
                          return name === "completed" ? 
                            [`${value}/${props.payload.total} lessons`, 'Completed'] : 
                            [`${value} lessons`, 'Total'];
                        }} 
                      />
                      <Bar dataKey="total" fill="#E5DEFF" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="completed" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="challenges" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Challenge Performance
                </CardTitle>
                <CardDescription>
                  Your performance in coding challenges by difficulty
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={challengePerformance}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="solved"
                        nameKey="name"
                        label={({ name, solved, attempted }) => `${name}: ${solved}/${attempted}`}
                      >
                        {challengePerformance.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name, props) => [`${value}/${props.payload.attempted}`, props.payload.name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="time" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  Study Time Trend
                </CardTitle>
                <CardDescription>
                  Your learning time trend over the past weeks
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={timeTrend}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" />
                      <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value} mins`, 'Study Time']} />
                      <Area
                        type="monotone"
                        dataKey="minutes"
                        stroke="#8B5CF6"
                        fillOpacity={1}
                        fill="url(#colorTime)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default StatsPage;
