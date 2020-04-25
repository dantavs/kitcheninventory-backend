
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments()

        table.string('name').notNullable()
        table.integer('quantity').notNullable()
        table.date('expirationDate').notNullable()

        table.integer('category_id').notNullable()

        table.foreign('category_id').references('id').inTable('categories')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
