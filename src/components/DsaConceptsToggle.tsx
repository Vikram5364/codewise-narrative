
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  GitBranch, 
  ListTree, 
  Network,
  Hash,
  MinusSquare,
  SortAsc,
  Sigma
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type DsaConcept = {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
};

const dsaConcepts: DsaConcept[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    icon: MinusSquare,
    description: 'Sequential collection of elements of same type stored at contiguous memory locations.'
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    icon: ListTree,
    description: 'Linear data structure where elements are not stored at contiguous locations.'
  },
  {
    id: 'trees',
    name: 'Trees',
    icon: GitBranch,
    description: 'Hierarchical data structure with a root value and subtrees of children nodes.'
  },
  {
    id: 'graphs',
    name: 'Graphs',
    icon: Network,
    description: 'Non-linear data structure consisting of vertices and edges connecting these vertices.'
  },
  {
    id: 'hash-tables',
    name: 'Hash Tables',
    icon: Hash,
    description: 'Data structure that implements an associative array abstract data type.'
  },
  {
    id: 'sorting',
    name: 'Sorting Algorithms',
    icon: SortAsc,
    description: 'Algorithms for ordering elements in a list or array.'
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    icon: Sigma,
    description: 'Method for solving complex problems by breaking them down into simpler subproblems.'
  }
];

const DsaConceptsToggle: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string>('arrays');
  const selectedConceptData = dsaConcepts.find(concept => concept.id === selectedConcept);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">DSA Concepts</h2>
      <ToggleGroup type="single" variant="outline" className="flex flex-wrap gap-2 justify-start" 
        value={selectedConcept} 
        onValueChange={(value) => {
          if (value) setSelectedConcept(value);
        }}
      >
        {dsaConcepts.map((concept) => (
          <ToggleGroupItem key={concept.id} value={concept.id} aria-label={concept.name} className="flex items-center gap-2">
            <concept.icon className="h-4 w-4" />
            <span>{concept.name}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {selectedConceptData && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <selectedConceptData.icon className="h-5 w-5 text-primary" />
              {selectedConceptData.name}
            </CardTitle>
            <CardDescription>{selectedConceptData.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Select a topic to start learning about {selectedConceptData.name.toLowerCase()}.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DsaConceptsToggle;
