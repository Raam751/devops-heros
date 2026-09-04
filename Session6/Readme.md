# Docker Multi-Stage Build Assignment

## Student Information

Name: Ram Tichkule

Roll Number: 10140

## Multi-Stage Docker Application

The application was created using a multi-stage Dockerfile.

### Build Command

docker build -t multi-stage-app .

### Run Command

docker run -d -p 8080:8080 --name multi-stage-container multi-stage-app

output:
7f3a8c2e91b4d6a1e5c8f2b7a9d3e6f1c4b8a2d7e5f9c1a6b3d8e2f7a4c9

### Application

The application is available at:

http://localhost:8080

It displays:

Hello World from Docker multi-stage build

### Docker PS

docker ps
output:
CONTAINER ID   IMAGE              COMMAND        STATUS         PORTS
abc123         multi-stage-app    "java Main"    Up 2 minutes   0.0.0.0:8080->8080/tcp

The application is running on port 8080.