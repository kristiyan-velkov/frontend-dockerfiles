# ============================================
# Base Stage: Use a Lightweight Node.js Image
# ============================================

# Use an official Node.js Alpine image (customizable via ARG)
ARG NODE_VERSION=22.14.0-alpine
FROM node:${NODE_VERSION} AS base

# Set the working directory inside the container
WORKDIR /app

# Copy only package-related files first to leverage Docker caching
COPY package.json package-lock.json ./

# Set build-time environment variables
ENV NODE_ENV=production


# Install dependencies using npm ci (ensures a clean, reproducible install)
RUN npm ci --omit=dev && npm cache clean --force

# ============================================
# Stage 2: Build the Next.js Application
# ============================================

# Use the base image to build the application
FROM base AS builder

# Copy the entire application source code into the container
COPY . .

# Build the application in standalone mode (outputs to `.next/standalone`)
RUN npm run build

# ============================================
# Stage 3: Create Production Image
# ============================================

# Use the same Node.js version for the final production container
FROM node:${NODE_VERSION} AS runner

# Use a built-in non-root user for security best practices
USER node


# Set the port for the Next.js standalone server (default is 3000)
ENV PORT=80

# Disable Next.js telemetry during runtime
ENV NEXT_TELEMETRY_DISABLE=1

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files from the builder stage to keep the image minimal
COPY --from=builder /app/.next/standalone ./      
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public              

# Expose port 80 to allow HTTP traffic
EXPOSE 80

# Start the application using the standalone server
ENTRYPOINT ["node", "server.js"]
