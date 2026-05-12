
const listaDeCadastrados = []
let listaTelefones = []
const listaDosTelefones = []

function ordenandoInputs(rl, voltarMenu, questaoNome, questaoEmail, questaoTelefone, questaoOutroTelefone) {

    rl.question(`${questaoNome}: `, input => {
        const nomeUsuario = input
        rl.question(`${questaoEmail}: `, input => {
            const nomeEmail = input
            listaTelefones = inputCadastroTelefone(rl, questaoTelefone, questaoOutroTelefone)
        })
    })







}



function inputCadastroTelefone(rl, questao, questao2) {
    rl.question(`${questao}`, input => {
        listaDosTelefones.push(input)
        console.log(listaDosTelefones);
        inputOutroNumero(rl, listaDosTelefones, questao2, questao)
    })
}

function inputOutroNumero(rl, listaDosTelefones, questao2, questao) {
    rl.question(`${questao2}`, input2 => {
        let number = Number(input2)
        if (number === 1) {
            return inputCadastroTelefone(rl, questao, questao2)
        } else {
            return listaDosTelefones
        }
    })
}



module.exports = { ordenandoInputs }