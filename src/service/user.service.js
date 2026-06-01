import { createUser } from "../repository/write/user.repository.js";
import { getAllUsers, getUserById} from "../repository/read/user.repository.read.js";
import { updateUserById, updateUserByIdProp } from "../repository/update/user.repository.update.js";
import { deleteUserById } from "../repository/delete/user.repository.delete.js";

export async function createUserService(body) {
    try {
        if (!body.nome || !body.email || !body.listaTelefonica) {
            throw new Error("Dados inválidos");
        }

        if (body.listaTelefonica.length === 0) {
            throw new Error("Telefones Inválidos")
        }

        const newUser = await createUser(body);
        return newUser

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

export async function getAllUsersService() {
    try {
        const users = await getAllUsers()
        return users

    } catch (error) {
        console.error("Erro ao buscar todos os usuarios", error)
        throw error//vai pegar o erro e enviar para a rota
    }
}

export async function getUserByIDService(id) {
    try {
        if (!id) {
            console.error("Id não digitado para busca", error)
            throw error
        }
        const listUsers = await getUserById(id)
        return listUsers
    } catch (error) {
        console.error("Erro ao buscar todos os usuarios", error)
        throw error//vai pegar o erro e enviar para a rota
    }
}

export async function updateUserByIdService(id, body){
    try {
        if (!body.nome || !body.email || !body.listaTelefonica) {
            throw new Error("Dados inválidos");
        }

        if (body.listaTelefonica.length === 0) {
            throw new Error("Telefones Inválidos")
        }

        const updateUser = await updateUserById(id, body.nome, body.email, body.listaTelefonica);
        return updateUser

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

export async function updateUserByIdPropService(id, body){
    try {
        if (!id) {
            console.error("Id não digitado para busca", error)
            throw error
        }

        const updateUser = await updateUserByIdProp(id, body);
        return updateUser

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

export async function deleteUserByIdService(id) {
    try {
        if (!id) {
            console.error("Id não digitado para busca", error)
            throw error
        }
        const deleteUser = await deleteUserById(id)
        return deleteUser
    } catch (error) {
        console.error("Erro ao buscar todos os usuarios", error)
        throw error//vai pegar o erro e enviar para a rota
    }
}