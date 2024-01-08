"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest("No authorization header found");
    }

    const data = await strapi.entityService.findMany("api::event.event", {
      filters: {
        user: user,
      },
    });

    if (!data) {
      return ctx.notFound();
    }

    const sanitizedEntries = await this.sanitizeOutput(data, ctx);

    return this.transformResponse(sanitizedEntries);
  },
}));
