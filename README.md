# Lotion-Plus-App
Lotion is like an EverNote react.js application. This lotion-plus version includes AWS backend infrastructure to store the info for every email!
In this project, I created a backend on AWS for the Lotion app (the simple project made before named `Lotion App`.
**NOTE: Terraform was used for creating resources on AWS.**

## Navigate to: [LOTION PLUS APP](https://qazi-and-muneeb-lotion-plus.netlify.app/)

NOTE: Used [Netlify](https://www.netlify.com/) to deploy the application

## Architecture Overview

<br/>
<p align="center">
  <img src="https://res.cloudinary.com/mkf/image/upload/v1678683690/ENSF-381/labs/lotion-backedn_djxhiv.svg" alt="lotion-architecture" width="800"/>
</p>
<br/>

## :foot: Steps

- Clone the repo
- Make sure you're inside the root directory of the repo and then run `npm install` to install all the necessary packages
- Run `npm start` and you should be able to see the page open up on your default browser
- Added infrastructure code in the `main.tf` file
- Added function code for the `get-notes-<your-ucid>` function in the [`functions/get-notes/main.py`](functions/get-notes/main.py) file
- Added function code for the `save-note-<your-ucid>` function in the [`functions/save-note/main.py`](functions/save-note/main.py) file
- Added function code for the `delete-note-<your-ucid>` function in the [`functions/delete-note/main.py`](functions/delete-note/main.py) file
- Created a new **PRIVATE** repo under my username and added it as a new remote to the project: `git remote add personal <github-address>`. I say **PRIVATE** to avoid showing my AWS Credentials in my repo (Information was stored locally in this project)

## :page_with_curl: Notes

- Used Google as the login method for the app, used the `@react-oauth/google` library. To use Google as a login method, I created a project on Google Cloud Platform first and used the `client_id` I generated in my app
- Created all the resources on AWS with Terraform. All the configurations are put in the [`main.tf`](infra/main.tf) file
- Used AWS DynamoDB for the database. Used the simple setup (Partition and Sort Key) for this
- Used [Lambda Function URLs](https://masoudkarimif.github.io/posts/aws-lambda-function-url/) for this project to connect the backend to the frontend
- Created 3 Lambda functions for this application:

  - `get-notes-<my-ucid>`: to retrieve all the notes for a user. The function reads the user email from the query parameter `email`, and receives `email` and `access_token` (this is the token I got from the Google login library) in the headers. Function URL only allows `GET` requests
  - `save-note-<my-ucid>`: to save/create/update a note for a user. The function reads the note to be saved/created/updated from the body of the request, and receives `email` and `access_token` in the headers. Function URL only allows `POST` requests
  - `delete-note-<my-ucid>`: to delete an existing note for a user. The function reads the user email from the query parameter `email`, and receives `email` and `access_token` in the headers. Function URL only allows `DELETE` requests

- Used the `email` and `access_token` I got in the headers of the requests to make sure the user is authenticated properly. If not, the functions should return the HTTP status code `401` for unauthenticated requests

## :couple: Grouped Project

- Used my own UCID to name the Lambdas, and the teammate's to name the DynamoDB table
