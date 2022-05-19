/*const Survey = require("../models/survey.model");
const ErrorResponse = require("../utils/errorResponse");
exports.takeSurvey=async(req,res,next) => {
    const {id} = req.body;
    const[code,setCode]=useState("");
    const [ListOfCodes,setListOfCodes] =useState([]);
  
        console.log(id);
        const aux = ListOfCodes.filter(it => it.id.includes(id));
    
    if(!id){
        return next(new ErrorResponse("Please provide a code", 400));
    }
    try{
        const codes = await Survey.findOne({id});

        if(id){
            return next(new ErrorResponse("Invalid code", 401));
        }
        return res.status(200).json({
            success:true,
            token:"tr34f3443fc",
        });
      
    }catch(error){
        next(error);
    }
};
*/