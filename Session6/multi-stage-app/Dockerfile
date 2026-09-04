# Stage 1: Build
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

COPY src/Main.java .

RUN javac Main.java


# Stage 2: Run
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/Main.class .

EXPOSE 8080

CMD ["java", "Main"]