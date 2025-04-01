CREATE DATABASE trabalhoTrio;

USE trabalhoTrio;

CREATE TABLE usuarios(
id tinyint  not null  auto_increment primary key,
login varchar(50)

);

ALTER TABLE usuarios ADD  senha varchar(50) ;

SELECT * FROM usuarios;

CREATE TABLE pedidos(
id tinyint not null auto_increment primary key,
nomeCliente varchar (80),
descricaoServico varchar(500),
endereco varchar(100)
);

CREATE TABLE urgencia(
id tinyint not null auto_increment primary key,
nome varchar(20)
);

CREATE TABLE tecnicos(
id tinyint not null auto_increment primary key,
nome varchar(80),
email varchar(100),
cpf bigint(11)  unsigned,
telefone bigint(11),
matricula int(8),
cargo varchar(50)

);

SELECT * FROM tecnicos;




