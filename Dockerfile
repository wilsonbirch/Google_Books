# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed for node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

# Copy client package files
COPY client/package-lock.json client/package.json ./
RUN npm ci --include=dev

# Copy client application code
COPY client/ .

# Build application
RUN npm run build

# Final stage for app image
FROM base

# Install serve to run the built app
RUN npm install -g serve

# Copy built application
COPY --from=build /app/build /app/build

# Start the server
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
