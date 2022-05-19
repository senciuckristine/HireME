const router = require("express").Router();

const bcrypt = require("bcrypt");
const Joi = require("joi");
const {login } = require("../controllers/auth");
router.route("/login").post(login);

router.get('/logout',(req,res)=>{
	res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('user logout');
});
module.exports = router;