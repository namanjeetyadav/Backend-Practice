class Animal {
  constructor(name){
    this.name = Animal.capitalize(name)
  }

  walk(){
     alert("Animal " + this.name + " is walking")
  }

  run(){
    alert("Animal " + this.name + " is running")
  }

  static capitalize(name){
   return name.charAt(0).toUpperCase() +  name.substr(1, name.length)
  }
}

a = new Animal("jakky")
a.walk() 
a.run()