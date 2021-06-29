const { Article } = require('../models')

module.exports = {
    getAllArticles() {
        return Article.findAll()
    },
   
    getArticles(offset = 0, limit = 10) { },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getArticle(id) { 
        return Article.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}