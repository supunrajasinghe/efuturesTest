const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')

//routes
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

//schemas
const productCategorySchema = require('./models/productCategory');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        productCategorySchema.find()
            .exec()
            .then((result) => {
                if(result.length === 0) {
                    productCategorySchema.insertMany([
                            { name: 'category 1', description: 'description 1'}, 
                            { name: 'category 2', description: 'description 2'}, 
                            { name: 'category 3', description: 'description 3'} 
                        ])
                }
            })
        console.log('database connection successful')
    })
    .catch(err => console.log('Database connection error: ' + err));

const app = express();
app.use(cors());

const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/passport");

app.use('/api', authRoutes);
app.use('/api/user', passport.authenticate('jwt', { session: false }), userRoute);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);


app.listen(port, () => {
    console.log('server running on port ' + port);
});
