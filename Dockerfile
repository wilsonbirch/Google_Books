# syntax = docker/dockerfile:1
ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-slim AS base

WORKDIR /app
ENV NODE_ENV="production"

# Build stage for React app
FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

# Install and build client - use npm install instead of npm ci
COPY client/package*.json ./client/
RUN cd client && npm install --only=production

COPY client/ ./client/
RUN cd client && npm run build

# Production stage
FROM base
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

COPY . .
COPY --from=build /app/client/build ./client/build

EXPOSE 3001
CMD ["npm", "start"]
