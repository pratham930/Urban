import express from "express"
const router = express.Router()
// import authenticate from "../middleware/authenticate.js";
import categoryController from "../controllers/admin/createCategories.js";


router.post('/createCategory', categoryController.createCategory)
router.get('/getCategory', categoryController.getCategory)
 router.get('/getSubcategorybyname/:_id', categoryController.getSubcategorybyname)



export default router;

