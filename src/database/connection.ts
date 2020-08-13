import knex from 'knex';

const db = knex({
    client: 'mysql2',
    connection:{
        host: process.env.HOST_NAME,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
})

export default db;