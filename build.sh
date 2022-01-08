#! /bin/bash

docker build -t one-click-desktop/admin-panel .

# On running remember about:
# 1. Passing to port 80 for http
# 2. Passing to port 443 for https
# 3. Adding volume for nginx config file (destination: /etc/nginx/conf.d/default.conf)
# 4. Adding volume for ssl certificate (destination: /etc/ssl/nginx.crt)
# 5. Adding volume for ssl key (destination: /etc/ssl/nginx.key)