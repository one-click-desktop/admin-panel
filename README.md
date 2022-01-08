# OneClickDesktopAdmin

## Run inside container

Remember to set `API_URL` environmental variable to backend url and map ports.

```
docker run --name admin-panel -d -p 80:80 --env API_URL="http://localhost:5000" one-click-desktop/admin-panel
```
