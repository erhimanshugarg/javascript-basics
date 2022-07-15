/**
 *  call() - It is useful when you want to invoke the function immediately and modify the context.
 *
 *  It invokes the function immediately and allows to pass the arguments one by one
 */

const printCallName = function (salutation, greeting) {
  console.log(
    `Hi ${salutation} ${this.firstName} ${this.lastName}, ${greeting}`
  );
};

const personNew = {
  firstName: 'Himanshu',
  lastName: 'Garg',
};

printCallName(); // "Hi undefined undefined undefined, undefined"

printCallName.call(personNew, 'Mr.', 'Good Morning'); // "Hi Mr. Himanshu Garg, Good Morning"
