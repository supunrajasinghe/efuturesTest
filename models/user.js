const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');
const saltRounds = 10;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    login: {
        type: Boolean,
        default: false,
    }
});

userSchema.pre('save', async function (next) {
    const hash = await md5(this.password);
    this.password = hash;
    next();
});

userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const hashedPassword = await md5(password);
    if (hashedPassword === user.password) {
        return true;
    }
    return false;
};

module.exports = mongoose.model('user', userSchema);
