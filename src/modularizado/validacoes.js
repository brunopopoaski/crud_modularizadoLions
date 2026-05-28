import { z } from "zod"
import listaDeUsuarios from "../data/userData.js";

export default function validacaoEmail(email) {

    const emailSchema = z.string().email();

    const result = emailSchema.safeParse(email);

    if (result.success) {
        return validacaoEmailRepetido(email)
    } else {
        return false
    }
}

function validacaoEmailRepetido(email){

    const resultadoDaValidacao = listaDeUsuarios.find(element => element.email == email)

    if(resultadoDaValidacao === undefined){
        return true
    } else {
        return false
    }
}

//by carlao