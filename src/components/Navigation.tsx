
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code2, BookOpen, Award, User } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">CodeWise</span>
        </Link>
        <nav className="flex items-center space-x-6 mx-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link to="/courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Courses
          </Link>
          <Link to="/challenges" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Challenges
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
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
