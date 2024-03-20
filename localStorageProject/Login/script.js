const showPassword = () => {
    varinputSenha = document.querySelector("#senha");

    if(inputSenha.setAttrbute("type" === "password")){
        inputSenha.setAttrbute("type", "type")
    }else{
        inputSenha.setAttrbute("type", "password")
    }
}

function login(){
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    if(nome && senha && nome === "admin" && senha === "12345"){
        const  user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 1000000)
        } 
        localStorage.setItem("ususario", JSON.stringify(user))
        window.location.href = "../Loja/loja.html"

    }else{
        document.getElementById('error-modal').style.display = "flex"
    }
}

const fecharModal = () => document.getElementById('error-modal').style.display = "none"

