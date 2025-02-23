# Welcome to Angular Production Docker file!

This repository contains the configuration for running a Angular application using Docker for Production.

- 📖 [Angular Deployment docs](https://angular.dev/tools/cli/deployment)
- 📖 [Docker docs](https://docs.docker.com/)

**Author**: [Krisityan Velkov](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

---

## Security

This Docker image has been thoroughly scanned for vulnerabilities to ensure a secure environment for your Angular application. The image has passed all vulnerability assessments using Docker's built-in security tools, including Docker Scout. Regular updates to the base image and dependencies are recommended to maintain a high level of security.

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

| Variable         | Description                                                                          | Default Value           |
| ---------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| `IMAGE_NAME`     | The name of the Docker image.                                                        | `angular-app`           |
| `CONTAINER_NAME` | The name of the Docker container.                                                    | `angular-app-container` |
| `HOST_PORT`      | The port on the host machine that the container will map to.                         | `4200`                  |
| `CONTAINER_PORT` | The port inside the Docker container where Nginx serves the application.             | `80`                    |
| `DOCKERFILE`     | The Dockerfile to use. Avaliable `DOCKERFILE` and `Dockerfile.server`                | `Dockerfile`            |
| `NODE_VERSION`   | The version of Node.js used in the base image. Can be updated for easier migrations. | `22.14.0-alpine`        |
| `NGINX_VERSION`  | The version of Nginx used in the export configuration.                               | `1.27.4-alpine`         |

---

### Build and Run with Docker Manually

If you prefer to build and run the container manually, use the following commands:

```sh
docker build -t angular-app .
docker run -d --name angular-app-container -p 42000:80 angular-app
```

---

## Stopping and Removing Containers

To stop and remove the running container, use:

```sh
docker stop  angular-app-container && docker rm angular-app-container
```

## Logs and Debugging

To check container logs:

```sh
docker logs -f angular-app-container
```

To access the running container shell:

```sh
docker exec -it angular-app-container sh
```

## Customizing the Build

To change the Node.js version, update the `NODE_VERSION` variable in the Dockerfile.

To use a different Nginx version, modify the `NGINX_VERSION` variable in the Dockerfile or `.env` file.

---

### 📌 Contribution

Contributions are always welcome, whether it's reporting issues, improving documentation, fixing bugs, or adding new features. This project is for everyone! 💙
And yes, it's open-source! 🎉

---

### 📬 Contact

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/kristiyan-velkov-763130b3/) or [Medium](https://medium.com/@kristiyanvelkov).

---

### ☕ Support My Work

If you find my work helpful and would like to support me, consider donating via:

- [Revolut](https://revolut.me/kristiyanvelkov)
- [Buy Me a Coffee](https://www.buymeacoffee.com/kristiyanvelkov)
- [GitHub Sponsors](https://github.com/sponsors/kristiyan-velkov)

Your support helps me continue creating valuable content for the community. Thank you! 🚀

---

### License

This project is licensed under the MIT License.
