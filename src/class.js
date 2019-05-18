// Class
class Animal { 
    constructor(nome) {
      this.nome = nome;
    }
    
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
  }

  // Extends Animal
  class Dog extends Animal {
    falar() {
      console.log(this.nome + ' latidos.');
    }
  }

  let black = new Dog("black")
  console.log(black.falar()) // black latidos.

//   GETTERs AND SETTERs
class Thing {
    constructor(){
        this.valor = 0
    }
    
    get moeda() { // define the get moeda
      return "R$ " + this.valor.toFixed(2).replace(".",",");
    }
    get int() { // define the get
      return this.valor;
    }

    set int(i) {  // define the set
        this.valor = i;
    }
  }
  
 let thing = new Thing();

 console.log(thing.moeda) // R$ 0,00
 console.log(thing.int) // 0
 thing.int = 2
 console.log(thing.moeda) // R$ 2,00
 console.log(thing.int) // 2