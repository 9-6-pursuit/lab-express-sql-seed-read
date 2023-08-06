
-- INSERT INTO playlists (name, description) VALUES
--   ('Summer Vibes', 'Awesome songs for summer'),
--   ('Workout Mix', 'Energetic tunes for your workout'),
--   ('Chill Out', 'Relaxing music to unwind');

\c tuner

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
  ('Song 1', 'Artist 1', 'Album 1', '4:30', true),
  ('Song 2', 'Artist 2', 'Album 2', '3:45', false),
  ('Song 3', 'Artist 3', 'Album 3', '3:15', true),
  ('Song 4', 'Artist 4', 'Album 4', '4:00', true),
  ('Song 5', 'Artist 5', 'Album 5', '3:30', false);
