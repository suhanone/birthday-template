import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import audioFile from '@assets/Paro X Maand X Jhol  Feel the Drop   Ultimate Vibe Mashup 2025_1759386308140.mp3';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <div className="backdrop-blur-lg bg-card/30 border border-card-border rounded-xl p-2 flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={togglePlay}
          className={isPlaying ? 'animate-glow' : ''}
          data-testid="button-play-pause"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
        
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleMute}
          data-testid="button-mute-toggle"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </Button>

        {isPlaying && (
          <div className="flex items-center gap-1 px-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-pulse"
                style={{
                  height: `${12 + Math.random() * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </div>
  );
}
