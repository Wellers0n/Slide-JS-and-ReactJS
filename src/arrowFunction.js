let getName = (name) => {
    return `Hello ${name}`
}

getName("Wellerson"); // Wellerson

let sum = (x, y) => {
    return x + y
}

sum(2, 1) // 3

// function normal
let obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }, 1000);
    }
  };

  console.log(obj.counter()) //undefined


// What an arrow function resolve?
let obj2 = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    }
  };

  console.log(obj2.counter()) // 42