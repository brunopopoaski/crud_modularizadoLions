
/* import listaDeUsuarios  from "../data/userData.js"; */

function criandoUser(body, res, resultadoValidacao) {
    if(!body.nome || !body.email || !body.listaTelefonica || !resultadoValidacao){
        return res.status(400).json("Digite todos os usuarios corretamente!")
    } else {
        const objUser =
        {
            id: Date.now(),
            nome: body.nome,
            email: body.email,
            listaTelefonica: body.listaTelefonica
        }

        listaDeUsuarios.push(objUser)
        return res.status(201).json({mensage: `usuario ${body.nome} criado com sucesso`})
    }

}

export default criandoUser