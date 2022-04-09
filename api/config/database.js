module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
    ssl: {
      rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
    },
  },
});
