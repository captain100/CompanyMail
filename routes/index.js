var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('test', { title: 'Express' });

});

router.post('/sendmail', function (req, res) {
    console.log('---------------------');
    var inputEmailt = req.param('inputEmail');
    var inputName = req.param('inputName');
    var contectId = req.param('contect');
    console.log(inputEmailt);
    var smtpTransport = nodemailer.createTransport({
        host: "smtp.163.com", // 主机
        auth:{
            user: "weilexuejike@163.com",
            pass: "201035050"
        }

/*        host: "smtp.mxhichina.com", // 主机
        auth:{
            user: "hi@museera.com‍",
            pass: ""
            }*/

    });
    var mailOptions = {
        from: "weilexuejike@163.com",
        to: "hr@museera.com",
        subject: "联系公司",
        html: '联系人: '+inputName+'</br> email:'+inputEmailt+'</br>内容：'+contectId
    };
    smtpTransport.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Message sent :' + info.response);
//            res.render('index', { title: 'ok' });

//            res.send('ok');
        }
    });
});

module.exports = router;
