const printName = function (greeting) {
  console.log(`Hi ${this.firstName} ${this.lastName}, ${greeting}`);
};

const person1 = {
  firstName: 'Himanshu',
  lastName: 'Garg',
};

const person2 = {
  firstName: 'User1',
  lastName: 'user1',
};

/**
 *  bind() - use this method when you any method to get called later with
 *  a certain context, useful in events
 *  It returns the function that when later executed will have correct context set for calling
 *  original function
 */
printName.bind(person1, 'Good Morning')(); // Hi Himanshu Garg, Good Morning

printName.bind(person2, 'Good evening')(); // Hi User1 user1, Good evening
