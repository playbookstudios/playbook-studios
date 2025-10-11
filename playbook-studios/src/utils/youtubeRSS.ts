// YouTube RSS Feed Parser Utility
// This utility helps parse YouTube RSS feeds and convert them to our podcast format

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
  duration: string;
  author: string;
}

// Function to parse YouTube RSS XML
export function parseYouTubeRSS(xmlText: string): YouTubeVideo[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  
  const entries = xmlDoc.querySelectorAll('entry');
  const videos: YouTubeVideo[] = [];
  
  entries.forEach((entry) => {
    const title = entry.querySelector('title')?.textContent || '';
    const description = entry.querySelector('media\\:description, description')?.textContent || '';
    const videoId = entry.querySelector('yt\\:videoId, videoId')?.textContent || '';
    const publishedAt = entry.querySelector('published')?.textContent || '';
    const author = entry.querySelector('author name')?.textContent || '';
    
    // Get thumbnail URL from media:thumbnail
    const thumbnailElement = entry.querySelector('media\\:thumbnail');
    const thumbnail = thumbnailElement?.getAttribute('url') || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    // YouTube doesn't provide duration in RSS, so we'll need to fetch it separately
    // For now, we'll use a placeholder
    const duration = 'Unknown';
    
    if (videoId && title) {
      videos.push({
        id: videoId,
        title: title.trim(),
        description: description.trim(),
        thumbnail,
        videoId,
        publishedAt,
        duration,
        author: author.trim()
      });
    }
  });
  
  return videos;
}

// Function to get YouTube channel RSS URL
export function getYouTubeRSSURL(channelId: string): string {
  return `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
}

// Function to get YouTube user RSS URL (alternative method)
export function getYouTubeUserRSSURL(username: string): string {
  return `https://www.youtube.com/feeds/videos.xml?user=${username}`;
}

// Function to fetch YouTube RSS feed
export async function fetchYouTubeFeed(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const rssUrl = getYouTubeRSSURL(channelId);
    
    // Note: This will fail due to CORS restrictions when running in browser
    // You'll need to use a backend proxy or CORS proxy for production
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    return parseYouTubeRSS(xmlText);
  } catch (error) {
    console.error('Error fetching YouTube RSS feed:', error);
    throw error;
  }
}

// CORS Proxy URL (you may need to use your own or a different one)
export const CORS_PROXY_URL = 'https://api.allorigins.win/raw?url=';

// Function to fetch YouTube RSS feed with CORS proxy
export async function fetchYouTubeFeedWithProxy(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const rssUrl = getYouTubeRSSURL(channelId);
    const proxyUrl = `${CORS_PROXY_URL}${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    return parseYouTubeRSS(xmlText);
  } catch (error) {
    console.error('Error fetching YouTube RSS feed with proxy:', error);
    throw error;
  }
}

// Instructions for setting up your YouTube RSS integration:
/*
1. Get your YouTube Channel ID:
   - Go to your YouTube channel
   - Look at the URL: https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxxxx
   - The part after /channel/ is your Channel ID
   - OR go to YouTube Studio > Settings > Channel > Advanced settings

2. Update the PodcastPage component:
   - Replace 'YOUR_CHANNEL_ID' with your actual channel ID
   - Uncomment the fetchYouTubeFeedWithProxy call in useEffect
   - Remove or comment out the mock data

3. For production, consider:
   - Setting up your own CORS proxy server
   - Using YouTube Data API v3 for more detailed information
   - Caching the feed data to reduce API calls
   - Adding error handling and loading states

4. Example implementation in PodcastPage:
   ```typescript
   useEffect(() => {
     const loadEpisodes = async () => {
       try {
         setLoading(true);
         const episodes = await fetchYouTubeFeedWithProxy('YOUR_CHANNEL_ID');
         setEpisodes(episodes);
       } catch (error) {
         console.error('Failed to load episodes:', error);
         // Fallback to mock data or show error message
       } finally {
         setLoading(false);
       }
     };
     
     loadEpisodes();
   }, []);
   ```
*/
