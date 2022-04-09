module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f45ae37012afe4b2d0a4ceea5dbbb1e'),
  },
});
