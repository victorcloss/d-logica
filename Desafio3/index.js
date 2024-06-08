class hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
        console.log("O "+this.type+" atacou usando " + this.verfAttack(this.type))
    }
    verfAttack(type){
        switch(type){
            case "mago":
                return "magia"
            break
            case "guerreiro":
                return "espada"
            break
            case "monge":
                return "artes marciais"
            break
            case "ninja":
                return "shuriken"
            break
        }      
    }
}

let ninjaHero = new hero("Isac",20,"ninja")
let guerreiroHero = new hero("Arthur",23,"guerreiro")

ninjaHero.attack()
guerreiroHero.attack()
