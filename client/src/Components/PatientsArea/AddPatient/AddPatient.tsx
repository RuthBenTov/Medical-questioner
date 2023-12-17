import { useForm } from "react-hook-form";
import "./AddPatient.css";
import Patient from './../../../Models/PatientsModel/PatientModel/Patient-model';
import { useNavigate } from "react-router-dom";
import { MessageClient } from "cloudmailin";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// const nodemailer = require("nodemailer");

function AddPatient(): JSX.Element {
    // async function main() {
    //     //const = "hostname from account page";
    //     //const = "username from account page";
    //    // const = "password from account page";
      
    //     const transporter = nodemailer.createTransport({
    //       //host: hostname,
    //       //port: 587,
    //       secure: false,
    //       requireTLS: true,
    //       auth: {
    //        // user: username,
    //         //pass: password,
    //       },
    //       logger: true
    //     });

    //========================================================
// const  rom = {{{firstname}}} + {{{lastname}}}
// const Email = {{{email}}}
// const Phone ={{{phone}}}
// const Message = {{{message}}
//     emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
// .then((result) => {
// alert("Message Sent, We will get back to you shortly", result.text);
// },
// (error) => {
// alert("An error occurred, Please try again", error.text);
// });
// };
    //===============================================
    const navigate = useNavigate();
    const{register,handleSubmit} = useForm<Patient>();
    async function submit(patient:Patient):Promise<void> {
        const formData = new FormData();
        formData.append("firstName",patient.firstName);
        formData.append("lastName",patient.lastName);
        formData.append("age",patient.age.toString());
        formData.append("birthDate",patient.birthDate);
        formData.append("photoOfUser",patient.photoOfUser[0]);
        formData.append("country",patient.country);
        formData.append("city",patient.city);
      //navigate("/Main")//===========================================================??????
      const USERNAME:string="";
      const API_KEY:string="";
     const client = new MessageClient({ username: USERNAME, apiKey: API_KEY});
    const response = await client.sendMessage({
  from: '"Sender Name" <from@example.net>',
  to: "to@example.com",
  subject: "Hello from node",
  plain: "Hello world?",
  html: "<strong>Hello world?</strong>",
  headers: { 'x-myheader': 'test header' }
//   attachments:[
//     {
//       "file_name": "pixel.png",
//       "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0rdr1HwAFHwKCk87e6gAAAABJRU5ErkJggg==",
//       "content_type": "image/png"
//     }
//   ]
});
      //===============================================================================
        
    }
    return (
        <div className="AddPatient Box">
        <h1>Add  Patient</h1>
                
       <form onSubmit={handleSubmit(submit)}>
        <label>First Name</label>
        <input type="text" autoFocus {...register("firstName")}/>
        <br/>
        <label>Last Name</label>
        <input type="text" autoFocus {...register("lastName")}/>
        <br/>
        <label>age</label>
        <input type="number"  {...register("age")}/>
        <br/>
       <label>Birth Date</label>
        <input type="text"  {...register("birthDate")}/>
        <br/>
        <label>Photo Of user</label>
        <input type="file" accept="imag/*" {...register("photoOfUser")}/>
        <label>Country</label>
       <input type="text"  {...register("country")}/>
       <br/>
      <label>City</label>
      <input type="text"  {...register("city")}/>
      <br/>  
      <button>Send</button>
     <button >Cancel</button>
     </form>	
        </div>
    );
}

export default AddPatient;
