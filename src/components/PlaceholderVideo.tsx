import { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Pause } from 'lucide-react';

interface PlaceholderVideoProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
}

const getVideoSrc = (label?: string): string | null => {
  const query = (label || '').toLowerCase();
  
  if (query.includes('welcome') || query.includes('home')) {
    return '/assets/videos/midweek_bliss.mp4';
  }
  if (query.includes('story') || query.includes('history')) {
    return '/assets/videos/customer_happiness.mp4';
  }
  if (query.includes('kebab') || query.includes('food')) {
    return '/assets/videos/kebab_promo.mp4';
  }
  if (query.includes('bar') || query.includes('mixology') || query.includes('drink')) {
    return '/assets/videos/mixology_welcome.mp4';
  }
  
  return '/assets/videos/customer_happiness.mp4';
};

const PlaceholderVideo = ({
  aspectRatio = 'aspect-video',
  className = '',
  label = 'Video Placeholder',
}: PlaceholderVideoProps) => {
  const videoSrc = getVideoSrc(label);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative ${aspectRatio} bg-surface-accent/30 overflow-hidden group rounded-md cursor-pointer ${className}`}
      onClick={togglePlay}
      role="button"
      aria-label={label}
    >
      {videoSrc ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Custom controls overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            {/* Center Play/Pause button that fades in on hover or when paused */}
            <div className={`w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100'
            }`}>
              {isPlaying ? (
                <Pause size={24} className="text-neutral" />
              ) : (
                <Play size={24} className="text-neutral ml-1" />
              )}
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
            <span className="font-garamond text-neutral text-sm bg-black/40 px-2 py-1 rounded backdrop-blur-sm">{label}</span>
            <button
              onClick={toggleMute}
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-neutral transition-colors backdrop-blur-sm"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="#E9A0A0" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-70 transition-colors">
              <Play size={24} className="text-neutral ml-1" />
            </div>
          </div>

          {/* Label */}
          <div className="absolute bottom-4 left-4">
            <span className="font-garamond text-primary text-sm">{label}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceholderVideo;
