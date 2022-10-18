const {client} = require('dotenv');
const bdConfig = require('pg');

async function getConexao ()
{
    if (global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;

    try
    {
        const conexao = await mysql.createConnection (bdConfig);
        global.conexao = conexao;
        return conexao;
    }
    catch (erro)
    {
        return null;
    }
}

async function estrutureSe ()
{
    const conexao = await getConexao ();
    if (conexao==undefined) return null;

    const sql = 'CREATE TABLE IF NOT EXISTS academias (codigo TINYINT UNSIGNED, nome VARCHAR(60) NOT NULL, cep INT NOT NULL, numero INT NOT NULL, complemento (VARCHAR), email (VARCHAR), turno (VARCHAR), PRIMARY KEY (codigo))';
    
    try
    {
        await conexao.query (sql);
        return true;
    }
    catch (erro)
    {
        return false;
    }
}

module.exports = {getConexao, estrutureSe}
