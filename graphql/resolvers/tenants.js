const Tenant = require('../../models/tenant');

module.exports = {
    tenants: async () => {
        try {
            const tenants = await Tenant.find()
            return tenants.map(tenant => {
                return {
                    ...tenant._doc,
                    _id: tenant.id,
                }
            });
        } catch (err) {
            throw err;
        }
    },
    createTenant: async (args) => {
        const tenant = new Tenant({
            name: args.TenantInput.name,
            email: args.TenantInput.email,
            role: args.TenantInput.role,
            phoneNumber: args.TenantInput.phoneNumber
        });

        let createTenant;
        try {
            const result = await tenant.save();
            createTenant = { ...result._doc }
            return createTenant
        } catch (err) {
            throw err;
        }
    },
    removeTenant: async (args) => {
        try {
            const tenant = await Tenant.findById(args.tenantId)
            const removedTenant = tenant;
            await Tenant.deleteOne({ _id: args.tenantId })
            return removedTenant;
        } catch (err) {
            throw err;
        }
    },
    updateTenant: async (args) => {
        try {
            const tenant = await Tenant.findById(args.tenantId)
            if (!tenant) {
                console.log('not found')
            }

            tenant = await Tenant.findByIdAndUpdate(args.tenantId, {}, {
                new: true,
                runValidators: true
            })
            return tenant
        } catch (err) {
            throw err;
        }
    }
}