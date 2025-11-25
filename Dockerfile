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

# Install and build client
COPY client/package*.json ./client/
RUN cd client && npm ci

COPY client/ ./client/
RUN cd client && npm run build

# Production stage
FROM base
# Copy root package files (for Express server)
COPY package*.json ./
# Skip the "install" script that tries to install client deps
RUN npm ci --only=production --ignore-scripts

# Copy server code
COPY . .

# Copy built React app from build stage
COPY --from=build /app/client/build ./client/build

EXPOSE 3001
CMD ["npm", "start"]
