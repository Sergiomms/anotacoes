class anotacoes {

    constructor (titulo, notas){

        if(typeof titulo != 'string' || typeof notas != 'string'){
            
            throw new Error('Criação de notas - dados inválidos');
            
        }else {

            this._titulo = titulo
            this._notas = notas
        }
    }
}

let anot = new anotacoes('teste', 2)

console.log(anot)