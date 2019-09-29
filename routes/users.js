var express = require('express');
var router = express.Router();
var user = require('../db/UserModel');

router.post('/user/', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let avatar = req.body.avatar;
    user.get({username: username}, function (db_res) {
        if (db_res.length === 0)
            user.add({
                username,
                password,
                avatar
            }, function (id) {
                res.send({_id: id})
            });
        else
            res.json({'message': 'account has already exist!'})
    })

});


router.post('/auth/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    user.get({username, password}, function (db_res) {
        if (db_res.length === 0)
            res.json({'message': 'Error in account or password'});
        else
            res.json(db_res);
    })
});

module.exports = router;
