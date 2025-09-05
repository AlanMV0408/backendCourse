//Config inicial

//Recuperar el token de auth desde el almacenamiento local
const token = localStorage.getItem('token');

//Estados de control para carga, auth y registro
let isLoading = false;
let isAuthenticating = false;
let isRegistration = false;

//Lista de tareas (inicialmente vacía)
let toDo = [];

//Base de la API
const apiBase = '/';

//Elementos del DOM

const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('main');
const authContent = document.querySelector('auth');
const textError = document.getElementById('error');
const email = document.getElementById('emailInput');
const registerBtn = document.getElementById('registerBtn');
const authBtn = document.getElementById('authBtn');
const addTodoBtn = document.getElementById('addTodoBtn');

//LOGICA DE
//Alternanr entre modo registro y autenticacion

async function toggleIsRegister() {
    isRegistration = !isRegistration;
    registerBtn.innerText = isRegistration ? 'Sign in' : 'Sign up';
    document.querySelector('#auth > div h2').innerText = isRegistration ? 'Sign up' : 'Log in';
    document.querySelector('.register-content p').innerText = isRegistration
        ? 'Already have an account?'
        : "Don't have an account?";
    document.querySelector('.register-content button').innerText = isRegistration
        ? 'Sign in'
        : 'Sign up';
}

//Auntentica al usuario (login o registro)

async function authenticate() {
    const emailVal = email.value;
    const passwordVal = password.value;

    //Validaciones basicas
    if (
        isLoading ||
        isAuthenticating ||
        !emailVal ||
        !passwordVal ||
        passwordVal.length < 6 ||
        !emailVal.includes('@')
    )
        return;
}

//Ocultar errores y muestra estado de auth
error.style.dysplay = 'none';
isAuthenticating = true;
authBtn.innerText = 'Authenticating...';

try {
    let data;
    const endpoint = isRegistration ? 'auth/register' : 'auth/login ';
    const response = await fetch(apiBase + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailVal,
            password: passwordVal,
        }),
    });
    data = await response.json();

    //Si hay token
    if (data.token) {
        token = data.token;
        localStorage.setItem('token', token);
        authBtn.innerText = 'Loading...';
    } else {
        throw new Error('Failed to authenticate');
    }
} catch (err) {
    console.log(err);
    error.innerText = err.message;
    error.style.dysplay = 'block';
}


//Funcion para cerrar sesion 
function logout() {
    //limpiar almacenamiento local
    localStorage.removeItem('token');
}