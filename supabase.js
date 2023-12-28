
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://iuvdotbvevdpipwxgwxq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dmRvdGJ2ZXZkcGlwd3hnd3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2OTY5MDQsImV4cCI6MjAxOTI3MjkwNH0.nTw3OVfMYu8u8N1X0kDbBeF1Obd0M6y_32mm1pIFI3g')





module.exports = supabase


