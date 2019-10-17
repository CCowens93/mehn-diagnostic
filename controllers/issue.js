const express = require('express')

const issueApi = require('../models/issue.js')

const issueRouter = express.Router()


issueRouter.get('/issue/new', (req, res) => {
  res.render('newIssueForm')
})

issueRouter.get('/issue/edit/:id', (req, res) => {
  issueApi.getIssue(req.params.id)
  .then((oneIssue) => {
    res.render('editIssueForm', oneIssue)
  })
})



//getAll
issueRouter.get('/issue', (req, res) => {
  issueApi.getAllIssues()
  .then((allIssues) => {
    res.render('allIssues', { allIssues })
  })
})
//getOne
issueRouter.get('/issue/:id', (req, res) => {
  issueApi.getIssue(req.params.id)
  .then((oneIssue) => {
    res.render('oneIssue', oneIssue)
  })
})
//update
issueRouter.put('/issue/:id', (req, res) => {
  issueApi.updateIssue(req.params.id, req.body)
  .then((updatedIssue) => {
    res.redirect(`/issue/${req.params.id}`)
  })
})
//create
issueRouter.post('/issue', (req, res) => {
  issueApi.addNewIssue(req.body)
  .then((createdIssue) => {
    res.redirect('/issue')
  })
})

//delete
issueRouter.delete('/issue/:id', (req, res) => {
  issueApi.deleteIssue(req.params.id)
  .then((deletedIssue) => {
    res.redirect('/issue')
  })
})



module.exports = {
  issueRouter
}
