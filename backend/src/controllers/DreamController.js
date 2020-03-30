const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const dreams = await connection('dreams').select('*');

        response.json(dreams);
    },

    async create(request,response){
        const { name, age, dream, email, whatsapp } = request.body;
        
        await connection('dreams').insert({
            name,
            age,
            dream,
            email,
            whatsapp,
        });

        return response.json({ "Resposta": "Sucesso no cadastro do sonho"});
    }
};