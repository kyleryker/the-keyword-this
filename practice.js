//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
// It references an object for use in multiple ways, it must be given context, though
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
  //Explicit: using .call(), .bind() or .apply() to give the this keyword context.
  //Implicit: having a method within an object and calling the method, the this keyword will take it's parent object as context.
  //Default/window: not giving the this keyword context, which then applies it to the window.
  // New: Used with constructor functions, it applies the context of the this keyword to the new object being constructed.

  // 3) What is the difference between call and apply?

      //Answer
//call takes the object as an argument as well as more required arguments, separated by commas, apply takes the object and then an array of the remaining arguments as its second argument.
  // 4) What does .bind do?

      //Answer
// .bind explicitly gives the this keyword context to its given object but does not invoke it, instead using a variable to be invoked later

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {username:'kyleryker', email:'kyleryker@gmail.com', getUsername: function(){return this.username;}};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem
user.getUsername();

// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(name,brand,year){
  this.name = name;
  this.brand = brand;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    return this.move + 10;
  }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this



//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // nothing because this has not been given context so it will simply pull from the window.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
 // It is bound to the window... bad.

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
