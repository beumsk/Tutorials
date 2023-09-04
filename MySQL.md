-- MySQL - Structured Query Language; relational database management system - by Beumsk



-- Connect
mysql -h <hostname> -u <username> -p

-- Create DB
create database <database_name>;

-- Show DBs
show databases;

-- Using DB
use database_name;

-- Create Table
CREATE TABLE table_name (
	column1 datatype,
	column2 datatype,
);

-- Select data (all)
select * from <table_name>;
select * from <table_name> \G; -- format
select * from <table_name> limit 100 \G; -- limit 100

-- Select data with condition
select * from <table_name> where <condition> \G;

-- Count data (all)
select count(*) from <table_name>;

-- Insert data
insert into <table_name> (column1, column2) values (value1, value2);

-- Update data
update table_name set column1 = value1, column2 = value2 where <condition>;

-- Delete data (all)
delete from <table_name>;

-- Alter Table
alter table <table_name> add <column_name> <datatype>;

-- Drop Table
drop table <table_name>;

-- Drop DB
drop database <database_name>;






