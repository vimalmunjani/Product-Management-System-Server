const Joi = require('joi');
 
const productSchema = Joi.object().keys({
    productId: Joi.string().required(),
});
 
exports.validate = (data) => {

    log('from joi');

    // Joi.validate(data , productSchema,(err, value) => { 
        
    //     if(err) {
    //         return false;
    //     }else {
    //         return true;
    //     }
    // });  // err === null -> valid

    return true;
    next();
}
