const hooks = require("./uploads.hooks");
const blobService = require("feathers-blob");
const fsbStore = require("fs-blob-store");
const multer = require("multer");
const multipartMiddleware = multer();
const blobStorage = fsbStore("./public/uploads");

module.exports = (app) => {
  app.use(
    "/uploads",
    multipartMiddleware.single("file"), //get file content from field:file
    (req, res, next) => {
      if (!req.body.name) throw Error("需要额外提供name字段作为文件存储路径");
      req.feathers.file = req.file;
      next();
    },
    blobService({
      Model: blobStorage,
      returnUri: false,
    })
  );
  const service = app.service("uploads");
  service.hooks(hooks);
};
