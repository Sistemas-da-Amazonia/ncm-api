import path from 'path';

module.exports = {
    client: 'mysql2',
    connection:{
      host: 'www.sistemasdaamazonia.com.br',
      user: 'siste619_ncm',
      password: 'siste619',
      database: 'siste619_NCM'
    },
    migrations:{
      directory: path.resolve(__dirname, "src", "database", "migrations")
    }
};
