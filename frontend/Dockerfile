# Use a imagem Node.js como base
FROM node:18-alpine as build

# Criação do diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Compilar o aplicativo
RUN npm run build

# Usar a imagem Nginx como base para servir o aplicativo compilado
FROM nginx:alpine

# Copiar os arquivos compilados para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80 (a porta padrão do Nginx)
EXPOSE 80

# O comando CMD é fornecido automaticamente pelo Nginx
