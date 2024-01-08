const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFuction);
routes.get("/ttech", myController.newFunction);
module.exports = routes;
