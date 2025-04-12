
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { CodingChallenge, TestCase } from '@/types';

interface CodeEditorProps {
  challenge: CodingChallenge;
  onSubmit?: (code: string, success: boolean) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ challenge, onSubmit }) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<{passed: boolean; output: string}[]>([]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const runCode = () => {
    setIsRunning(true);
    
    // Simulate code execution with a timeout
    setTimeout(() => {
      // Mock execution results - in a real app, this would run the code against test cases
      const mockResults = challenge.testCases.map(testCase => {
        // This is just a simulation - in reality, we would actually run the code
        const passed = Math.random() > 0.3; // 70% chance of passing for demo purposes
        return {
          passed,
          output: passed ? testCase.expectedOutput : "Different result"
        };
      });
      
      setResults(mockResults);
      setIsRunning(false);
      
      const allPassed = mockResults.every(r => r.passed);
      if (onSubmit) {
        onSubmit(code, allPassed);
      }
    }, 1500);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted p-3 border-b flex justify-between items-center">
        <h3 className="font-medium">{challenge.title}</h3>
        <div className="flex items-center">
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mr-2">
            {challenge.language}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {challenge.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-4 bg-gray-950">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full bg-gray-900 text-gray-50 font-mono p-4 rounded-md h-64 focus:outline-none focus:ring-2 focus:ring-primary"
          spellCheck="false"
        />
      </div>
      
      <div className="p-4 border-t bg-background">
        <div className="flex justify-between mb-4">
          <h4 className="font-medium">Test Results</h4>
          <Button 
            onClick={runCode} 
            disabled={isRunning}
            className="flex items-center"
          >
            {isRunning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Run Code
              </>
            )}
          </Button>
        </div>
        
        {results.length > 0 ? (
          <div className="space-y-3">
            {challenge.testCases.map((testCase, index) => (
              <div key={index} className="p-3 rounded-md bg-muted">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Test Case {index + 1}</span>
                  {results[index]?.passed ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" /> Passed
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <XCircle className="h-4 w-4 mr-1" /> Failed
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Input:</p>
                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                      {testCase.input}
                    </code>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Expected:</p>
                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                      {testCase.expectedOutput}
                    </code>
                  </div>
                </div>
                {!results[index]?.passed && (
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground mb-1">Your Output:</p>
                    <code className="block p-2 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded overflow-x-auto">
                      {results[index]?.output}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-6 text-muted-foreground">
            Run your code to see the results
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
