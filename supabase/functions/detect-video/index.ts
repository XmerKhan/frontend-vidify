import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Detecting platform for URL:', url);

    // Detect platform from URL
    let platform = 'unknown';
    let platformName = 'Unknown';
    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      platform = 'youtube';
      platformName = 'YouTube';
    } else if (url.includes('instagram.com')) {
      platform = 'instagram';
      platformName = 'Instagram';
    } else if (url.includes('facebook.com') || url.includes('fb.com')) {
      platform = 'facebook';
      platformName = 'Facebook';
    } else if (url.includes('tiktok.com')) {
      platform = 'tiktok';
      platformName = 'TikTok';
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      platform = 'twitter';
      platformName = 'X (Twitter)';
    }

    if (platform === 'unknown') {
      return new Response(
        JSON.stringify({ error: 'Unsupported platform. Please use YouTube, Instagram, Facebook, TikTok, or X (Twitter) links.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Simulate video metadata (in production, you'd use yt-dlp or platform APIs)
    const videoInfo = {
      platform,
      platformName,
      title: `Sample ${platformName} Video`,
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
      duration: '3:45',
      qualities: ['144p', '360p', '720p', '1080p', '4K'],
      formats: ['MP4', 'MP3'],
      url: url,
    };

    console.log('Video detected:', videoInfo);

    return new Response(
      JSON.stringify({ success: true, video: videoInfo }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in detect-video function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to detect video' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
