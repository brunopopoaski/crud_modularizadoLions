import MUser from "../../db/user.schema.js";

export async function deleteUserById(id){
    const deleteUser = await MUser.findByIdAndDelete(id);
    return deleteUser
}