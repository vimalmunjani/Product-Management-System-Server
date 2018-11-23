const productService = require('../services/product.service');
const logger = require('../utils/logger');
const validateProduct = require('../validation-schema/product.validation.schema');

let log = (message) => {
    logger(__filename, message);
}

// GET Products - GET Method
exports.getProducts = function(req, res, next){

    let products = productService.getProducts();
    
    products.then((product) => {

        log(product);

        res.status(200).json({
            status: 200,
            data: product,
            message: 'Get Product Successful'
        });

    }).catch((error) => {

        res.status(404).json({
            status: 404,
            data: error.message,
            message: 'Get Product Unsuccessful'
        });

    });
   
}



exports.getProductById = function(req, res, next){

    let productId = req.params.id
    if(!productId) {
        res.status(400).json({
            status: 400,
            data: null,
            message: 'No product Id found in Params'
        });
    }

    let product = productService.getProductById(productId);
    
    product.then((p) => {

        log(p);

        res.status(200).json({
            status: 200,
            data: p,
            message: 'Get Product Successful'
        });

    }).catch((error) => {

        res.status(404).json({
            status: 404,
            data: error.message,
            message: 'Get Product Unsuccessful'
        });

    });
   
}

// CREATE createProducts - POST Method
exports.createProduct = function(req, res, next){

    

    let product = {
        productId: req.body.productId, 
        productName: req.body.productName, 
        productCode: req.body.productCode, 
        category: req.body.category, 
        tags: req.body.tags, 
        releaseDate: req.body.releaseDate, 
        price: req.body.price, 
        description: req.body.description,
        available: req.body.available, 
        threshold: req.body.threshold, 
        starRating: req.body.starRating, 
        imageUrl: req.body.imageUrl
    }

    log(JSON.stringify(product));

    let savedProduct = productService.createProduct(product);

    savedProduct.then((product) => {

        log(product);

        res.status(201).json({
            status: 201,
            data: product,
            message: 'Product created successfully'
        });
    }).catch((error) => {

        log(error);

        res.status(404).json({
            status: 404,
            data: error.message,
            message: 'Product creation failed'
        });
        
    });

}

// // UPDATE Todo - PUT Method
// exports.updateTodo =async function(req, res, next){

//     log('entering update todo');

//     if(!req.body._id){

//         log(`no id found in body`);

//         res.status(400).json({
//             status: 400,
//             data: null,
//             message: 'No Id parameter found in the body'
//         });

//     }

//     log(`reading id from req body ${req.body._id} `)

//     let todo = {
//         _id: req.body._id,
//         title: req.body.title,
//         description: req.body.description ? req.body.description :'No description',
//         status: req.body.status
//     }

    
//     log(JSON.stringify(todo));

//     try{

//         let updateTodo = await TodoService.updateTodo(todo);

//         log('todo found');

//         res.status(200).json({
//             status: 200,
//             data: updateTodo,
//             message: 'Todo Update Successful'
//             });

//     }catch(e){

//         log(`todo not found`);

//         res.status(400).json({
//             status: 400,
//             data: null,
//             message: e.message
//         });
//     }    
// }

// DELETE Todd - DELETE Method
exports.deleteProduct = async function(req, res, next){

    if(!req.params.id){
        res.status(400).json({
            status: 400,
            data: null,
            message: 'ID required'
        });
    }
    
    try{

        let deletedProduct = await productService.deleteProduct(req.params.id);

        log(`product deleted - ${deletedProduct}`);

        res.status(200).json({
            status: 200,
            data: deletedProduct,
            message: 'Todo deleted successfully'
        });

    }catch(e){

        log(`product not deleted - ${e}`);

        res.status(400).json({
            status: 400,
            data: null,
            message: e.message
        });

    }

}