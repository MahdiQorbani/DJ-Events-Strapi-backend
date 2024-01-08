module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "custom-event.me",
    },
    // {
    //   method: "POST",
    //   path: "/events",
    //   handler: "custom-event.create",
    // },
  ],
};
