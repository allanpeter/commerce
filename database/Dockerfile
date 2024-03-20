# Use a imagem oficial do MariaDB como base
FROM mariadb:latest

# Defina a variável de ambiente MYSQL_ROOT_PASSWORD
ENV MYSQL_ROOT_PASSWORD='123456'

# Defina a variável de ambiente MYSQL_DATABASE se desejar criar um banco de dados padrão
ENV MYSQL_DATABASE=commerce

COPY ./commerce.sql /docker-entrypoint-initdb.d/
