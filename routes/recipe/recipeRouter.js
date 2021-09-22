const express = require("express");
const router = express.Router();
const  recipeController = require("./controller/recipeController");

//get request
router.get('/',(req,res)=>{
    recipeController.getRecipes({}, (err, foundRecipe)=>{
        if(err){
            res
            .status(500)
            .json({message: "Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", foundRecipe});
        }
    })
});

//POST request
router.post('/create-recipe', (req,res)=>{
    recipeController.createRecipe(req.body, (err,saveRecipe)=>{
        if(err){
            res.status(500)
            .json({message: "Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", saveRecipe});
        }
    });
});

//DELETE request
router.delete("/delete-recipe-by-id/:id", (req,res)=>{
    const {id} = req.params;
    recipeController.deleteRecipe( id,(err, deleteRecipe)=>{
        if(err){
            res
            .status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", deleteRecipe});
        }
    });
});

//UPDATE request 
router.put('/update-recipe-by-id/:id',(req,res)=>{
    const {id} = req.params;
    recipeController.updateRecipe(id,req.body,(err,updateRecipe)=>{
        if(err){
            res
            .status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success",updateRecipe});
        }
    });
});

module.exports = router;