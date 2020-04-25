const connection = require('../database/connection')

module.exports = {

    async index(request, response){
        const categories = await connection('categories').select('*')

        return response.json(categories)
    },

    async create(request, response){
        const {name} = request.body 

        const [id] = await connection('categories').insert({
            name
        })

        return response.json({id})
    },

    async delete (reques, response){

    }

}