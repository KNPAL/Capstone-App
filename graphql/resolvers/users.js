
const bcrypt = require('bcryptjs');

const User = require('../../models/user');

module.exports = {
    users: async () => {
        try {
            const users = await User.find()
            return users.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                }
            });
        } catch (err) {
            throw err;
        }
    },
    createUsers: async (args) => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                name: args.userInput.name,
                email: args.userInput.email,
                role: args.userInput.role,
                phoneNumber: args.userInput.phoneNumber,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    }
}