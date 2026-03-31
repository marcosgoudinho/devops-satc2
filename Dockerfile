# Multi-stage Dockerfile for building and serving a React app

# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Remove default nginx.conf and use a minimal one (optional)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
