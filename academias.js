const bd = require ('./bd');

async function inclua (academia)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql     = `INSERT INTO academias (codigo,nome,cep,numero,complemento,telefone,email,turno) VALUES (${codigo},'${nome}',${cep},${numero},${complemento},${telefone},${email},${turno})`;
        const dados   = [academia.codigo,academia.nome,academia.cep,academia.numero,academia.complemento,academia.telefone,academia.email,academia.turno];
        await conexao.query (sql, dados);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}

async function atualize (academia)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql   = 'UPDATE academias SET nome=$1,cep=$2,numero=$3,complemento=$4,telefone=$5,email=$6,turno=$7 WHERE codigo=$8';
        const dados = [academia.nome,academia.cep,academia.numero,academia.complemento,academia.telefone,academia.email,academia.turno,academia.codigo];
        await conexao.query (sql,dados);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}
    
async function remova (codigo)
{
    const conexao = await bd.getConexao ();
    if (conexao==null) return null;

    try
    {
        const sql   = `DELETE FROM academias WHERE codigo=${codigo}`;
        const dados = [codigo];
        await conexao.query (sql,dados);
        return true;
    }
    catch (excecao)
    {
        return false;
    }
}

async function recupereUm (codigo)
{
    const conexao = await bd.getConexao();
    if (conexao==null) return null;

    try
    {
        const  sql     = `SELECT * FROM academias WHERE codigo=${codigo}`;
        const  dados   = [codigo];
        const [linhas] = await conexao.execute(sql,dados);
        return linhas;
    }
    catch (excecao)
    {
        return false;
    }
}

async function recupereTodos ()
{
    const conexao = await bd.getConexao();
    if (conexao==null) return null;

    try
    {
        const  sql     = 'SELECT * FROM academias';
        const [linhas] = await conexao.query(sql);
        return linhas;
    }
    catch (excecao)
    {
        return false;
    }
}

module.exports = {inclua, atualize, remova, recupereUm, recupereTodos}



