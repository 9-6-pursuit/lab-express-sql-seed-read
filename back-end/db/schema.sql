drop DATABASE if EXISTS tunerdb;

CREATE DATABASE tunerdb;

\c tunerdb

CREATE TABLE songs(
    id serial PRIMARY KEY,
    name text not NULL,
    artist text not NULL,
    album text,
    time text,
    is_favorite boolean
);

