function main(response) {
    console.log('main');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main page');
    response.end();
}
function login(response) {
    console.log('login');
    
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

function kayoung(response){
    console.log('kayoung');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('kim kayoung');
    response.end();
}

let handle = {}; //key : value
handle['/'] = main;
handle['/login'] = login;
handle['/kayoung'] = kayoung;
exports.handle = handle;