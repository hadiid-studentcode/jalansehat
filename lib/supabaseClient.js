/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
    'https://grvmucznhugsfcaqgyge.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdydm11Y3puaHVnc2ZjYXFneWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTMzMDQsImV4cCI6MjAwMTg4OTMwNH0.YNlviaTa3-pkhiMYpaYJY4dgGRQYh1QbRov9hIPSY0o',
    {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    },
);