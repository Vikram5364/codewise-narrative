
import React from 'react';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to CodeWise</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn data structures and algorithms through interactive videos and challenges
        </p>
        
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
