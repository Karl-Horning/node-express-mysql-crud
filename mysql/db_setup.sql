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

INSERT INTO users (name, email, phone_no)
VALUES ('John Smith', 'john.smith@gmail.com', '0794 333 4444'),
    ('Chet Baker', 'chet@aol.com', '0776 115 1234'),
    ('Dave Davidson', 'dd@msn.com', '0777 555 1234'),
    ('Tiger Nixon', 't.nixon@gmail.com', '0792 222 4444'),
    ('Timothy Mooney', 'the_mooney@me.com', '0777 111 1234'),
    ('Vivian Harrell', 'viv_h@hotmail.com', '0774 444 1234'),
    ('Zenaida Frank', 'frankie@gmail.com', '0774 444 1234'),
    ('Yuri Berry', 'myberry204@hotmail.com', '0778 888 1234'),
    ('Zorita Serrano', 'z.serrano@three.com', '0777 333 1234'),
    ('Unity Butler', 'unity@msn.com', '0777 777 7777'),
    ('Alfred Schmidt', 'frankfurt1@gmail.de', '0784 333 4444');