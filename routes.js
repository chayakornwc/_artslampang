const passport = require('passport'); // มันสำคัญที่สุดนะ เลยต้องอยู่ข้างบน/

const architectures = require(`./models/architecture`)
const random = require(`./models/random`)
// const myGraphQLSchema = require('./schema')

module.exports = function(app) {

    app.get('/', function(req, res){
        res.send({message: 'art lampangluang api'})
       
    })

    

    app.get(`/knowledge`, random.find)
    app.get(`/architecture`, architectures.findById);
    
}
