const Product = require('./model');

const store = (req,res) => {
try {
    let {name, description, price} = req.body;
    Product
    .create({name, description, price})
    .then(result => res.send(result))
    .catch(error => res.send(error))
} catch (error) {
    console.log(error)
}
}

const index = (req,res) => {
    try {
        Product
        .find({})
        .then(result => res.send(result))
        .catch(error => res.send(error))
    } catch (error) {
        console.log(error);
    }
}

const update = (req,res) => {
    const {name, description, price} = req.body;
    const {id} = req.params;
try {
    Product.updateOne({_id: id},{$set: {name, description, price}})
          .then(result => res.send(result))
          .catch(error => res.send(error))
} catch (error) {
    console.log(error);
}
}

const destroy = (req, res) => {
    const { id } = req.params;
    try {
    Product.deleteOne({_id: id})
     .then(result => res.send(result))
     .catch(error => res.send(error))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    store,
    index,
    update,
    destroy
}