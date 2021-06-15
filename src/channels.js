module.exports = function (app) {
  if (typeof app.channel !== "function") {
    return;
  }

  app.on("connection", (connection) => {
    console.log("new connection", connection);
    app.channel("everybody").join(connection);
    app.io.emit("broadcast", "hi everybody, welcome a new connection!");
  });

  app.on("login", (payload, { connection }) => {
    console.log("login", connection);

    if (connection) {
      const { user } = connection;
      app.channel("authenticated").join(connection);
    }
  });

  // `everybody` receive `broadcast` event
  app.publish("broadcast", (data) => app.channel("everybody"));
  // `authenticated` receive all messages services events
  app.service("messages").publish((data) => app.channel("authenticated"));
};
