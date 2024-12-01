const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const CategoryController = require('../controllers/categoryController.js')
const ImageController = require('../controllers/imageController.js')

router.post("/add/Image", upload.single("url"), ImageController.addImage);
router.get("/all-Images", ImageController.getAllImages);
router.get("/all-Images/:category", ImageController.getImagebyCategory);
router.get('/all-categories', CategoryController.getAllCategories)
router.post('/add-category', CategoryController.addNewCategory)
module.exports = router;

