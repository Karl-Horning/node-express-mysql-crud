-- All are MySQL commands

CREATE DATABASE node_crud;

USE node_crud;

CREATE TABLE users (
	ID int(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(150),
	email VARCHAR(150),
	phone_no VARCHAR(25),
	PRIMARY KEY(ID)
);

