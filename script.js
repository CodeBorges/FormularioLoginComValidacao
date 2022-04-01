const tempLogin = {
    login: "admin",
    senha: 12,
    confirmaSenha: 12
}

const createLogin = (usuario) => {
    localStorage.setItem("db_login", JSON.stringify(usuario))
}











function validaLogin() {
    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if (login == "" || senha == "") {
        alert("Login e senha não preenchidos!");
        login.focus();
        senha.focus();
    } if (login == "admin" && senha == "12") {
        alert("Login feito com sucesso!");
        location = "home.html"
    } else {
        alert("Login e senha incorretos!");
        location = "login.html";
    }

}

