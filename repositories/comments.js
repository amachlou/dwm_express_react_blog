const { Comment } = require('../models')

module.exports = {
    getAllComments() {
        return Comment.findAll()
    },
   
    getComments(offset = 0, limit = 10) { },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getComment(id) { 
        return Comment.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}