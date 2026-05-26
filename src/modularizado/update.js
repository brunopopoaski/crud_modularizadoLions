import listaDeUsuarios  from "../data/userData.js";

export default function editandoUser(id, body, res) {
    
    const usuarioEditado = listaDeUsuarios.find(element => element.id == id)

    if(usuarioEditado === -1 || usuarioEditado === undefined){
        return res.status(400).json({mensage: "Usuario não encontrado! tente novamente..."})
    } else {
        usuarioEditado.nome = body.nome || usuarioEditado.nome
        usuarioEditado.email = body.email || usuarioEditado.email
        usuarioEditado.listaTelefonica = body.listaTelefonica || usuarioEditado.listaTelefonica
        return res.status(202).json({mensage: "Usuario editado com sucesso!"})
    }
}
