module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4bbe5743c0b17455a61b799f389360b'),
  },
});
