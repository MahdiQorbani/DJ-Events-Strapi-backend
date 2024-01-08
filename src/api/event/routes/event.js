"use strict";

/**
 * event router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::event.event", {
  config: {
    update: {
      middlewares: ["api::event.is-owner"],
    },
    delete: {
      middlewares: ["api::event.is-owner"],
    },
  },
});
