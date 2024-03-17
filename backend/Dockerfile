# Use a imagem Node.js como base
FROM node:14-alpine

# Criação do diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Expor a porta 3000 (ou a porta que você configurou no NestJS)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]
