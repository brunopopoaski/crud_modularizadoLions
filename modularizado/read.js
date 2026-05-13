function listandoFuncionario(lista) {

    console.log('\n\n-------------------LISTA DE FUNCIONARIOS-------------------\n\n')

    lista.forEach((element, index) => {

        console.log(`\nID: ${element.id} || Nome: ${element.nome} | E-mail: ${element.email} | Telefones: ${element.listaTelefonica}\n`)

    })
}


module.exports = { listandoFuncionario }