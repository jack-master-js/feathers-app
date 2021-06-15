// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use("/users", (req, res, next) => {
    console.log("run middleware here.");
    next();
  });
};
