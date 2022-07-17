module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  gatsby: {
    enabled: true,
    config: {
      sourcePlugin: '@relate-app/gatsby-source-strapi',
    },
  }
};
