module.exports = {
  apps: [
    {
      name: 'pm2-deploy',
      instances: 'max',
      script: 'server/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: '119.27.167.20',
      ref: 'origin/master',
      repo: 'git@git.vm.snqu.com:snto-f2e/pm2-deploy.git',
      path: '/var/www/node-server/pm2-deploy',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
