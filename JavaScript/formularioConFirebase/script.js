



const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    //validar campo nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if(name.value.trim() === ''){
        nameError.textContent
    }



    //validar correo electronico
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');




    //validar la contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');




})