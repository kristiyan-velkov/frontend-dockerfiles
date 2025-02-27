# =========================================
# Stage 1: Build the Angular Application
# =========================================
ARG NODE_VERSION=22.14.0-alpine
ARG NGINX_VERSION=alpine3.21

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

# Build the Angular application
RUN npm run build

# =========================================
# Stage 2: Prepare Nginx to Serve Static Files
# =========================================

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

# Use a built-in non-root user for security best practices
USER nginx

# Copy custom Nginx config
COPY --link nginx.conf /etc/nginx/nginx.conf

# Application name
ARG APP_NAME=my-angular-app

# Copy the static build output from the build stage to Nginx's default HTML serving directory
COPY --link --from=builder /app/dist/${APP_NAME}/browser /usr/share/nginx/html

# Expose port 80 to allow HTTP traffic
EXPOSE 80

# Start Nginx directly with custom config
ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]

