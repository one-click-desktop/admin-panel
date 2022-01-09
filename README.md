# OneClickDesktop Admin

Simple administration panel for OneClickDesktop system. Enables administrator to view current state of resources in the system.

## Requirements

- [Node.js](https://nodejs.org/en/)

## Deployment

To build use `npm run build` which will compile application and place build in `dist` folder.

Production configuration is set at launch using [`assets/env.js`](src/assets/env.js). To fill it with desired values use [`assets/env.template.js`](src/assets/env.template.js). It provides placeholders for variables that can be fill from environmental variables using `envsubst`:
```SHELL
export API_URL="https://localhost:5000"
envsubst < dist/assets/env.template.js > dist/assets/env.js
```

To serve simply use HTTP server like [nginx](https://nginx.org/).

## Run inside container

You can also use prepared Dockerfile to create container and run app in docker.

If you want to enable HTTPS you need to generate valid certificate and key. After that modify [`nginx.conf`](/nginx.conf) and set correct paths to your certs (inside container). At this point you can also add custom options. Files `nginx.*` are provided as example.

To run app in docker:

1. Run `build.sh` to create container.
2. Run `docker run one-click-desktop/admin-panel`. You may want to add some or all of parameters specified below.

### Important parameters:

- Set port forwarding (443 will only work if HTTPS is configured correctly).
    ```BASH
    -p 80:80 [-p 443:443]
    ```
- Set `API_URL` environmental variable to set API path.
    ```BASH
    --env API_URL={PATH}
    ```
- Pass files required for HTTPS as volumes. Absolute path is required. `PATH_TO_CERT_IN_CONTAINER` must match path specified in nginx configuration file.
    ```BASH
    -v {PATH_TO_CERT}:{PATH_TO_CERT_IN_CONTAINER}
    -v {PATH_TO_KEY}:{PATH_TO_KEY_IN_CONTAINER}
    -v {PATH_TO_CONF}:/etc/nginx/conf.d/default.conf
    ```

Example command with all parameters using example certificate and config:

```DOCKER
docker run --name admin-panel -d -p 80:80 -p 443:443 -v $PWD/nginx.crt:/etc/ssl/nginx.crt -v $PWD/nginx.key:/etc/ssl/nginx.key -v $PWD/nginx.conf:/etc/nginx/conf.d/default.conf --env API_URL="http://localhost:5000" one-click-desktop/admin-panel
```
