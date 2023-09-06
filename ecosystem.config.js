module.exports = {
  apps: [
    {
      script: "yarn start",
    },
  ],

  deploy: {
    production: {
      key: "popoy.pem",
      user: "ubuntu",
      host: "100.26.171.254",
      ref: "origin/main",
      repo: "git@github.com:Coins-Plus/Popoy-Memes.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && yarn install && yarn run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "ForwardAgent=yes",
    },
  },
};
