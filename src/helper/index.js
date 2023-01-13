const SneaksAPI = require('sneaks-api');
const Sneaker = require('../models/sneakers');
const sneaks = new SneaksAPI();
const _ = require('lodash')

const getSneakersData = () => {
    sneaks.getMostPopular(100, (err, products) => {
        if (err)
            console.log("err")
        else {
            const newArray = products.map(product => {
                let {
                    shoeName, brand, styleID, silhoutte, make,
                    colorway, retailPrice, thumbnail, releaseDate,
                    description, imageLinks, urlKey, resellLinks,
                    goatProductId, resellPrices
                } = product
                return {
                    a: 'c',
                    shoeName,
                    styleID,
                    brand,
                    silhoutte,
                    make,
                    colorway, retailPrice, thumbnail, releaseDate,
                    description, imageLinks, urlKey, resellLinks,
                    goatProductId, resellPrices
                };
            });
            Sneaker.insertMany(newArray, (err, resp) => {
                if (err)
                    throw err
                else
                    console.log(resp)
            })
        }
    })
}
module.exports = {
    getSneakersData
}