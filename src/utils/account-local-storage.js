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

export function getAccountInLocalStorage(email, password) {
    return(
        {
            email: window.localStorage.getItem(email), 
            password: window.localStorage.getItem(password)
        }
    )
}