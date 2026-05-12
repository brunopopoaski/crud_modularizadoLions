const listaDeCadastrados = []
const listaDosTelefones = []

function ordenandoInputs(rl, voltarMenu, questaoNome, questaoEmail, questaoTelefone, questaoOutroTelefone) {

    rl.question(`${questaoNome}: `, input => {
        const nomeUsuario = input
        rl.question(`${questaoEmail}: `, input => {
            const nomeEmail = input
            inputCadastroTelefone(rl, questaoTelefone, questaoOutroTelefone, nomeUsuario, nomeEmail, voltarMenu)
        })

    })

}

function inputCadastroTelefone(rl, questao, questao2, nomeUsuario, nomeEmail, voltarMenu) {
    rl.question(`${questao}`, input => {
        listaDosTelefones.push(input)
        inputOutroNumero(rl, listaDosTelefones, questao2, questao,  nomeUsuario, nomeEmail, voltarMenu)
    })
}

function inputOutroNumero(rl, listaDosTelefones, questao2, questao, nomeUsuario, nomeEmail, voltarMenu) {
    rl.question(`${questao2}`, input2 => {
        let number = Number(input2)
        if (number === 1) {
            return inputCadastroTelefone(rl, questao, questao2, nomeUsuario, nomeEmail, voltarMenu)
        } else {
            const objCadastro = {
                id: Date.now(),
                nome: nomeUsuario,
                email: nomeEmail,
                listaTelefonica: listaDosTelefones
            }
        listaDeCadastrados.push(objCadastro)

        voltarMenu()
        }
    })
}



module.exports = { ordenandoInputs, listaDeCadastrados }
