import jsonServer from 'json-server';

// Returns an Express server
let server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Returns an Express router
let router = jsonServer.router('db.json');
server.use(router);

server.listen(4000);