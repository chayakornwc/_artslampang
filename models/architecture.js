const config = require('../config');

exports.findById = (req,res,next)=>{
    var course_id = parseInt(req.params.course_id);
    var exam_id = parseInt(req.params.exam_id);
    req.getConnection((err, connection)=>{
        if(err) return next(err);
        connection.query("SELECT * FROM course_exam WHERE course_id =? AND exam_id=? ",[course_id, exam_id], (err, results)=>{
            if(err) return next(err);
            res.send(results[0]);
        })
    })
}


    