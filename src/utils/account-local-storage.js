
// Funcion Registrarse
export function setAccountInLocalStorage(email, password, repeatPassword) {
    // Búsqueda del user en Local Storage
    const userInLocal = JSON.parse(window.localStorage.getItem('users'));
    let isRegister;
    userInLocal !== null ? isRegister = userInLocal.find((user) => user.email === email) : isRegister = false;

    if(isRegister) {
        return `El email "${isRegister.email}" ya se encuentra registrado.`;
    }
    if(password !== repeatPassword) return "Las contraseñas no coinciden entre si.";

    // Registro de user
    if(userInLocal === null) {
        const newUser = [{
            email: email,
            password: password
        }]
        window.localStorage.setItem("users", JSON.stringify(newUser));
    } else {
        const listUserInLocal = JSON.parse(window.localStorage.getItem('users'));
        const newUser = {
            email: email,
            password: password
        }
        listUserInLocal.push(newUser)
        window.localStorage.setItem("users", JSON.stringify(listUserInLocal))
    }
}


// Function Iniciar sesión
export function getAccountInLocalStorage(email, password) {
    const users = JSON.parse(window.localStorage.getItem('users'));
    let isRegister;
    if(users !== null) {
        isRegister = users.find(user => user.email === email);
    }
    if(!isRegister) return `Email no registrado.`;

    const passwordIsOk = isRegister.password === password;
    if(passwordIsOk) {
        return(
            {
                email: email, 
                password: password
            }
        )
    } else {
        return 'Contraseña incorrecta.'
    }

}