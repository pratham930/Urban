

import express from "express";
import adminController from "../controllers/admin/admin.js";
import authenticate from "../middileware/adminAuthenticate.js";
import upload from "../middileware/upload.js";

// router.use( '/products',upload.fields([{name:'pimage',maxcount:1},{name:'rdoc',maxcount:1}]));
// // router.use( '/productSub',upload.fields([{name:'pimage',maxcount:1},{name:'rdoc',maxcount:1}]));
// router.use( '/postproducts',upload.fields([{name:'pimage',maxcount:1},{name:'rdoc',maxcount:1}]));


const router = express.Router();



router.post('/admin/register', adminController.register);
router.post('/admin/login', adminController.login);
router.post('/enqury', adminController.enqury);



// //patch
// router.patch('/admin/Activatejob/:_id', authenticate, adminController.Activatejob);
// router.patch('/admin/addtoExpired/:_id', authenticate, adminController.addtoExpired);
// router.patch('/admin/addtoUnderReview/:_id', authenticate, adminController.addtoUnderReview);
// router.patch('/admin/addtoTerminate/:_id', authenticate, adminController.addtoTerminate);

// router.patch('/admin/changeUserPassword', authenticate, adminController.changeUserPassword);
// router.patch('/admin/editProfile', authenticate, adminController.editProfile);

//get request
// router.get('/admin/about', authenticate, adminController.about);
// router.get('/admin/getjobs', authenticate, adminController.getjobs);
// router.get('/citylist', adminController.citylist);
// router.get('/statelist', adminController.statelist);

// router.get('/getUnderReviewjobs', authenticate, adminController.getUnderReviewjobs);
// router.get('/getActivejobs', authenticate, adminController.getActivejobs);
// router.get('/getExpiredjobs', authenticate, adminController.getExpiredjobs);




export default router;