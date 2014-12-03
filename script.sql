CREATE DATABASE IF NOT EXISTS checkrent;
use checkrent;

CREATE TABLE IF NOT EXISTS usuarios(
	id int not null primary key auto_increment,
	nombre varchar(50) not null,
	ap_paterno varchar(30) not null,
	ap_materno varchar(30),
	email varchar(30) not null unique,
	usuario varchar(30) not null unique,
	password varchar(32) not null
);

CREATE DATABASE IF NOT EXISTS pais(
	id int not null primary key auto_increment,
	nombre varchar(50) not null
);

CREATE TABLE IF NOT EXISTS estados(
	id int not null primary key auto_increment,
	nombre varchar(50) not null,
	id_pais int not null,
	CONSTRAINT fk_pais  FOREIGN KEY(id_pais) REFERENCES pais(id) ON DELETE CASCADE ON UPDATE CASCADE
);