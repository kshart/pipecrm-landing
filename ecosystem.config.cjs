module.exports = {
  apps: [
    {
      name: 'pipecrm.ru',
      port: '8000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
