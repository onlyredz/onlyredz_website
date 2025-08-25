import { useState, useEffect } from 'react';

interface DiscordUser {
  data: {
    user: {
      id: string;
      username: string;
      display_name: string | null;
      avatar: string;
      discriminator: string;
      public_flags: number;
      flags: number;
      banner: string | null;
      banner_color: string | null;
      accent_color: string | null;
      locale: string;
      mfa_enabled: boolean;
      premium_type: number;
      avatar_decoration: string | null;
      global_name: string | null;
    };
    activities: any[];
    spotify: any;
    discord_status: 'online' | 'idle' | 'dnd' | 'offline';
    discord_user: {
      id: string;
      username: string;
      display_name: string | null;
      avatar: string;
      discriminator: string;
      public_flags: number;
      flags: number;
      banner: string | null;
      banner_color: string | null;
      accent_color: string | null;
      locale: string;
      mfa_enabled: boolean;
      premium_type: number;
      avatar_decoration: string | null;
      global_name: string | null;
    };
    kv: Record<string, any>;
    listening_to_spotify: boolean;
  };
  success: boolean;
}

export const useLanyard = (discordId: string) => {
  const [user, setUser] = useState<DiscordUser['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch Discord data: ${response.status}`);
        }
        
        const data: DiscordUser = await response.json();
        
        if (data.success) {
          setUser(data.data);
        } else {
          throw new Error('Failed to fetch Discord data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching Discord data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (discordId) {
      fetchUser();
      
      const interval = setInterval(fetchUser, 15000);
      
      return () => clearInterval(interval);
    }
  }, [discordId]);

  const getAvatarUrl = (size: number = 128) => {
    if (!user?.discord_user?.avatar) return null;
    return `https://cdn.discordapp.com/avatars/${discordId}/${user.discord_user.avatar}.png?size=${size}`;
  };

  const getBannerUrl = (size: number = 512) => {
    if (!user?.discord_user?.banner) return null;
    return `https://cdn.discordapp.com/banners/${discordId}/${user.discord_user.banner}.png?size=${size}`;
  };

  return {
    user,
    loading,
    error,
    getAvatarUrl,
    getBannerUrl,
    username: user?.discord_user?.username || user?.discord_user?.global_name,
    displayName: user?.discord_user?.display_name,
    status: user?.discord_status,
    activities: user?.activities || [],
    spotify: user?.spotify,
    listeningToSpotify: user?.listening_to_spotify || false
  };
};
