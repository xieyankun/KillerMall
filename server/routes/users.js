var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

// 链接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/KillerMall');

mongoose.connection.on('connected', function(){
    console.log('MongoDB connected success.....');
});

mongoose.connection.on('error', function(){
    console.log('MongoDB connected error.....');
});

mongoose.connection.on('disconnected', function(){
    console.log('MongoDB connected disconnected.....');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Hello users mongoose...');
    // res.send(res);
    User.find({}, function(err, doc){
        if(err){
            res.json({
                status: 1,
                msg: err.message
            })
        }else{
            res.json({
                status: 0,
                msg: '',
                result: doc
            })
        }
    })
});

module.exports = router;
