
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code2, BookOpen, Award, User, BarChart3, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">CodeWise</span>
        </Link>
        <nav className="flex items-center space-x-6 mx-6">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
            Dashboard
          </Link>
          <Link to="/courses" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/courses') ? 'text-primary' : 'text-muted-foreground'}`}>
            Courses
          </Link>
          <Link to="/challenges" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/challenges') ? 'text-primary' : 'text-muted-foreground'}`}>
            Challenges
          </Link>
          <Link to="/achievements" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/achievements') ? 'text-primary' : 'text-muted-foreground'}`}>
            Achievements
          </Link>
          <Link to="/stats" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/stats') ? 'text-primary' : 'text-muted-foreground'}`}>
            Stats
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <BookOpen className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Award className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="ml-4">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
