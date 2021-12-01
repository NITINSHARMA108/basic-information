const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.writeHead(200,{'Content-Type':'text/html'});

	switch(req.url){
		
		// displaying Home page
		case '/':	
			fs.readFile('./views/index.html', (err, data) => {
			if(err)
			{
				res.end('Error Page 404');
			}
			res.end(data);
			})
			break;

		//displaying about page	
		case '/about':
			fs.readFile('./views/about.html', (err, data) => {
			if(err)
			{
				res.end('Error Page 404');
			}
			res.end(data);
			})
			break;
		
		// displaying contact page
		case '/contact':
			fs.readFile('./views/contact-me.html', (err, data) => {
			if(err)
			{
				res.end('Error Page 404');
			}
			res.end(data);
			})
			break;
		
		// handling stylesheet
		case '/styles.css': 
			res.writeHead(200,{'Content-Type':'text/css'})
			fs.readFile('./views/styles.css', (err, data) => {
				if(err){
					res.end('Error Page 404');
				}
				res.end(data);
			})
			break;
			
		// handling error url's
		default:
			fs.readFile('./views/404.html', (err, data) => {
			if(err){
				res.end('Error Page 404');
			}
			res.end(data);
			})
			break;
	}
})

server.listen(8080);