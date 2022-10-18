class Academia
{
    #codigo //id
    #nome
    #cep
    #complemento
    #complemento
    #telefone
    #email
    #turno

    constructor (codigo, nome, cep, numero, complemento, telefone, email, turno)
    {
        this.codigo=codigo;
        this.nome=nome;
        this.cep=cep;
        this.numero=numero;
        this.complemento=complemento;
        this.telefone=telefone;
        this.email=email;
        this.turno=turno;
    }

    get codigo ()
    {
        return this.#codigo
    }

    get nome ()
    {
        return this.#nome
    }

    get cep ()
    {
        return this.#cep
    }

    get numero ()
    {
        return this.#complemento
    }

    get complemento ()
    {
        return this.#complemento
    }

    get telefone ()
    {
        return this.#telefone
    }

    get email ()
    {
        return this.#email
    }

    get turno ()
    {
        return this.#turno
    }

    set codigo (codigo)
    {
        if (codigo===undefined || typeof codigo !== 'number' || isNaN(codigo) || codigo!==parseInt(codigo) || codigo<=0)
            throw ('Código inválido');

        this.#codigo = codigo;
    }

    set nome (nome)
    {
        if (nome===undefined || typeof nome !== 'string' || nome==="")
            throw ('Nome inválido');

        this.#nome = nome;
    }

    set cep (cep)
    {
        if (cep===undefined || typeof cep !== 'number' || isNaN(cep) || cep<=0)
            throw ('Cep inválido');

        this.#cep = cep;
    }

    set numero (numero)
    {
        if (numero===undefined || typeof numero !== 'number' || isNaN(numero) || numero<=0)
            throw ('Número inválido');

        this.#numero = numero;
    }

    set complemento (complemento)
    {
        if (complemento===undefined || typeof complemento !== 'string' || complemento==="")
            throw ('Complemento inválido');

        this.#complemento = complemento;
    }

    set telefone (telefone)
    {
        if (telefone===undefined || typeof telefone !== 'number' || isNaN(telefone) || telefone<=0)
            throw ('Telefone inválido');

        this.#telefone = telefone;
    }

    set email (email)
    {
        if (email===undefined || typeof email !== 'string' || email==="")
            throw ('E-mail inválido');

        this.#email = email;
    }

    set turno (turno)
    {
        if (turno===undefined || typeof turno !== 'number' || isNaN(turno) || turno<=0)
            throw ('Turno inválido');

        this.#turno = turno;
    }
}

function novo (codigo,nome,cep,numero,complemento,telefone,email,turno)
{
    return new Academia (codigo,nome,cep,numero,complemento,telefone,email,turno);
}

module.exports = {novo}
