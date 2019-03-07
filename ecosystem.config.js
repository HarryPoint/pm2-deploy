module.exports = {
  apps: [
    {
      name: 'pm2-deploy',
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
      repo: 'git@github.com:HarryPoint/pm2-deploy.git',
      path: '/var/www/node-server/pm2-deploy',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
