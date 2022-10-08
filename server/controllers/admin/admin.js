

import AdminSingup from "../../Schema/admin/singup.js";
// import initMB from 'messagebird';
// const messagebird = initMB('ZUcVDMrE8WjDTdP0h22BQfXdV');
// process.env.SECRET_KEY
import bcrypt from "bcryptjs";

// import authenticate from "../middleware/authenticate.js";
import jwt from 'jsonwebtoken';
// import { Country, State, City } from 'country-state-city';
// import  twilio from 'twilio';
// const client = new twilio(process.env.accountSid, process.env.authToken);


class adminController {



  static register = async (req, res) => {

    try {
      const { phonenumber, fullname, email, password } = req.body;

      console.log(req.body);
      const userLogin = await AdminSingup.findOne({ phonenumber: phonenumber });
      console.log(userLogin)
      if (userLogin) {
        if (userLogin.phonenumber == phonenumber) {
          console.log(userLogin)
          res.status(201).send({ message: "number already register", status: "failed" })
        }
      }
      else {
        const lol = { phonenumber, fullname, email, password }
        const register = new AdminSingup(lol)
        await register.save()
        res.status(201).send({ message: "succesfull", status: "succesfull" })
      }
    }
    catch (error) {
      console.log(error)
      return res.status(422).json({ error: "not found data" })
    }
  }



  static login = async (req, res) => {

    try {
      const { phonenumber, password } = req.body
      console.log(req.body)
      if (!phonenumber || !password) {
        return res.status(400).json({ error: "pls filled data" })
      }

      const userLogin = await AdminSingup.findOne({ phonenumber: phonenumber });
      if (userLogin) {

        const isMatch = await bcrypt.compare(password, userLogin.password)

        // const token = await userLogin.generateAuthToken();
        const token = jwt.sign({ userID: userLogin._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        // console.log(token); 
        // res.cookie("jwtoken", token,{
        //     expires:new Date(Date.now() + 2589000000),
        //    httpOnly:true});

        !isMatch ? res.status(400).send({ message: "error" }) : res.send({ "status": "success", "message": "Login Success", "token": token })

      }
      else { res.status(400).send({ message: "filled invalid data" }) }

    } catch (error) {
      console.log(error);
    }
  };

}
  export default adminController;

