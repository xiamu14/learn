module.exports = {
  port: process.NODE_ENV || 9000,
  redis: {
    host: '172.17.0.1',
    port: 6379,
    opts: { auth_pass: '' }
  }
}
