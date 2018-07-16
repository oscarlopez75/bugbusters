const express = require('express');
const router = express.Router();
const axios = require('axios');
const readFilters = require('../modules/readFilters');
const requestJira = require('../modules/requestJira');
// const PostAPI = 'https://jsonplaceholder.typicode.com';
// const JiraAuthAPI = 'https://jira.realtimegaming.com/rest/auth/1/session'
// const JiraGetResults = 'https://jira.realtimegaming.com/rest/api/2/search'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

router.get('/', (req, res) => {
  res.send('It works');
});



router.post('/getFiltersProduct', (req, res) => {
  var filterName = '';
  var filterNumber = '';

  readFilters.getFilters('product.txt')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })


});

router.post('/getFiltersPriority', (req, res) => {
  var filterName = '';
  var filterNumber = '';

  readFilters.getFilters('priority.txt')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })


});

router.post('/getFiltersFilter', (req, res) => {
  var filterName = '';
  var filterNumber = '';

  readFilters.getFilters('filters.txt')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })


});


router.post('/getTotal', (req, res) => {
  filterNumber = req.body.filternumber;
  filterName = req.body.filtername;
    requestJira.getJiraResults(filterNumber, filterName)
      .then((result) => {        
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      })
});

module.exports = router;
