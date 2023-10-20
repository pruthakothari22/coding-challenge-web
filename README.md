# Medibank Coding Challenge

## Overview

A web service has been setup at the following URL:

- https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json

## Requirements

You need to:

- Write some code to consume the json hosted on the above web service.
- Output a list of all the cats in alphabetical order under a heading of the gender of their owner.
- Output must be presentable on a web browser.
- Submissions will only be accepted via GitHub or Bitbucket.

Please note:

- It can be written in any language you like.
- Use any libraries/frameworks/SDKs you choose.
- Use industry best practices.
- Use the code to showcase your skill and what you value in a software application.

## Example

```
Male

Angel
Molly
Tigger


Female

Gizmo
Jasper
Notes

```

## Development Server

To run the development server, follow these steps:

1. Navigate to the root directory of the project in your terminal.

2. Run the following command to install all the required packages using Yarn:

   ```bash
   yarn
   ```

3. Start the development server with the following command:

   ```bash
   yarn start
   ```

This will launch the development server, and your application will open in your default web browser on `localhost:3000`.

## Running Tests

To run tests for the application, use the following command:

```bash
yarn test
```

## Setting Up the API Endpoint

1. **Create an `.env` File**: If you don't already have one, create a new file in your project's root directory and name it `.env`. This file will be used to store your environment variables.

2. **Define the API Endpoint**: Open the `.env` file in a text editor of your choice and add the following line, replacing `your-api-url-here.com` with the actual API endpoint:

   ```plaintext
   REACT_APP_API_URL=https://your-api-url-here.com
   ```

3. **Save the .env File**: Save the changes to the .env file.

4. **Restart Your Development Server**: To apply the new environment variable, you may need to restart your development server if it's already running. Stop the server and then restart it.
