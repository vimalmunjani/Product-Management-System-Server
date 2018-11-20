const Product = require('../models/product.model');
const logger = require('../utils/logger');

let log = (message) => {
    logger(__filename, message);
}
// GET Products
exports.getProducts = function(){

    return new Promise((resolve, reject) => {

        Product.find()
        .where()   
        .then((products) => {
            log('products' , products)
            resolve(products);
        })
        .catch((error) => {
            console.log('Error retrieving products');
            reject(new Error(error));
        });


    });
  
}

// CREATE TODO
exports.createProduct = function(product){


    let newProduct = new Product({
        productId: product.productId, 
        productName: product.productName, 
        productCode: product.productCode, 
        category: product.category, 
        tags: product.tags, 
        releaseDate: product.releaseDate, 
        price: product.price, 
        description: product.description,
        available: product.available, 
        threshold: product.threshold, 
        starRating: product.starRating, 
        imageUrl: product.imageUrl
    });

    return new Promise((resolve, reject) => {

        newProduct.save()
               .then((product) => {

                    log(product)
                    resolve(todo);

               }).catch((error) => {

                    log(error);
                    reject(new Error(error));

               });

    })

    // newTodo.save()
    //         .then((todo) => {

    //              console.log("todo(S) -- "+todo)
    //              this.savedTodo = todo;    
    //              console.log("savedTodo(S) -- "+savedTodo)
    //              return savedTodo;
    //         })
    //         .catch((error) => {
    //             console.log(`Error creating Todo - ${error}`);
    //             return;
    //         });
    
    // if(!savedTodo){
    //     return;
    // }

    //console.log("savedTodo -- "+savedTodo);
    
}

// // UPDATE TODO
// exports.updateTodo = async function(todo){

//     let foundTodo, updateTodo;

//     try{
//         log(`todo.id - ${ todo._id }`);
//         foundTodo = await Todo.findById(todo._id);
//         log(`todo found - ${ JSON.stringify(foundTodo) }`);
//     }catch(e){

//         log(`todo not found`);
//         throw Error('Error ocurred while finding Todo');   
//     }

//     foundTodo.title = todo.title;
//     foundTodo.description = todo.description;
//     foundTodo.status = todo.status;

//     try{
//         updateTodo = await foundTodo.save();
//         log(`todo updated - ${ JSON.stringify(updateTodo)}`);
//         return updateTodo;
//     }catch(e){
//         log(`todo not updated`)
//         throw Error('Error updating Todo');
//     }

    

//     // Todo.findById(oldTodoId)
//     //                   .then((result) => {
//     //                         this.oldTodo = result;
//     //                         console.log(oldTodo);

//     //                   })
//     //                   .catch((error) => {
//     //                         console.log(`No Todo find!!`);
//     //                         return;
//     //                   });
    
//     // if(!oldTodo){
//     //     return;
//     // }

//     // oldTodo.title = todo.title;
//     // oldTodo.description = todo.description;
//     // oldTodo.status = todo.status;

//     // newTodo = oldTodo;

//     // newTodo.save()
//     //        .then((todo) => {
//     //             console.log(todo);
//     //             return todo;
//     //        })  
//     //        .catch((error) => {
//     //            console.log(`Error updating Todo`);
//     //            return;
//     //        })
   
// } 

// // DELETE TODO
// exports.deleteTodo = function(id){

// return new Promise((resolve, reject) => {

//     Todo.findByIdAndDelete(id)
//     .then((deletedTodo) => {
//         log(`Todo Deletion successful -- ${deletedTodo}`);
//         resolve(deletedTodo);
//     }).catch((error) => {
//         log(`Error deleting Todo ${error.message}`);
//         reject(new Error('Error Deleting Todo'));
//     });

// });

// }