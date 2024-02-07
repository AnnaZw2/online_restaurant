FROM mysql:latest


ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=nestjs
ENV MYSQL_USER=nestjs
ENV MYSQL_PASSWORD=nestjs

# Copy SQL scripts to initialize the database schema
COPY ./init.sql /docker-entrypoint-initdb.d/


EXPOSE 3307
