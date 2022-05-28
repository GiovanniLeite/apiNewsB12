module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '193aca5ba68aa55fc55c7a9ad4c0c5f1'),
    },
  },
});
