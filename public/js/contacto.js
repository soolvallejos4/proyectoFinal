const contactForm = document.querySelector('.contact-form')
let nombre = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let mensaje = document.getElementById('mensaje')


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        nombre: nombre.value,
        email: email.value,
        subject: subject.value,
        message: mensaje.value
    }
    console.log(formData)

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/contacto')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = ()=>{
        console.log(xhr.responseText)
        if(xhr.responseText == 'success'){
            alert(`Email enviado`);
            nombre.value = ' ',
            email.value = ' ',
            subject.value = ' ',
            message.value = ' ';        
        }else{          
            alert(`Error al enviar el mensaje`)
        }
    }

    xhr.send(JSON.stringify(formData))


})