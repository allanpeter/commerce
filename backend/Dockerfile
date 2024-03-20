# Use a Node.js base image suitable for WSL
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ /app

COPY ./.env.production /app/.env

# Expose port (if needed, based on your NestJS configuration)
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "run", "start:dev"]
