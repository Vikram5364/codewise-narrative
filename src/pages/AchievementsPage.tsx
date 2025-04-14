
import React from 'react';
import { 
  Award, 
  Trophy, 
  Star, 
  Clock, 
  BookOpen, 
  Code, 
  ChevronRight, 
  Lock 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import { topics, userProgressSample } from '@/data/sampleData';

// Mock achievements data
const achievements = [
  {
    id: 'first-lesson',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: <BookOpen className="h-6 w-6 text-yellow-500" />,
    unlocked: true,
    progress: 100,
    reward: '10 XP'
  },
  {
    id: 'streak-3',
    title: '3-Day Streak',
    description: 'Study for 3 consecutive days',
    icon: <Trophy className="h-6 w-6 text-amber-500" />,
    unlocked: true,
    progress: 100,
    reward: '50 XP'
  },
  {
    id: 'challenge-5',
    title: 'Problem Solver',
    description: 'Complete 5 coding challenges',
    icon: <Code className="h-6 w-6 text-blue-500" />,
    unlocked: false,
    progress: 40,
    reward: '100 XP'
  },
  {
    id: 'arrays-master',
    title: 'Array Master',
    description: 'Complete all array lessons',
    icon: <Award className="h-6 w-6 text-purple-500" />,
    unlocked: false,
    progress: 15,
    reward: '200 XP'
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Solve a challenge in under 5 minutes',
    icon: <Clock className="h-6 w-6 text-green-500" />,
    unlocked: false,
    progress: 0,
    reward: '150 XP'
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on a quiz first try',
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    unlocked: true,
    progress: 100,
    reward: '100 XP'
  }
];

const AchievementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Achievements</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Track your learning milestones and earn rewards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`overflow-hidden ${!achievement.unlocked ? 'opacity-75' : ''}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${achievement.unlocked ? 'bg-primary/10' : 'bg-muted'}`}>
                    {achievement.icon}
                  </div>
                  {achievement.unlocked ? (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Unlocked
                    </span>
                  ) : (
                    <span className="text-sm flex items-center gap-1 text-muted-foreground">
                      <Lock className="h-3 w-3" /> Locked
                    </span>
                  )}
                </div>
                <CardTitle className="mt-3">{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-0">
                <span className="text-sm font-medium text-amber-600">
                  Reward: {achievement.reward}
                </span>
                
                <Button variant="ghost" size="sm" disabled={!achievement.unlocked}>
                  {achievement.unlocked ? (
                    <>
                      <span>Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </>
                  ) : (
                    'Locked'
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AchievementsPage;
