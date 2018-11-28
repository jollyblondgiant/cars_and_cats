var http = require('http');
var fs = require('fs');
function getStrArr(str){
    let strArr = str.split('/');
    let temp = strArr[strArr.length-1].split('.');
    strArr.pop();
    strArr = strArr.concat(temp);
    return strArr;
}


var server = http.createServer(function (request, response) {
    console.log('client request URL:', request.url);
    var urlArr = getStrArr(request.url);
    
    if(request.url =='/'){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/addCar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
    else if(urlArr[urlArr.length-1] === 'jpg'){
        let filePath = '.';
        filePath += request.url;
        console.log(filePath);
    fs.readFile(filePath, function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
   



    else{
        response.end('File Not Found');
    }
});

server.listen(7077);
console.log('Running in localhost at port 7077');