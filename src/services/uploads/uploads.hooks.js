const dauria = require("dauria");
const md5 = require("md5");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      (ctx) => {
        if (!ctx.data.uri && ctx.params.file) {
          const file = ctx.params.file;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          const original = file.originalname.split(".");
          ctx.data = {
            uri: uri,
            id: `${ctx.data.name}/${original[0]}-${md5(file.buffer)}.${
              original[1]
            }`,
          };
        }
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
