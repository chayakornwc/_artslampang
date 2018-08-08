const config = require('../config');

exports.find = (req,res,next)=>{
    var course_id = parseInt(req.params.course_id);
    var exam_id = parseInt(req.params.exam_id);
    req.getConnection((err, connection)=>{
        if(err) return next(err);
        connection.query(`SELECT category.*, knowledge.*, maindetail.* FROM knowledge LEFT  JOIN category ON knowledge.id_cat = category.id 
                            LEFT JOIN maindetail ON knowledge.id_kn = maindetail.id_md ORDER BY RAND() LIMIT  5
                            
        `, (err, results)=>{
            if(err) throw(err);
        //    let arr = [];
        //    if(results){
        //        results.forEach(e => {
        //            let value = {}
        //            value = e;
        //            if(e.id.length ==1){
        //             if(e.id_kn==1){
        //                 value.url = `00${e.id}_00${e.kn}_`
        //             }
        //            }
        //        });
        //    }
            res.send(results);
        })
    })
}


    