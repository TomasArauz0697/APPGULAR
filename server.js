const express=require("express");
const path=require("path");
const app=express();

app.use(express.static(__dirname+'/dist/appgular'));
app.get('/*',function(req,res){
res.sendFile(path.join(__dirname+'/dist/appgular/index.html'));
});

app.listen(process.env.Port || 8080);
