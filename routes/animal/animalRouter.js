var express = require("express");
var router = express.Router();
const animalController = require("./controller/animalController");



router.get('/', function(req,res){
    animalController.getAllAnimal({}, function(err,foundAnimal){
        if(err){
            res
            .status(500)
            .json({message: "Something went wrong!" , error: err.message});
        }else{
            res.json({message: "Success", foundAnimal});
        }
    });
});


router.post("/create-animal", function(req,res){
    animalController.createAnimal(req.body, function(err,saveAnimal){
        if(err){
            res
            .status(500)
            .json({message: "Something went wrong!" , error: err.message});
        }else{
            res.json({message: "Success", saveAnimal});
        }
    });
});

router.delete("/delete-animal-by-id/:id",function(req,res){
    animalController.deleteAnimal(req.params.id,function(err,deletedAnimal){
        if(err){
            res
            .status(500)
            .json({message: "Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", deletedAnimal});
        }
    });
})

router.put("/update-animal-by-id/:id",function(req,res){
    animalController.updateAnimalById(req.params.id,req.body, function(err,updatedAnimal){
        if(err){
            res
            .status(500)
            .json({message: "Something is wrong!"});
        }else{
            res.json({message: "success", updatedAnimal});
        }
    })
})

module.exports = router;