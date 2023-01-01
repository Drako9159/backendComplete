
--table tasks
CREATE TABLE
    users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        email VARCHAR(50),
        password VARCHAR(150),
        role ENUM("user", "admin"),
        age INTEGER,
        createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );