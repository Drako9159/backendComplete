const bcryptjs = require("bcryptjs");

async function encrypt(passwordPlain) {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
}

async function compare(passwordPlain, hashPassword) {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = { compare, encrypt };
