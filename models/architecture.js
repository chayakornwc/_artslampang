const config = require('../config');

exports.findById = (req,res,next)=>{
    var course_id = parseInt(req.params.course_id);
    var exam_id = parseInt(req.params.exam_id);
    req.getConnection((err, connection)=>{
        if(err) return next(err);
        connection.query(`SELECT category.*, knowledge.*, maindetail.* FROM knowledge LEFT  JOIN category ON knowledge.id_cat = category.id 
                            LEFT JOIN maindetail ON knowledge.id_kn = maindetail.id_md WHERE knowledge.id_cat = 1 LIMIT  100
                            
        `, (err, results)=>{
            if(err) return next(err);
            res.send(results);
        })
    })
}


    