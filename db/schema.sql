CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    Primary Key(id)
);