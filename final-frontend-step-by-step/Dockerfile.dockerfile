FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose port and run Next.js
EXPOSE 3000
CMD ["npm", "run", "dev"]
