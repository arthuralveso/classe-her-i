class Hero {
    nome
    idade
    tipo = 'mago' | 'guerreiro' | 'monge' | 'ninja'

    tipoAtaque = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken'
    }
    constructor(nome, idade, tipo) {
        this.idade = idade
        this.nome = nome
        this.tipo = tipo
    }

    atacar() {
        return `O tipo ${this.tipo} atacou usando ${this.tipoAtaque[this.tipo]}`
    }
}

const hero1 = new Hero('Sorc', '30', 'mago')
const hero2 = new Hero('Peba', '30', 'guerreiro')


console.log(hero1.atacar())
console.log(hero2.atacar())
