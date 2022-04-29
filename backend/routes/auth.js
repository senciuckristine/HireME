const router = require("express").Router();
const  Admin  = require("../models/admin.model");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const {login } = require("../controllers/auth");
router.route("/login").post(login);
/*router.post("/login", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const admin = await Admin.findOne({ username: req.body.username });
		if (!admin)
			return res.status(401).send({ message: "Invalid Username or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			admin.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		username: Joi.string().username().required().label("Username"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};
*/
router.get('/logout',(req,res)=>{
	res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('user logout');
});
module.exports = router;