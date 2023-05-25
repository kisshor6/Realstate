const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../DB/_DB');

const checkuser = require('../middleware/checkuser');

router.post("/register", (req, res) => {
    let success = false;

    const fname = req.body.fname.trim();
    const lname = req.body.lname.trim();
    const email = req.body.email.trim();
    const address = req.body.address.trim();
    const password = req.body.password.trim();
    const cpassword = req.body.cpassword.trim();

    if (fname && lname && email && address && password && cpassword) {
        connection.query('SELECT * FROM users WHERE email=?', email, async (error, results, fields) => {
            if (error) throw error;
            if (!results.length == 1) {

                if (password === cpassword) {

                    const salt = await bcrypt.genSalt(10);
                    const hash_password = await bcrypt.hash(password, salt);

                    const data = [fname, lname, email, address, hash_password];

                    connection.query('INSERT INTO users SET fname=?, lname=?, email=?, address=?, cpassword=?', data, (error, result, fields) => {
                        if (error) throw error;
                        if (result) {
                            const user_id = result.insertId;

                            jwt.sign(email, "JWT_SECRETE_KEY", (error, token) => {
                                if (error) throw error;
                                success = true;
                                res.json({ user_id, success, token });
                                console.log('registered');
                            });
                        }
                    })
                } else {
                    res.send(`sorry ! password didn't matched`);
                }
            } else {
                res.send(`sorry ! this email is already Taken`);
            }
        })
    } else {
        res.send('please Input all the fields');
    }
})

router.post("/login", (req, res) => {
    let success = false;
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    if (username && password) {
        connection.query('SELECT * FROM users WHERE email=? ', username, (error, results, fields) => {
            if (error) throw error;
            if (results.length == 1) {

                for (let count = 0; count < results.length; count++) {
                    const cpasswordToCheck = results[count].cpassword;

                    bcrypt.compare(password, cpasswordToCheck, (error, result) => {
                        if (error) throw error;
                        if (result) {
                            const email = results[count].email;
                            const user_id = results[count].sno;

                            jwt.sign(email, "JWT_SECRETE_KEY", (error, token) => {
                                if (error) throw error;
                                success = true;
                                res.json({ user_id, success, token });
                                console.log('logined');
                            })
                            // res.send(`logined successful ${results[count].fname}`);
                        } else {
                            res.send(`Incorrect Username and/or Password!`);
                        }
                    });
                }
            } else {
                res.send(`Incorrect Username and/or Password!`);
            }
        })
    } else {
        res.send(`please Input both email and password`);
    }

})

router.get("/data/:id", checkuser, (req, res) => {
    let success = false;
    connection.query(`SELECT fname, lname, email, address, time FROM users WHERE sno=${req.params.id}`, (error, results) => {
        if (error) throw error;
        success = true;
        res.send({ success, results });
    })
})

module.exports = router