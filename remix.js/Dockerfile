# =========================================
# Stage 1: Build the Remix.js Application
# =========================================
ARG NODE_VERSION=22.14.0-alpine

# Use a lightweight Node.js image for building (customizable via ARG)
FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY --link package.json package-lock.json ./

# Install project dependencies using npm ci (ensures a clean, reproducible install)
RUN npm ci

# Copy the rest of the application source code into the container
COPY --link . .

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
COPY --link --from=builder /app/build /app/build
COPY --link --from=builder /app/package-lock.json /app/package-lock.json
COPY --link --from=builder /app/package.json /app/package.json

# Install production-only dependencies
RUN npm ci --omit=dev

# Switch to the non-root user
USER node 

# Expose the application port (Remix typically runs on 3000)
EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
