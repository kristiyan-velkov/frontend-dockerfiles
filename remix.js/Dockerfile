# =========================================
# Stage 1: Build the Remix.js Application
# =========================================
ARG NODE_VERSION=22.14.0-alpine
ARG NGINX_VERSION=1.27.4-alpine

# Use a lightweight Node.js image for building (customizable via ARG)
FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json package-lock.json ./

# # Set environment variables for the build process
# ENV NODE_ENV=production

# Install project dependencies using npm ci (ensures a clean, reproducible install)
RUN npm ci

# Copy the rest of the application source code into the container
COPY . .

# Build the Remix.js application (outputs to /app/build)
RUN npm run build

# =========================================
# Stage 2: Run the Remix.js Server
# =========================================
FROM node:${NODE_VERSION} AS runner

# Set the working directory
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=3000

# Copy the built server and client assets from the builder stage
COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json

# Install production-only dependencies
RUN npm ci --omit=dev

# Expose the application port (Remix typically runs on 3000)
EXPOSE 3000

CMD ["npm", "run", "start"]

