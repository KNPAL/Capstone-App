

const usersResolver = require('./users');
const tenantsResolver = require('./tenants');
const authResolver = require('./auth');

const rootResolver = {
  ...usersResolver,
  ...tenantsResolver,
  ...authResolver
};

module.exports = rootResolver;
