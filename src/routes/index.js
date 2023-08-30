const newRouter = require("./news")
function route(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/news", newRouter)
}

module.exports = route;
