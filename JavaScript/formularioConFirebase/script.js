

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAQi2D4rVUnMMHeQURb0GiTk8SiVaLj6gg",
    authDomain: "datos-formulario-eb2c6.firebaseapp.com",
    projectId: "datos-formulario-eb2c6",
    storageBucket: "datos-formulario-eb2c6.appspot.com",
    messagingSenderId: "354576606036",
    appId: "1:354576606036:web:d5b37c6df64c1874835ec1",
    measurementId: "G-1VT72HNKNK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


const formulario = document.getElementById('formulario');
const pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //validar campo nombre
    const nameEnter = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if(nameEnter.value.trim() === ''){
        nameError.textContent = 'Por favor, introduce tu nombre'
        nameError.classList.add('error-message') //aniadimos el estilo
    }else{
        nameError.textContent = ''
        nameError.classList.remove() //quitamos el estilo
    }



    //validar correo electronico
    const emailEnter = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    const validarCorreo = (correo) =>{
        return pattern.test(correo);
    }

    if(emailEnter.value.trim()===''){
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
    const passwordEnter = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if(!patternPassword.test(passwordEnter.value.trim())){
        passwordError.textContent = 'Por favor, ingrese una contrasenia valida'
        passwordError.classList.add('error-message')
    }else{
        passwordError.textContent = ''
        passwordError.classList.remove()
    }
    
    //si todos los campos son correctos enviar formulario
    if(!nameError.textContent && !emailError.textContent && !passwordError.textContent){
        //aca entra el manejo de la base de datos que recibira la informacion:

        db.collection("users").add({
            name: nameEnter.value,
            email: emailEnter.value,
            password: passwordEnter.value
        })
        .then((docRef) => {
            alert('el formulario se ha creado correctamente',docRef.id)
            formulario.reset()
        })
        .catch((error) => {
            alert(error)
        });
    }
});