const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  company: {
    type: String,
    required: true,
    minlength: 3
  }
}, {
  timestamps: true,
});
adminSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
adminSchema.methods.matchPasswords = async function(password){
  return await bcrypt.compare(password,this.password);
};
const admins = mongoose.model('admins', adminSchema);

module.exports = admins;