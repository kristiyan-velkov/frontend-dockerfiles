<div align="center">
  <img src="./public/next.svg" alt="Next.js Prod Dockerfile Logo" />
</div>

This repository contains the configuration for running a Next.js 15 application using Docker. It supports development, production, and static export modes with three different Dockerfiles and a docker-compose.yml file.

- 📖 [Next.js Deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying)
- 📖 [Docker docs](https://docs.docker.com/)

## More about me

- [Blogs on Medium](https://medium.com/@kristiyanvelkov)
- [LinkedIn](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

---

## Security

This Docker image has been thoroughly scanned for vulnerabilities to ensure a secure environment for your Next.js 15 application. The image has passed all vulnerability assessments using Docker's built-in security tools, including Docker Scout. Regular updates to the base image and dependencies are recommended to maintain a high level of security.

<div align="center">
  <img src="./public/docker-scout.png" alt="Docker Scout check" />
</div>

- **Article**: [Docker Scout in Action](https://levelup.gitconnected.com/docker-scout-in-action-63e7c812532a?sk=120903755538c5065585d458d5e1eaa8)

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine.
- [Task](https://taskfile.dev/installation/) installed to use the Task commands.

_or if you prefer Make_:

- [Make](<https://en.wikipedia.org/wiki/Make_(software)>) installed to use the Makefile commands.

---

## Usage

| Task              | Taskfile Command       | Makefile Command       | Description                          |
| ----------------- | ---------------------- | ---------------------- | ------------------------------------ |
| `help`            | `task`                 | `make`                 | Show available commands.             |
| `build`           | `task build`           | `make build`           | Build the Docker image.              |
| `run`             | `task run`             | `make run`             | Run the Docker container.            |
| `build-run`       | `task build-run`       | `make build-run`       | Build and run the Docker container.  |
| `stop`            | `task stop`            | `make stop`            | Stop the Docker container.           |
| `restart`         | `task restart`         | `make restart`         | Restart the Docker container.        |
| `logs`            | `task logs`            | `make logs`            | Show logs from the Docker container. |
| `clean`           | `task clean`           | `make clean`           | Remove Docker image and container.   |
| `clean-container` | `task clean-container` | `make clean-container` | Remove only the Docker container.    |
| `clean-image`     | `task clean-image`     | `make clean-image`     | Remove only the Docker image.        |

---

### Environment Variables

The following variables are defined in the `Taskfile` and `Makefile` and can be customized if needed:

| Variable         | Description                                                                           | Default Value           |
| ---------------- | ------------------------------------------------------------------------------------- | ----------------------- |
| `IMAGE_NAME`     | The name of the Docker image.                                                         | `next-js-app`           |
| `CONTAINER_NAME` | The name of the Docker container.                                                     | `next-js-app-container` |
| `HOST_PORT`      | The port on the host machine that the container will map to.                          | `3000`                  |
| `CONTAINER_PORT` | The port inside the Docker container where Nginx serves the application.              | `80`                    |
| `DOCKERFILE`     | The Dockerfile to use.                                                                | `Dockerfile.export`     |
| `NODE_VERSION`   | The version of Node.js used in the base image. Can be updated for easier migrations.  | `22.14.0-alpine`        |
| `NGINX_VERSION`  | The version of Nginx used in the export configuration. Can be customized or upgraded. | `1.27.4-alpine`         |

---

### Next.js Configuration

To configure the next.config.js file for different output options, use the following setup:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone", // Use the Dockerfile.standalone file with this option
  output: "export",
};

export default nextConfig;
```

- **Standalone Mode**: Uncomment the line output: "standalone" if you want to use Dockerfile.standalone.
- **Export Mode**: By default, this configuration uses output: "export", which enables static export of the Next.js app.

---

### How to Build and run the project under Docker

1. **Build the Docker Image**:

```bash
  make build
```

2.  **Run the Docker Container**:

```bash
  make run
```

3. **Build and Run with a Single Command**
   Alternatively, you can build and run in one step with:

```bash
 make build-run
```

---

## Deployment

This configuration is designed for deployment on environments where Docker is available. The Nginx server efficiently serves the static Next.js build, making it suitable for production use.

---

## Notes

- Ensure Docker is properly configured to allow external access to port `3000` on the host machine if necessary.
- Modify the Makefile variables as needed for custom image names, container names, and ports.

---

## Docker Compose with Watch Mode

This project supports watch mode for live reloading during development using Docker Compose. The docker-compose.yml file is configured to sync changes in your local project directory with the container and rebuild the service when key files change.

```bash
docker compose up --watch
```

**Watch Mode Configuration: The develop section in the docker-compose.yml file includes:**

- **Sync Changes**: Automatically syncs changes made in your local ./app directory with the /app directory inside the container. -**Rebuild Dependencies**: Automatically rebuilds the service when package.json changes, e.g., when you install a new package.
- **File Syncing**: Changes to source files will be reflected inside the container in real-time. However, the node_modules folder is excluded to improve performance.

---

### ☕ Support My Work

If you find my work helpful and would like to support me, consider donating via:

- [Revolut](https://revolut.me/kristiyanvelkov)
- [Buy Me a Coffee](https://www.buymeacoffee.com/kristiyanvelkov)
- [GitHub Sponsors](https://github.com/sponsors/kristiyan-velkov)

Your support helps me continue creating valuable content for the community. Thank you! 🚀

---

### 📬 Contact me

If you’d like to connect, feel free to reach out via:

- [LinkedIn](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)
- [Medium](https://medium.com/@kristiyanvelkov)
- [Discord](https://discord.gg/dcdYZfsd)

Looking forward to chatting with you! 🚀

---

### License

This project is licensed under the MIT License.
