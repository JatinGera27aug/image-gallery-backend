const categoryModel = require('../models/categoryModel.js')

class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const Allcategories = await categoryModel.find();
            res.status(200).json(Allcategories);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async addNewCategory(req, res) {
        const { title } = req.body;
        try {
            if (title) {
                const isTitle = await categoryModel.findOne({title});
                if (!isTitle) {
                    const newTitle = new categoryModel({title});
                    const savedTitle = await newTitle.save();
                    res.status(200).json({ savedTitle, message: "Category added successfully" });
                }
                else{
                  
                    res.status(400).json({ message: "Category already exists" })
                }

            }
            else {
                res.status(400).json({ message: "Please provide a title" })
            }
        }

        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = CategoryController;