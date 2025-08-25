import React from 'react';
import { useLanyard } from '../hooks/useLanyard';

interface DiscordProfileProps {
  discordId: string;
  className?: string;
}

const DiscordProfile: React.FC<DiscordProfileProps> = ({ discordId, className = '' }) => {
  const { 
    user, 
    loading, 
    error, 
    getAvatarUrl, 
    username, 
    displayName, 
    status,
    listeningToSpotify,
    spotify
  } = useLanyard(discordId);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'dnd':
        return 'bg-red-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'idle':
        return 'Idle';
      case 'dnd':
        return 'Do Not Disturb';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const getActivityText = () => {
    if (listeningToSpotify && spotify) {
      return `Listening to ${spotify.song} - ${spotify.artist}`;
    }
    
    if (user?.activities && user.activities.length > 0) {
      const activity = user.activities[0];
      if (activity.type === 0) { // Playing
        return `Playing ${activity.name}`;
      } else if (activity.type === 1) { // Streaming
        return `Streaming ${activity.name}`;
      } else if (activity.type === 2) { // Listening
        return `Listening to ${activity.name}`;
      } else if (activity.type === 3) { // Watching
        return `Watching ${activity.name}`;
      } else if (activity.type === 4) { // Custom
        return activity.state || activity.name;
      } else if (activity.type === 5) { // Competing
        return `Competing in ${activity.name}`;
      }
    }
    
    return null;
  };

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-600 animate-pulse"></div>
        <div className="flex flex-col">
          <div className="h-4 w-20 bg-dark-600 rounded animate-pulse"></div>
          <div className="h-3 w-16 bg-dark-600 rounded animate-pulse mt-1"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-600 flex items-center justify-center">
          <span className="text-xs text-gray-400">?</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Discord</span>
          <span className="text-xs text-gray-500">Error loading</span>
        </div>
      </div>
    );
  }

  const avatarUrl = getAvatarUrl(128);
  const displayUsername = displayName || username || 'Unknown User';

  const activityText = getActivityText();

  return (
    <a 
      href={`https://discord.com/users/${discordId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${className} hover:opacity-80 transition-opacity cursor-pointer`}
    >
      {/* Discord Avatar */}
      <div className="relative">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-accent-500 glow-effect">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={`${displayUsername}'s Discord avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-dark-600 flex items-center justify-center">
              <span className="text-xs text-gray-400">?</span>
            </div>
          )}
        </div>
        
        {/* Status indicator */}
        {status && (
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-dark-800 ${getStatusColor(status)}`}></div>
        )}
      </div>

      {/* User info */}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm md:text-base font-medium text-white truncate">
          {displayUsername}
        </span>
        <div className="flex items-center gap-1">
          {activityText ? (
            <span className="text-xs text-green-400 truncate">{activityText}</span>
          ) : status ? (
            <>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(status)}`}></div>
              <span className="text-xs text-gray-400">{getStatusText(status)}</span>
            </>
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default DiscordProfile;
