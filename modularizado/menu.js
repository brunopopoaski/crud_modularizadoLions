const { ordenandoInputs, listaDeCadastrados } = require('./cadastro.js')
const { listandoFuncionario, maiorSalario, menorSalario } = require('./read.js')
const {questaoNome, questaoEmail, questaoListaDeTelefone} = require('./texts.js')
const { exclusao } = require('./delete.js')


function exibirMenu(rl, voltarMenu) {
  rl.question(
    '\n\nSelecione uma opção \n[1] Cadastrar funcionario \n[2] Listar funcionarios \n[3] Excluir \n[4] Editar \n[0] Sair\n\n',
    (input) => {
      const escolhaMenu = parseInt(input, 10)
      if (Number.isNaN(escolhaMenu)) {
        console.log('Opção inválida, tente novamente...')
        voltarMenu()
        return
      }

      switch (escolhaMenu) {
        case 1:
            ordenandoInputs(rl, voltarMenu, questaoNome, questaoEmail, questaoListaDeTelefone[0], questaoListaDeTelefone[1])
          break
        case 2:
          listandoFuncionario(listaDeCadastrados)
          voltarMenu()
          break
        case 3:
          exclusao(rl, listaDeCadastrados, voltarMenu)
          break
        case 4:
          
          break
        case 0:
          console.log('\nAté logo.\n')
          rl.close()
          break
        default:
          console.log('Opção inválida...Tente Novamente!')
          voltarMenu()
          break
      }
    },
  )
}

module.exports = { exibirMenu }
