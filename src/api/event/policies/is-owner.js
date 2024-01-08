"use strict";
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  const { id } = policyContext.request.params;

  if (!user) {
    throw new PolicyError("No authorization header found");
  } else {
    const data = await strapi.entityService.findMany("api::event.event", {
      filters: {
        user: user,
        id: id,
      },
    });

    if (!data.length) {
      throw new PolicyError("You can't update this entry");
    } else {
      return true;
    }
  }
};
