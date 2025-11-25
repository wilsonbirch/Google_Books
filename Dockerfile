# syntax = docker/dockerfile:1
ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-slim AS base

WORKDIR /app
ENV NODE_ENV="production"

# ==========================================
# Build stage for React app
# ==========================================
FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

COPY client/package*.json ./client/

RUN cd client && npm install 

COPY client/ ./client/
RUN cd client && npm run build

# ==========================================
# Production stage (Server)
# ==========================================
FROM base

# 1. Install Server dependencies
COPY package*.json ./

RUN npm install --omit=dev --ignore-scripts

# 2. Copy server source code
COPY . .

# 3. Copy built React files from the previous stage
COPY --from=build /app/client/build ./client/build

EXPOSE 3001
CMD ["npm", "start"]
