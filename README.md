# OneClickDesktopAdmin

## Run inside container

Remember to set `API_URL` environmental variable to backend url and map ports. Also provide volumes for https cert.

Example command:

```
docker run --name admin-panel -d -p 80:80 -p 443:443 -v $PWD/nginx.crt:/etc/ssl/nginx.crt -v $PWD/nginx.key:/etc/ssl/nginx.key -v $PWD/nginx.conf:/etc/nginx/conf.d/default.conf --env API_URL="http://localhost:5000" one-click-desktop/admin-panel
```
