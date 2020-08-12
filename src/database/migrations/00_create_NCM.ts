import Knex from 'knex';

export async function up (knex: Knex){
    return knex.schema.createTableIfNotExists('NCM', table => {
        table.bigInteger('EAN').primary();
        table.string('Description').notNullable();
        table.integer('NCM').notNullable();
    })
}

export async function down (knex: Knex){
    return knex.schema.dropTable('NCM');
}