DROP DATABASE IF EXISTS memory_db;
CREATE DATABASE memory_db;

USE memory_db;

CREATE TABLE memory
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    memory_slot VARCHAR
    (10)
);