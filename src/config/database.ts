import { Pool } from "pg"

// Estendendo o escopo global
declare global {
    var connection: Pool | undefined
}

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
})

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }

    const client = await pool.connect()
    console.log("Criou o pool de conexão")

    const res = await client.query("select now()")
    console.log(res.rows[0])
    client.release()

    global.connection = pool

    return pool.connect()
}


export { connect }
