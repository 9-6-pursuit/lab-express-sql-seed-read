DROP DATABASE IF EXISTS tuner_dev;
CREATE DATABASE tuner_dev;

\c tuner_dev;

CREATE TABLE bookmarks (
 id SERIAL PRIMARY KEY,
 name TEXT REQUIRED,
 artist TEXT REQUIRED,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);
