import MUser from "../../db/user.schema.js";

export async function updateUserById(id, nome, email, listaTelefonica){
    const updateUser = await MUser.findByIdAndUpdate(
        id,
    {nome, email, listaTelefonica},
    {new: true, runValidators: true}
    );
    return updateUser
}

export async function updateUserByIdProp(id, body){
    const updateUser = await MUser.findByIdAndUpdate(
        id,
        body,
    {new: true, runValidators: true}
    );
    return updateUser
}