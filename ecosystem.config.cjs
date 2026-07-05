// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "lbc-site",
      cwd: __dirname,
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: "3003",
        HOST: "0.0.0.0",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
