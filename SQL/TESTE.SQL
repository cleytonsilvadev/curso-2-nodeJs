SHOW DATABASE; 
CREATE DATABASE sistemadecadastro;
USE sistemadecadastro;
SHOW TABLES;

--criando tabela
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email varchar(100),
    idade INT
);

DESCRIBE usuarios;
--criando usuarios
INSERT INTO usuarios(nome,email,idade)VALUES(
    "cleyton",
    "cleyton@gmail.com",
    26
);
INSERT INTO usuarios(nome,email,idade)VALUES(
    "alice",
    "alice@gmail.com",
    50
);
INSERT INTO usuarios(nome,email,idade)VALUES(
    "luiz",
    "luiz@gmail.com",
    67
);

SELECT * FROM usuarios;

--personalizando pesquisa
SELECT * FROM usuarios WHERE idade =26;

-- utilizando o delete
DELETE FROM usuarios --DELETA TUDO SE NAO USAR O WHERE

DELETE FROM usuarios WHERE nome = "alice";

--utilizando update

--dessa maneira todos os nomes da tabela ususario teram atualização
UPDATE usuarios SET nome = "nome de teste";

--sempre use update com where
UPDATE usuarios SET nome = "nome de teste" WHERE nome="luiz";