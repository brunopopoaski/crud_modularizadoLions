const { listandoFuncionario } = require('./read')
const { listaDeCadastrados } = require('./cadastro.js')

function exclusao(rl, lista, voltarMenu) {

    listandoFuncionario(lista)

    rl.question("Digite o ID de um funcionário para exclusão: ", (input) => {

        const idSearch = parseInt(input)

        if (Number.isNaN(idSearch)) {

            console.log('Digite um id valido!!')
            return voltarMenu()

        }

        else {

            /*  for(let i = 0; i < listaDeCadastrados.length) */

            const buscandoID = lista.findIndex(element => element.id === idSearch)

            if (buscandoID === -1) {
                console.log("Cadastro não encontrado! Tente novamente")
                return voltarMenu()

            }

            else {

                const nome = lista[buscandoID].nome

                rl.question(`Tem certeza que deseja deletar o ${nome}? [1]SIM\n [2]NÃO\n`, (input) => {

                    const escolha = parseInt(input, 10)

                    switch (escolha) {
                        case 1:
                            lista.splice(buscandoID, 1)
                            voltarMenu()
                            break

                        case 2:
                            console.log('\n--Que bom, menos um funcionario deletado\n')
                            voltarMenu()
                            break

                        default:
                            console.log('Opção inválida...Reiniciando...')
                            voltarMenu()
                            break
                    }
                })
            }

        }


    })


}

module.exports = { exclusao }

