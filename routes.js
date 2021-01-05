const express = require('express');
let router = express.Router();
let ctrl = require('./controller');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Home page route
router.get('/', ctrl.homepage);
router.post('/login', ctrl.login);
router.post('/insertcompany', ctrl.insertCompany);
router.get('/viewcompany', ctrl.viewcompany);
router.post('/:id', ctrl.updatecompany);
router.get('/delete/:id', ctrl.deletecompany);

router.post('/employee/insertemployee', ctrl.insertEmployee);
router.get('/employee/viewemployee', ctrl.viewEmployee);
router.post('/employee/:id', ctrl.updateEmployee);
router.get('/employee/delete/:id', ctrl.deleteEmployee);
router.post('/common/search', ctrl.searchAll);



module.exports = router;
