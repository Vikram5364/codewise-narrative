
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  // Fallback video URL if the provided one is invalid or inaccessible
  const fallbackVideoUrl = "https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4";
  
  // Function to handle video errors
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.src !== fallbackVideoUrl) {
      video.src = fallbackVideoUrl;
      video.load();
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-0 overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/placeholder.svg"
              title={title}
              onError={handleVideoError}
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={fallbackVideoUrl} type="video/mp4" />
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-4">
                  <AlertTriangle className="mx-auto h-10 w-10 text-yellow-500" />
                  <p className="mt-2">Video playback is not supported in your browser.</p>
                </div>
              </div>
            </video>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
