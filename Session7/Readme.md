creating networks:

docker network create frontend-net
docker network create backend-net
docker network create database-net

output:
docker network ls
NETWORK ID     NAME                DRIVER    SCOPE
192.168.50.14         frontend-net       bridge    local
192.168.50.15         backend-net        bridge    local
192.168.50.16         database-net      bridge    local


created database:
docker run -d \
  --name database \
  --network database-net \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=testdb \
  mysql:8

created backend:
docker run -d \
  --name backend \
  --network backend-net \
  alpine sleep 3600

created frontend:
docker run -d \
  --name frontend \
  --network frontend-net \
  nginx


connecting frontend to backend:

docker network connect backend-net frontend

task 2:

running using hsot network:

docker run -d --name apache-host --network host httpd


Task 3:

running nginx:
docker run -d \
  --name nginx-bind \
  -p 8080:80 \
  -v "$(pwd):/usr/share/nginx/html" \
  nginx

