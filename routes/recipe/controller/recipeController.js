const Recipe = require("../model/Recipe");

module.exports = {
    //get = .find
    getRecipes: (body,callback) =>{
        Recipe.find(body,(err,foundRecipe)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null,foundRecipe);
            }
        });
    },

    //POST = .save
    createRecipe:(body,callback)=>{
        const createdRecipe = new Recipe({
            recipeType: body.recipeType,
            recipeDate: body.recipeDate,
            recipePrice: body.recipePrice,
        });

        createdRecipe.save((err,savedRecipe)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, savedRecipe);
            }
        });
    },

    //Delete = .findByIdAndDelete
    deleteRecipe: (id, callback) =>{
        Recipe.findByIdAndDelete(id,(err,deletedRecipe)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, deletedRecipe);
            }
        });
    },

    //Update = .findByIdAndUpdate
    updateRecipe: (id,body,callback)=>{
        Recipe.findByIdAndUpdate(
            id,
            body,
            {new:true},
            (err,updatedRecipe)=>{
                if(err){
                    callback(err,null);
                }else{
                    callback(null, updatedRecipe);
                }
            }
        )
    }
};