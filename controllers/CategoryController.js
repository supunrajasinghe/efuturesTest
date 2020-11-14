const categorySchema = require('../models/productCategory');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

const getCategory = (req, res) => {

    categorySchema.find()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => res.status(400).json(err))
}

module.exports = {
    getCategory
};
