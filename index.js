// creating a local server
const http=require('http');
const fs =require('fs');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case '/':fs.readFile('./views/index.html',(err,data)=>{
                    if(err)
                    {
                        res.end('Error Page 404');
                        
                    }
                    res.end(data);
                    })
                    
                
                break;
        case '/about':fs.readFile('./views/about.html',(err,data)=>{
                    if(err)
                    {
                        res.end('Error Page 404');
                    }
                    
                       res.end(data);
                    })
                    break;
        case '/contact':fs.readFile('./views/contact-me.html',(err,data)=>{
                        if(err)
                        {
                            res.end('Error Page 404');
                        }
                        
                        res.end(data);
                        })
                        break;
        case '/styles.css': res.writeHead(200,{'Content-Type':'text/css'})
                            fs.readFile('./views/styles.css',(err,data)=>{
                                res.end(data);
                            })
                            break;
                            /*res.write(fs.readFileSync('./views/styles.css'));
                           // res.end();
                           break; */
        default:        fs.readFile('./views/404.html',(err,data)=>{
                        // res.write(data);
                        res.end(data);
                        })
                        break;
    }
    
   



})

server.listen(8080,()=>{
    console.log('listing for request on port 8080');
})