# Sneakers Project

This project fetches data from an API and sends it to MongoDB. It's created on Node.js and hosted on an AWS EC2 instance at ec2-18-235-248-232.compute-1.amazonaws.com.

## Accessing the Instance

In order to access the instance, you'll need to download the sneakers.pem file and run the following commands:

`chmod 400 sneakers.pem`
`ssh -i "sneakers.pem" ec2-user@ec2-3-145-175-193.us-east-2.compute.amazonaws.com`

`cd ginoaz`

## Git Repository

The project is connected to a git repository at https://github.com/brianmak3/ginoaz. CI/CD is configured so that changes made to the git repository are automatically pushed to the server.

## Accessing MongoDB Atlas

The server is connected to a MongoDB Atlas instance that can be accessed at mongodb+srv://username:password@cluster0.g6trpsk.mongodb.net/sneakers?retryWrites=true&w=majority?. You'll need to create a user with read and write roles in order to access the database.

You can also access the database through VS Code.
