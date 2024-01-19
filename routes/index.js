var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'gm!',
    user: 'Amando'
  },
  {
    text: 'gm World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = {
  router: router,
  messages: messages
};
