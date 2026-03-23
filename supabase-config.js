// ══════════════════════════════════════════════════════════════
//  supabase-config.js  —  shared by index.html and admin.html
//  Replace SUPABASE_URL and SUPABASE_ANON_KEY with your values.
//  Find them: Supabase Dashboard → Project Settings → API
// ══════════════════════════════════════════════════════════════

const SUPABASE_URL      = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY';

// Supabase client — imported via CDN in HTML files
// window.supabase is available after the CDN script loads
let _supaClient = null;
function getClient() {
  if (!_supaClient) {
    _supaClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      realtime: { params: { eventsPerSecond: 10 } }
    });
  }
  return _supaClient;
}

// Storage bucket names (create these in Supabase → Storage)
const BUCKETS = {
  images:   'media-images',   // for gallery, avatars, thumbnails
  videos:   'media-videos',   // for video files
};
