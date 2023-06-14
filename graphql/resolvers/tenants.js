const Tenant = require('../../models/tenant');
const User = require('../../models/user');

module.exports = {
    tenants: async () => {
        try {
            const tenants = await Tenant.find().populate('user')
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
    tenantsByUser: async (args) => {
        try {
            const tenants = await Tenant.find({ user: args.userId }).populate('user')
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
    createTenants: async (args) => {
        const tenant = new Tenant({
            name: args.tenantInput.name,
            email: args.tenantInput.email,
            phoneNumber: args.tenantInput.phoneNumber,
            user: args.tenantInput.user,
            College: args.tenantInput.College,
            Course: args.tenantInput.Course,
            FatherName: args.tenantInput.FatherName,
            FatherPhoneNumber: args.tenantInput.FatherPhoneNumber,
            PermanentAddress: args.tenantInput.PermanentAddress,
            PersonalID: args.tenantInput.PersonalID,
            PersonalIDNumber: args.tenantInput.PersonalIDNumber,
            RentPaidTill: args.tenantInput.RentPaidTill,
            RoomNumber: args.tenantInput.RoomNumber,
            StayFrom: args.tenantInput.StayFrom
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
            if (!tenant) {
                console.log('not found')
            }
            const removedTenant = tenant;
            await Tenant.deleteOne({ _id: args.tenantId })
            await User.deleteOne({ email: args.email })
            return removedTenant;
        } catch (err) {
            throw err;
        }
    },
    updateTenant: async (args) => {
        try {
            const tenantUpdated = { ...args.tenantInput };
            delete tenantUpdated.tenantId
            const currentTenant = await Tenant.findOne({ _id: args.tenantInput.tenantId })
            if (!currentTenant) {
                console.log('not found')
            }

            const tenant = await Tenant.findByIdAndUpdate(args.tenantInput.tenantId, tenantUpdated, {
                new: true,
                runValidators: true
            })
            return tenant
        } catch (err) {
            throw err;
        }
    }
}