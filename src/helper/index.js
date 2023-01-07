const SneaksAPI = require('sneaks-api');
const Sneaker = require('../models/sneakers');
const sneaks = new SneaksAPI();

const getSneakersData = () => {
    console.log("getting Sneakers")
    sneaks.getProducts("FY2903", 10, function (err, products) {
        if (err)
            console.log("some ERR")
        else
            Sneaker.insertMany([
                {
                    code: 'FY2903',
                    data: products
                }
            ], (err, resp) => {
                if (err)
                    throw err
                else
                console.log(resp)
            })
    })
}
module.exports = {
    getSneakersData
}