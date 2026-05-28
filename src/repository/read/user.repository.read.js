import MUser from "../../db/user.schema.js";

export async function getAllUsers() {
    const listUsers = await MUser.find({})
    return listUsers
}

export async function getUserById(id) {
    const listUsers = await MUser.findById(id)
    return listUsers
}
