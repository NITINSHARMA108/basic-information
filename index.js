// creating a local server
const http=require('http');
const fs =require('fs');
const lookup=require('mime-types').lookup;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case '/':fs.readFile('./views/index.html',(err,data)=>{
                res.write(data);
                // res.end();
                    })
                    
                
                break;
        case '/about':fs.readFile('./views/about.html',(err,data)=>{
                    res.write(data);
                    // res.end();
                    })
                    break;
        case '/contact':fs.readFile('./views/contact-me.html',(err,data)=>{
                    res.write(data);
                   // res.end();
                })
                break;
        
            default:fs.readFile('./views/404.html',(err,data)=>{
                    res.write(data);
                    res.end();

                })
    }
   



})

server.listen(8080,'localhost',()=>{
    console.log('listing for request on port 8080');
})