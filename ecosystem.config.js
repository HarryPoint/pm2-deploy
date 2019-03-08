let HOST = '0.0.0.0'
let PORT = 8000
let deploy = {
  ref: 'origin/master',
  repo: 'git@git.vm.snqu.com:snto-f2e/pm2-deploy.git',
  path: '/var/www/node-server/pm2-deploy'
}
module.exports = {
  apps: [
    {
      name: 'pm2-deploy',
      instances: 'max',
      script: 'server/index.js',
      // 正式服
      env_production: {
        NODE_ENV: 'production',
        HOST,
        PORT
      },
      // 测试服
      env_test: {
        NODE_ENV: 'production',
        HOST,
        PORT
      }
    }
  ],

  deploy: {
    production: {
      ...deploy,
      user: 'staff',
      host: '132.232.71.55',
      'post-deploy':
        'yarn install && pm2 reload ecosystem.config.js --env production'
    },
    test: {
      ...deploy,
      user: 'root',
      host: '119.27.167.20',
      'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env test'
    }
  }
}
