const account_patient = require('../models/AccountPatient');
const { mutileMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class PatientController {
    //[GET] accountPatient/login

    login(req, res) {
            res.render('accountPatient/login');

        }
        // login(req, res) {
        //     res.render('accountPatient/login');
        //     // Cookies that have not been signed
        //     console.log('Cookies: ', req.cookies);

    //     // Cookies that have been signed
    //     console.log('Signed Cookies: ', req.signedCookies);
    //     // const account = new account_patient(req.signedCookies.body)
    //     // account.save();

    // };
    // signin(req, res, next) {
    //     const account = new account_patient(req.signedCookies.body)
    //     account.save();
    // }

    // //[Get] accountPatient/sginin
    // sginin(req, res) {

    //         res.render('accountPatient/sginin');
    //     }
    //     //[POST] accountPatient/DANKy
    // danki(req, res, next) {
    //     const account = new account_patient(req.body);
    //     account.save();

    //     res.send('được rồi đó');
    // }
}

module.exports = new PatientController();