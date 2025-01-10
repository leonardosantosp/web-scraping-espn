CREATE DATABASE NBAStats;

USE NBAStats;

-- CREATE TABLE team (
--     id INT PRIMARY KEY,
--     team_name VARCHAR(50) NOT NULL,
--     image VARCHAR(255) NOT NULL,
--     technical VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE player(
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     player_name VARCHAR(150) NOT NULL,
--     player_number INT,
--     pos VARCHAR(10) NOT NULL,
--     age INT NOT NULL,
--     height VARCHAR(10) NOT NULL,
--     weight VARCHAR(10) NOT NULL,
--     college VARCHAR(255),
--     salary VARCHAR(20),
--     image_link VARCHAR(255) NOT NULL,
--     team_id INT,
--     CONSTRAINT FK_Player_Team FOREIGN KEY (team_id) REFERENCES team(id) ON DELETE CASCADE
-- );
