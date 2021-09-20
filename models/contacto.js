const {request} = require('../db/mysql')

module.exports.contact = async (name,email,cel,msj) =>{
      
    const user_message = await request(`
    INSERT INTO contact (name, email, cel_phone, message) VALUES('${name}','${email}','${cel}','${msj}')
    
    `)
    console.log(user_message)
    return {
        isData: user_message ? true : false
    
    }
}