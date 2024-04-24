FROM debian:bullseye

RUN apt-get update && apt-get install -y \
	nginx \
	openssl

COPY tools/nginx.conf /etc/nginx/
COPY tools/default /etc/nginx/sites-available/

CMD [ "nginx", "-g", "daemon off;" ]
