
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

const AuthToggle: React.FC = () => {
  return (
    <div className="p-6 border rounded-lg bg-muted/20">
      <div className="flex items-center gap-3 mb-4">
        <Info className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-medium">Authentication Required</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        To implement user registration and login functionality, please connect this project to Supabase 
        by clicking the green Supabase button in the top right corner of the interface.
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        Once connected, we can implement secure authentication with email/password login, 
        social authentication, and complete user management.
      </p>
      <Button variant="outline" className="mt-2">
        Learn More About Supabase Integration
      </Button>
    </div>
  );
};

export default AuthToggle;
