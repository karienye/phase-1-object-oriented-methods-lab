function BoardMember(name, homeState, training) {
    this.name = name,
    this.homeState = homeState,
    this.training = training
}
BoardMember.prototype.veto = function() {
    console.log(`No, I must disagree`);
  };
  BoardMember.prototype.approve = function () {
    console.log(`You can do that!`);
  };
  BoardMember.prototype.docharity = function () {
    console.log(`I like to help people.`);
  };
  BoardMember.prototype.realeasePressStatement = function () {
    console.log(`You will see great things from scuber.`);
  };
  BoardMember.prototype.sayHi = function () {
    console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`);
  };

  const sarah = new BoardMember("sarah", "kajiado", "kajiado training");
const lauren = new BoardMember("Lauren", "thika", "thika training");

sarah.sayHi(); 
lauren.sayHi();