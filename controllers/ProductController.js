const productSchema = require('../models/product');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

const addProduct = (req, res) => {

    const product = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: ObjectId(req.body.category),
    }

    productSchema.create(product)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => res.status(400).json(err))
}

const getProducts = (req, res) => {

    let findQuery = null;
    let price =(req.query.price && req.query.price > 0) ? Number(req.query.price) : 0;

    if ((req.query.category && (req.query.category.length > 0)) && (req.query.name && (req.query.name.length > 0))) {
        findQuery = { name: { $regex: req.query.name} , category: ObjectId(req.query.category) , price: { $gte: price}, status: 'A'}
    } else if ((req.query.category && (req.query.category.length > 0))) {
        findQuery = { category: ObjectId(req.query.category) , price: { $gte: price},  status: 'A'}
    } else if ((req.query.name && (req.query.name.length > 0))) {
        findQuery = { name: { $regex: req.query.name} , price: { $gte: price}, status: 'A'}
    } else {
        findQuery = {price: { $gte: price}, status: 'A' }
    }

    productSchema.find(findQuery)
        .populate('category')
        .exec()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => res.status(400).json(err))
}

const deleteProduct = (req, res) => {

    let id = req.params.id;

    productSchema.findOneAndUpdate({_id: ObjectId(id)}, {status: 'D'})
        .then((result) => {
            res.status(200).json('deleted successfully')
        })
        .catch((err) => res.status(400).json(err))
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct
};
