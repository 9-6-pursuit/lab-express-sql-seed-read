-- seed.sql
\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
  ('Truancy', '4KPHIL.', 'Actions Speak Louder', '1:38', true),
  ('Gangrene', '4KPHIL.', 'Actions Speak Louder', '1:59', false),
  ('DOING GOOD!', 'FatBoyJonesy', 'From Florida with Love', '2:21', true),
  ('Want & Need', 'FatBoyJonesy', 'No Hard Feelings', '2:35', true),
  ('Gangster Party', '454', 'Fast 5', '1:58', false),
  ('Sunday Talkin', 'Draft Day', 'Sundays', '2:00', false);
