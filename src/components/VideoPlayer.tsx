
import React, { useState, useRef, useEffect } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample video URL to use when no valid URL is provided
  const fallbackVideoUrl = 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4';
  
  const actualVideoUrl = videoUrl.includes('placeholder') ? fallbackVideoUrl : videoUrl;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / duration) * 100);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (videoRef.current) {
      videoRef.current.volume = value[0] / 100;
    }
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
    if (videoRef.current) {
      const newTime = (videoRef.current.duration / 100) * value[0];
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
      
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [volume]);

  return (
    <div className={cn("rounded-lg overflow-hidden bg-black", className)}>
      <div className="video-container">
        <video
          ref={videoRef}
          src={actualVideoUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
          poster={`https://placehold.co/600x400/000000/FFFFFF?text=${encodeURIComponent(title)}`}
        />
      </div>
      
      <div className="bg-gray-900 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full mx-4"
            onValueChange={handleProgressChange}
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={skipBackward}>
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button onClick={togglePlay} className="bg-white text-gray-900 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={skipForward}>
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
              onValueChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
