
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, className }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [volume, setVolume] = React.useState(80);

  // This would be replaced with actual video player logic
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden bg-black", className)}>
      <div className="video-container">
        {/* For now, using a placeholder image instead of an actual video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <p className="text-lg font-medium">{title}</p>
            <p className="text-sm text-gray-400 mt-2">Video content will appear here</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">0:00</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full mx-4"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-sm">10:00</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button onClick={togglePlay} className="bg-white text-gray-900 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
