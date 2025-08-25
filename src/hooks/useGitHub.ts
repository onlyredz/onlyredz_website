import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  private: boolean;
}

export const useGitHub = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub repos: ${response.status}`);
        }
        
        const data: GitHubRepo[] = await response.json();
        
        const publicRepos = data
          .filter(repo => !repo.private && repo.name !== 'onlyredz')
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); 
        
        setRepos(publicRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching GitHub repos:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return {
    repos,
    loading,
    error
  };
};
