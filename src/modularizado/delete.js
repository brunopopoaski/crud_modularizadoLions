import listaDeUsuarios  from "../data/userData.js";

export default function deleteUser(id, res) {
    
    
    const usuarioEditado = listaDeUsuarios.find(element => element.id == id)

    const indexExcluir = listaDeUsuarios.indexOf(usuarioEditado)

    
    if(usuarioEditado === -1){
        return res.status(400).json({mensage: "Usuario não encontrado! tente novamente..."})
    } else {
        listaDeUsuarios.splice(indexExcluir, 1)
        return res.status(202).json({mensage: `Usuario ${usuarioEditado.nome} Deletado!`})
    }
}
