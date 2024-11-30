#!/bin/bash

# Wait for MongoDB to start
sleep 10

# Use environment variables from Docker Compose
MONGO_USER=${MONGO_INITDB_ROOT_USERNAME}
MONGO_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}

# Connect to MongoDB primary and initiate the replica set
mongo  <<EOF
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo-primary:27017" },
    { _id: 1, host: "mongo-replica1:27017" },
    { _id: 2, host: "mongo-replica2:27017" }
  ]
})
EOF
