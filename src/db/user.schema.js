import { mongoose } from "mongoose";

const userSchema = ({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    listaTelefonica: {
        type: [String],
        require: true,
    },
    creatAt:{
        type: Date,
        default: Date.now,
    }
});

const MUser = mongoose.model("contatos", userSchema);

export default MUser;