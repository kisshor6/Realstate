const jwt = require('jsonwebtoken');

const checkuser = (req, res, next) => {
    const Token = req.header('token');
    if (!Token) {
        res.send(`please input a valid token`)
    } else {
        try {
            const data = jwt.verify(Token, "JWT_SECRETE_KEY");
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send("Please input a valid Token");
        }
    }
}
module.exports = checkuser;