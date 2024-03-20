FROM node:14-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]
