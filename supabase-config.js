// ══════════════════════════════════════════════════════════════
//  supabase-config.js  —  shared by index.html and admin.html
//  Replace SUPABASE_URL and SUPABASE_ANON_KEY with your values.
//  Find them: Supabase Dashboard → Project Settings → API
// ══════════════════════════════════════════════════════════════

const SUPABASE_URL      = 'sb_publishable_RmexM-TP58LGNGJtKANjcQ_L_nOWZFg';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXNyd2ZtcWZsZmF3bnZvdXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNTcwNTMsImV4cCI6MjA4OTgzMzA1M30.jsFISnYWejRJPx-ab3bCh1qOLL2oyttpwc4PkNdu3tE';

// Supabase client — imported via CDN in HTML files
// window.supabase is available after the CDN script loads
let _supaClient = null;
function getClient() {
  if (!_supaClient) {
    _supaClient = window.supabase.createClient(sb_publishable_RmexM-TP58LGNGJtKANjcQ_L_nOWZFg, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXNyd2ZtcWZsZmF3bnZvdXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNTcwNTMsImV4cCI6MjA4OTgzMzA1M30.jsFISnYWejRJPx-ab3bCh1qOLL2oyttpwc4PkNdu3tE, {
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
