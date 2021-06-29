const { Tag } = require('../models')

module.exports = {
    getAllTags() {
        return Tag.findAll()
    },
   
    getTags(offset = 0, limit = 10) { },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getTag(id) { 
        return Tag.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}