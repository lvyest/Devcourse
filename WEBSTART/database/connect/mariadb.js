const mariadb = require('mysql');


const conn = mariadb.createConnection(
    {
        host: 'localhost',
        port: '3306', /* docker 초기 설정때 디폴트로 설정함 */
        user: 'root',
        password: 'root',
        database: 'Tennis'
    }
);

module.exports = conn;