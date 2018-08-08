const passport = require('passport'); // มันสำคัญที่สุดนะ เลยต้องอยู่ข้างบน/

const architectures = require(`./models/architecture`)
const random = require(`./models/random`)
module.exports = function(app) {

    app.get('/', function(req, res){
        res.send({message: 'art lampangluang api'})
        req.getConnection((err, connection)=>{
            connection.query('USE mysql', function(err) {
                //if (err) throw err;
                console.log(err);
                res.send('Query Successful');   
              });
        })
    })
    app.get(`/knowledge`, random.find)
    app.get(`/architecture`, architectures.findById);
    
}
