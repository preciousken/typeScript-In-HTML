# STEPS FOR WRITING TYPESCRIPT INSIDE OF HTML FILE

## Description

This is a way of writing TypeScript inside of HTML File and the steps for create a file like this is as follows:

- make sure nodejs is installed on your computer
- npm init -y
- npm install snowpack
- npx snowpack init
- npm install @snowpack/plugin-typescript
- npm install typescript
- npx tsc --init


## changes to make to your packages.json

The scripts should be as follow:

- "start":"snowpack dev",
- "build":"snowpack build"

## To run the App, run the command on the CLI

- npm run start