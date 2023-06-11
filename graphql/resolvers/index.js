

const usersResolver = require('./users');
const tenantsResolver = require('./tenants');

const rootResolver = {
  ...usersResolver,
  ...tenantsResolver
};

module.exports = rootResolver;
