const express = require('express');
const router = express.Router();
const connection = require('../DB/_DB');
const checkuser = require('../middleware/checkuser');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'E:/js practice/react II/demo2/backend/uploads')
    },
    filename: (req, file, cb) => {

        const savePath = file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        cb(null, savePath)

    }
});

const multFilter = (req, file, cb) => {
    if (file.mimetype.split('/')[1] === 'png') {
        cb(null, true)
    } else {
        cb(("This is not a png file"), false)
    }
}

const upload = multer({ storage: storage, fileFilter: multFilter }).single("picture");

router.post("/add", [upload, checkuser], (req, res) => {

    const p_picture = (req.file) ? req.file.filename : null;
    const id = req.body.user_id;
    const p_title = req.body.title;
    const p_desc = req.body.desc;
    const p_address = req.body.address;
    const p_map = req.body.map;

    const o_name = req.body.oname;
    const o_address = req.body.oadd;
    const o_email = req.body.oemail;
    const o_contact = req.body.ocon;

    const data = [id, p_title, p_desc, p_address, p_map, p_picture, o_name, o_address, o_email, o_contact];


    if (id && p_title && p_desc && p_address && p_map && p_picture && o_name && o_address && o_email && o_contact) {
        connection.query('INSERT INTO sell_property SET user_id=?, p_title=?, p_desc=?,p_address=?,P_map=?, p_picture=?, o_name=?,o_address=?, o_email=?,o_contact=?', data, (error, result, fields) => {
            if (error) throw error;
            if (result) {
                success = true;
                res.send(success);
            }
        })
    } else {
        res.send('please Input all the fields');
    }
})

router.get("/sellingdetails/:id", (req, res) => {
    let success = false;
    connection.query(`SELECT sno, p_title, p_desc, p_address, p_map, p_picture, o_name, o_address, o_email, o_contact, date FROM sell_property WHERE user_id=${req.params.id}`, (error, results) => {
        if (error) throw error;
        success = true;
        res.json({ success, results });
    })
})
router.get("/propertydetails/:id", (req, res) => {
    let success = false;
    connection.query(`SELECT p_title, p_desc, p_address, p_map, p_picture, o_name, o_address, o_email, o_contact, date FROM sell_property WHERE sno=${req.params.id}`, (error, results) => {
        if (error) throw error;
        success = true;
        res.json({ success, results });
    })
})

router.get("/totalproperty", (req, res) => {
    let success = false;
    connection.query(`SELECT * FROM sell_property `, (error, results) => {
        if (error) throw error;
        success = true;
        res.json({ success, results });
    })
})

router.delete("/propertyofUser/:id", (req, res) => {
    let success = false;
    connection.query(`DELETE FROM sell_property WHERE sno=${req.params.id}`, (error, results) => {
        if (error) throw error;
        success = true;
        res.json({ success, results });
    })
})

const update_upload = multer({ storage: storage, fileFilter: multFilter }).single("upicture");

router.put("/update/:id", [update_upload, checkuser], (req, res) => {

    const p_picture = (req.file) ? req.file.filename : null;
    const p_title = req.body.title;
    const p_desc = req.body.desc;
    const p_address = req.body.address;
    const p_map = req.body.map;

    const o_name = req.body.oname;
    const o_address = req.body.oadd;
    const o_email = req.body.oemail;
    const o_contact = req.body.ocon;

    const data = [p_title, p_desc, p_address, p_map, p_picture, o_name, o_address, o_email, o_contact];


    if (p_title && p_desc && p_address && p_map && p_picture && o_name && o_address && o_email && o_contact) {
        connection.query(`UPDATE sell_property SET  p_title=?, p_desc=?,p_address=?,P_map=?, p_picture=?, o_name=?,o_address=?, o_email=?,o_contact=? WHERE sno=${req.params.id}`, data, (error, result, fields) => {
            if (error) throw error;
            if (result) {
                success = true;
                res.send({ success, result });
            }
        })
    } else {
        res.send('please Input all the fields');
    }
})



module.exports = router