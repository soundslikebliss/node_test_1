var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/heya', function(req, res){
	res.render('heya', {title: 'Heyaaaa, Heyaaaa'});
});
// GET all users
router.get('/userlist', function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist', {
			"userlist" : docs
		});
	});
});
// new user form page
router.get('/newuser', function(req,res){
	res.render('newuser', { title: 'Add New User'});
});

module.exports = router;
