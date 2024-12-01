const ImageModel = require('../models/imageModel.js')
class ImageController{
    static async getAllImages(req, res){
        try{
            const AllImages = await ImageModel.find();
            res.status(200).json(AllImages);
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    }

    static async addImage(req, res){
        // console.log("File data:", req.file);
        const {category} = req.body;
        try{
            if(!category){
                res.status(400).json({message:"all fields are required"});
            }
            
                else{
                    const newImage = new ImageModel({
                        url: `${req.file.filename}`,
                        category:category
                    });
                    const savedImage = await newImage.save();
                    if(savedImage){
                    res.status(200).json({message:"Image added successfully", savedImage});
                }
                }
                
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
        
    }
    
    static async getImagebyCategory(req, res){
        // console.log(req.params)
        const {category} = req.params;
        try{
            if(category){
                const fetchImagebyCatId = await ImageModel.find({category});
                if(fetchImagebyCatId.length > 0){
                    res.status(200).json(fetchImagebyCatId);
                }
                else{
                    res.status(400).json({message:"No images found for this category"});
                }
            }
            else{
                return res.status(400).json({message:"Invalid category ID in URL"});
            }
        }
        catch(err){
            res.status(500).json({message:err.message})
    }
}}

module.exports = ImageController;