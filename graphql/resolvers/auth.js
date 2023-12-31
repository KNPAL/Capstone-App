const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

module.exports = {
    login: async ({ email, password }) => {
        const user = await User.findOne({ email: email })
        if (!user) {
            throw new Error('user does not exist')
        }

        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!')
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, 'capstonProjectSpalkey', {
            expiresIn: '1h'
        });

        return { userId: user.id, token: token, tokenExpiration: 1 }

    }
}