var express = require('express');
var router = express.Router();
let messages = require('./index')
messages = messages.messages

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new');
});

router.post('/', function(req, res, next){
    let message = req.body
    message = {
      ...message,
      added: new Date()
    }
    messages.push(message)

    res.redirect('/')

  }
)

module.exports = router;
