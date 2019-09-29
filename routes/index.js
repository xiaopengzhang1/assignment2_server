var express = require('express');
var router = express.Router();
var channel = require('../db/ChannelModel');
var group = require('../db/GroupModel');
var record = require('../db/RecordModel');
/* GET home page. */
// 获取所有的channel
router.get('/channel', function (req, res, next) {
    channel.get({}, function (r) {
        res.json(r)
    })
});
// 获取所有的group
router.get('/group', function (req, res, next) {
    group.get({}, function (r) {
        res.json(r)
    })
});
// 获取某个group下所有的channel
router.get('/group/:group_id', function (req, res, next) {
    let where = {group_id: req.params.group_id};
    channel.get(where, function (r) {
        res.json(r)
    })
});
// 获取某个channel下所有的消息记录
router.get('/channel/:channel_id', function (req, res, next) {

    let where = {channelID: req.params.channel_id};
    record.get(where, function (r) {
        res.json(r)
    })
});
module.exports = router;
