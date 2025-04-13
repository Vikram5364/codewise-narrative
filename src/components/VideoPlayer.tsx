
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DocumentedLessonProps {
  content: {
    title: string;
    imageUrl?: string;
    description: string;
    sections?: {
      title: string;
      content: string;
    }[];
  };
}

const DocumentedLesson: React.FC<DocumentedLessonProps> = ({ content }) => {
  // Default fallback image if the provided one is invalid or inaccessible
  const fallbackImageUrl = "/placeholder.svg";
  
  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.src !== fallbackImageUrl) {
      img.src = fallbackImageUrl;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border shadow-sm">
        <CardContent className="p-0 overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <div className="relative w-full h-full">
              {content.imageUrl ? (
                <img
                  src={content.imageUrl}
                  alt={content.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center p-4">
                    <AlertTriangle className="mx-auto h-10 w-10 text-yellow-500" />
                    <p className="mt-2">Image unavailable</p>
                  </div>
                </div>
              )}
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
      
      {content.sections && content.sections.length > 0 && (
        <Tabs defaultValue="section0" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full overflow-x-auto">
            {content.sections.map((section, index) => (
              <TabsTrigger key={index} value={`section${index}`} className="text-sm">
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {content.sections.map((section, index) => (
            <TabsContent key={index} value={`section${index}`} className="mt-4">
              <Card>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default DocumentedLesson;
