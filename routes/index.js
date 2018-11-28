const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Index' });
});
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'contact' });
});
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'about' });
});
router.get('/work', function(req, res, next) {
	res.render('work', { title: 'work' });
});
router.get('/project_camito', function(req, res, next) {
	res.render('project_camito', { title: 'project_camito' });
});
router.get('/project_uxui', function(req, res, next) {
	res.render('project_uxui', { title: 'project_uxui' });
});
router.get('/project_odi', function(req, res, next) {
	res.render('project_odi', { title: 'project_odi' });
});
module.exports = router;
