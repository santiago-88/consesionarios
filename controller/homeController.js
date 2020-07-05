const fs = require('fs');

let bd = JSON.parse(fs.readFileSync( './data/consesonarias.json', 'utf-8'))

const home={
index:function(req,res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write(`                                 -----------------------Te damos la bienvenida a nuestro consesionario-----------------\n
    podes localizar tu sucursal mas cercana :\n`)
    bd.forEach(function(sucur){
    
    res.write(`---${sucur.sucursal} `+'\n') 
               
    });
    res.end() 
    },

   
    


}
module.exports = home;