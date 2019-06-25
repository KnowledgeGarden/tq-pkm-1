# tq-pkm-1
Nest-Vue PKM

Simple, extensible Personal Knowledge Manager.
Based on the  https://github.com/yemiwebby/nest-vue-project.git repo and documented here:     https://www.digitalocean.com/community/tutorials/how-to-build-a-blog-with-nest-js-mongodb-and-vue-js
, it is a clone with mutations into the "pkm" namespace, and is based on a _journal_ which includes not just the original blog posts, but simple journal entries, and varieties of other node types.

It is a project in two sections, a backend (Nest.js), and a frontend (Vue.js)

From the original ReadMe.md:

## Backend
### Change directory into the backend
```bash
cd pkm-backend
```

### Install backend dependencies

```bash
npm install
```

### MongoDB
Ensure that you have mongoDB installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `pkm-backend` project directory run the application with:

```bash
npm run start:dev
```

This will start the backend application on port `8081`.

## Frontend
Open another terminal from the `tq-pkm-1` and navigate to the `pkm-frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd pkm-frontend
npm install
```

### Run the frontend app

```bash
npm run serve
```

### Test the application
Finally open your browser and view the application on http://localhost:8080

