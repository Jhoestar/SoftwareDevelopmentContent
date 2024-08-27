



const formulario = document.getElementById('formulario');
const pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //validar campo nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if(name.value.trim() === ''){
        nameError.textContent = 'Por favor, introduce tu nombre'
        nameError.classList.add('error-message') //aniadimos el estilo
    }else{
        nameError.textContent = ''
        nameError.classList.remove() //quitamos el estilo
    }



    //validar correo electronico
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    const validarCorreo = (correo) =>{
        return pattern.test(correo);
    }

    if(email.value.trim()===''){
        emailError.textContent = 'Por favor, introduzca el email'
        emailError.classList.add('error-message')
    }else{
        if(!validarCorreo(email.value.trim())){
            emailError.textContent = 'Por favor, introduce el email correctamente'
            emailError.classList.add('error-message')
        }else{
            emailError.textContent = ''
            emailError.classList.remove();
        }
    }



    //validar la contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;


    if(!patternPassword.test(password.value.trim())){
        passwordError.textContent = 'Por favor, ingrese una contrasenia valida'
        passwordError.classList.add('error-message')
    }else{
        passwordError.textContent = ''
        passwordError.classList.remove()
    }
    
    //si todos los campos son correctos enviar formulario
    if(!nameError.textContent && !emailError.textContent && !passwordError.textContent){
        //aca entra el manejo de la base de datos que recibira la informacion
        passwordError.textContent = ''
        passwordError.classList.remove()

        passwordError.classList.remove()
        alert('el formulario se ha creado correctamente')
        formulario.reset()
    }
})