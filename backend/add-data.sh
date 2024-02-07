#!/bin/bash


# Get the directory of the script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Define MySQL credentials
MYSQL_HOST="localhost"
MYSQL_PORT="3307"  # Change to your MySQL port
MYSQL_USER="nestjs"
MYSQL_PASSWORD="nestjs"
MYSQL_DATABASE="nestjs"

# Define paths to SQL scripts
ADD_DATA_SCRIPT="$DIR/init.sql"

# Check if the SQL script exists
if [ ! -f "$ADD_DATA_SCRIPT" ]; then
  echo "Error: $ADD_DATA_SCRIPT not found."
  exit 1
fi

# Run SQL script to create "nestjs" database if it doesn't exist
docker exec -i backend-mysql-db-1 mysql -h$MYSQL_HOST -P$MYSQL_PORT -u$MYSQL_USER -p$MYSQL_PASSWORD < $CREATE_DB_SCRIPT

# Run SQL script to add data to the database
docker exec -i backend-mysql-db-1 mysql -h$MYSQL_HOST -P$MYSQL_PORT -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE < $ADD_DATA_SCRIPT

echo "Data added successfully!"
