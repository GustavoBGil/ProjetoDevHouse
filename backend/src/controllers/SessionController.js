/*
Métodos:

Index: Listagem de sessões
Store: Criar uma sessão
Show: Listar uma única sessão
Update: Atualizar uma sessão
Destroy: Deletar uma sessão

*/

import User from '../models/User'

class SessionController{

    async store(req , res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        

        return res.json(user)
    }

}

export default new SessionController();