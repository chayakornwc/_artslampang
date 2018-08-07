const passport = require('passport'); // มันสำคัญที่สุดนะ เลยต้องอยู่ข้างบน/



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
    app.get(`architecture`)
    
}
