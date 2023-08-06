-- DROP DATABASE IF EXISTS tuner;
-- CREATE DATABASE tuner;

-- \c tuner

-- Create playlists table
-- CREATE TABLE playlists (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT
-- );

-- -- Create songs table
-- CREATE TABLE songs (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   artist VARCHAR(255) NOT NULL,
--   album VARCHAR(255),
--   time VARCHAR(10),
--   is_favorite BOOLEAN
-- );
--   --playlist_id INTEGER REFERENCES playlists(id) ON DELETE CASCADE

DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs (
id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);