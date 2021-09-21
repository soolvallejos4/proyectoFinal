const mysql = require('mysql')

module.exports.request = (query) => new Promise((res,rej) =>{

    const connection = mysql.createConnection({
        host: 'us-cdbr-east-04.cleardb.com',
        
        user: 'ba5f1e601a4443',
        password: 'ee51fd67',
        database: 'heroku_6f163815043d3e7'
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

