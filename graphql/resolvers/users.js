
const User = require('../../models/user');

module.exports = {
    users: async () => {
        try {
            const users = await User.find().populate('tenants')
            return users.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                    // tenants: {
                    //     ...user._doc.tenants._doc,
                    //     _id: user._doc.tenants.id
                    // }
                    // tenants: tenant.bind(this, user._doc.tenants)
                }
            });
        } catch (err) {
            throw err;
        }
    },
    createUsers: async (args) => {
        const user = new User({
            name: args.userInput.name,
            email: args.userInput.email,
            role: args.userInput.role,
            phoneNumber: args.userInput.phoneNumber
        });

        let createUser;
        try {
            const result = await user.save();
            return { ...result._doc }
        } catch (err) {
            throw err;
        }
    }
}