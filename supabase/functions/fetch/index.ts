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
        JSON.stringify({ success: false, error: 'URL is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Extract YouTube video ID from URL
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/);
    
    if (!videoIdMatch) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid YouTube URL' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const videoId = videoIdMatch[1];

    // Call RapidAPI
    const response = await fetch(
      `https://youtube-video-fast-downloader-24-7.p.rapidapi.com/get-videos-info/${videoId}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'youtube-video-fast-downloader-24-7.p.rapidapi.com',
          'x-rapidapi-key': 'd7c9984414msh9a765d2ba1e12f1p192673jsn05c92d7aa150',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch video info from RapidAPI');
    }

    const data = await response.json();

    // Extract relevant information
    const result = {
      platform: 'YouTube',
      title: data.title || 'Unknown Title',
      thumbnail: data.thumbnail || data.thumbnails?.[0]?.url || '',
      downloadUrl: data.video_url || data.formats?.[0]?.url || '',
      quality: data.quality || '1080p',
    };

    return new Response(
      JSON.stringify({ success: true, result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to fetch video information' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
