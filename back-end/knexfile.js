/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://bxcgjfdb:VgEPiKFgWZaedkmL8HVvV3cF5Vham1mt@bubble.db.elephantsql.com/bxcgjfdb",
  DATABASE_URL_DEVELOPMENT = "postgres://iefaqbly:YwuQCMKQFxhbVmQzLVpCTx87DARe3G7i@bubble.db.elephantsql.com/iefaqbly",
  DATABASE_URL_TEST = "postgres://rkgvnbyy:dKRkyR5pJnyFlpkpYiX0ET99Ivy3hH1a@bubble.db.elephantsql.com/rkgvnbyy",
  DATABASE_URL_PREVIEW = "postgres://nfiqlltf:GFENg5s4OrOq-lsoaH08Op6yCCl0UMRi@bubble.db.elephantsql.com/nfiqlltf",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
