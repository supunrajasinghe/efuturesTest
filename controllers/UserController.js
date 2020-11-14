const userSchema = require('../models/user');

const getUser = (req, res) => {
    userSchema.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => res.status(400).json(err))
}

module.exports = {
    getUser
};
