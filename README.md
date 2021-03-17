# GuestBook App

this is a Online Books Application to put in practice your basic Node knowledge

# ScreenShoot

![Express Books](docs/screenshot.png)

# Installation

```shell
git clone https://github.com/FaztTech/books-express
npm install
npm run build
npm start
```

# Environment Variables

- `PORT`, this is the http port of the server. by default is `5000`.

Also you can create a .env file with the environment variables mentioned above.

# Docker

```shell
docker build -t express-books .
```

```shell
docker run -p 80:5000 express-books .
```

then visit: `http://localhost`

# Video Tutorial

- [Youtube (Spanish)](https://youtu.be/IRqaH_jhyT8)

# Considerations

- Make sure nodemon ignores the file `src/books.json`.

## Reference

- https://babeljs.io/docs/en/babel-plugin-transform-runtime
