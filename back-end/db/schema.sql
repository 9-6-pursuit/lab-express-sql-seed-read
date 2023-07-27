DROP DATABASE IF EXISTS playlists_dev;
CREATE DATABASE playlists_dev;

\c playlists_dev;

CREATE TABLE playlists (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 is_favorite BOOLEAN
);
