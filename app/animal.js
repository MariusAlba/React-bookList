class Animal {
  constructor(name,height){
    this.name = name;
    this.height = height;
  }
  hello(){
    console.log(`hey ${this.name} how ${this.height} are you?`);
  }
}

export default Animal;
