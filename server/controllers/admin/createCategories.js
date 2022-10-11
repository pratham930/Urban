import slugify from "slugify";
import Categoryschema from "../../Schema/admin/category.js";




function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    } 
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        parentId: cate.parentId,
        type: cate.type,
        children: createCategories(categories, cate._id),
      });
    }
  
    return categoryList;
  }


   



class categoryController {


    static getCategory = (req, res) => {

        Categoryschema.find({}).exec((error,categories)=>{
          
           if (error) res.status(400).jason({message:error})
           
           if (categories) {
               const categoryList = createCategories(categories);
               res.status(200).json({categoryList})
           }
        })
    }


    static getSubcategorybyname = async (req, res) => {

      try {   
        const {_id} = req.params;
        const data = await Categoryschema.findOne({_id})

if (data) {

  const subnewdata = await Categoryschema.find({parentId:data._id})
  res.send(subnewdata);
 
}} catch (error) {
        
        console.log("error" + error.message);


      }}



    static createCategory = (req, res) => {

        const {name,parentId} = req.body;
        
         const categoryObject ={
            name:name,
            slug:slugify(name)
         }
     if (parentId) {
        categoryObject.parentId = parentId;
     }
        const cat = new Categoryschema (categoryObject);

        cat.save((error,category)=>{

            if (error) return res.status(400).json({message:"error","status": "failed"})
            
            if (category) return res.status(200).json({category,"status": "success"})
                
 })}
 }
    export default categoryController ;
