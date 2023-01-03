
--table tasks
CREATE TABLE
    users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(150) NOT NULL,
        role ENUM("user", "admin") NOT NULL,
        age INTEGER NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE
    tracks (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(150) NOT NULL,
        album VARCHAR(150) NOT NULL,
        cover VARCHAR(150) NOT NULL,
        artist_name VARCHAR(150) NOT NULL,
        artist_nickname VARCHAR(150) NOT NULL,
        artist_nationality VARCHAR(150) NOT NULL,
        duration_start INTEGER NOT NULL,
        duration_end INTEGER NOT NULL,
        mediaId VARCHAR(150) NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    tracks (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(150) NOT NULL,
        album VARCHAR(150) NOT NULL,
        cover VARCHAR(150) NOT NULL,
        artist_name VARCHAR(150) NOT NULL,
        artist_nickname VARCHAR(150) NOT NULL,
        artist_nationality VARCHAR(150) NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    storages (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        url MEDIUMTEXT NOT NULL,
        filename MEDIUMTEXT NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO tracks (id, name, album, cover, artist_name, artist_nickname, artist_nationality, duration_start, duration_end, mediaId, createdAt, updatedAt)
VALUES (DEFAULT, "Jaramillo" ,"album", "drako9159", "antonio", "drako9159", "MX", 0, 1, 2, DEFAULT, DEFAULT);