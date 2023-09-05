module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "popoy.pem",
      user: "ubuntu",
      host: "54.144.131.76",
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
