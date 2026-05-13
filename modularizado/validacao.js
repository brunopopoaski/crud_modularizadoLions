function validandoEmail(email, listaDeVerificacao){
    let result = true
    listaDeVerificacao.forEach(element => {
        if(email === element.email ){
            result = false
        }
    });

    return result
}

module.exports = { validandoEmail }