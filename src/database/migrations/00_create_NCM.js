"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTableIfNotExists('NCM', table => {
        table.bigInteger('EAN').primary();
        table.string('Description').notNullable();
        table.integer('NCM').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('NCM');
}
exports.down = down;
