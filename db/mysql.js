const mysql = require('mysql')

module.exports.request = (query) => new Promise((res,rej) =>{

    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'Salinas',
        password: 'akatsuki',
        database: 'contacto'
    });

    connection.query(query, (err, data, fields) =>{
        if (err) rej(err)
        console.log("init query")
        connection.end((err) => {
            if(err) rej (err)

            if(data.length <=1){
                res(data[0])
            }else{
                res(data)
            }
            console.log("end query")
        })
    })
});

