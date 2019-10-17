const mongoose = require('./connection.js')

const IssueSchema = new mongoose.Schema({
    description: String,
    createdAt: Date,
    status: String,
    priority: String
})

const IssueCollection = mongoose.model('Issue', IssueSchema)

//getAll
const getAllIssues = () => {
  return IssueCollection.find({})
}

//getOne
const getIssue = (id) => {
  return IssueCollection.findById(id)
}

//create
const addNewIssue = (newIssue) => {
  return IssueCollection.create(newIssue)
}

//update
const updateIssue = (id, newIssue) => {
  return IssueCollection.updateOne({_id: id}, newIssue)
}

//delete
const deleteIssue = (id) => {
  return IssueCollection.deleteOne({_id: id})
}


module.exports = {
    getAllIssues,
    getIssue,
    addNewIssue,
    updateIssue,
    deleteIssue
}
