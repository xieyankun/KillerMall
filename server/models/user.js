var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList": Array,
    "cartList":[
        {
            "productId":String,
            "productName":String,
            "salePrice":String,
            "productImage":String,
            "checked":String,
            "productNum":String
        }
    ],
    "addressList":[
        {
            "addressId": String,
            "userName": String,
            "streetName": String,
            "postCode": Number,
            "tel": Number,
            "isDefault": Boolean
        }
    ]
});

module.exports = mongoose.model("User", productSchema)