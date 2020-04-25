const connection = require('../database/connection')

module.exports = {

    async index(request, response){
        const products = await connection('products')
            .join('categories', 'categories.id', '=', 'products.category_id')
            .select([
                'products.*',
                'categories.name as category'
            ])

        return response.json(products)

    },

    async create(request, response){
        const {name, quantity, expirationDate, category} = request.body

        const category_id = category

        const [id] = await connection('products').insert({
            name,
            quantity,
            expirationDate,
            category_id
        })

        return response.json({id})
    },

    async update(request,response){
        const { id, name, quantity, expirationDate, categoryId } = request.body

        await connection('products')
            .where('id',id)
            .update({
                name : name, 
                quantity: quantity, 
                expirationDate: expirationDate, 
                category_id: categoryId
            })
            

        return response.status(204).send()
    },

    async select(request, response){
        const { id } = request.params
        const product = await connection('products').select('*').where('id', id).first()

        return response.json(product)
    },

    async delete(request, response){
        const { id } = request.params
        await connection('products').where('id', id).delete()

        return response.status(204).send()
    }
}