#! /bin/bash

docker build -t one-click-desktop/admin-panel .

# On running remember about:
# 1. Passing to port 80 for http
# 2. Passing to port 443 for https
# 3. Adding volume for nginx config file
# 4. Adding volume for ssl certificate
# 5. Adding volume for ssl key