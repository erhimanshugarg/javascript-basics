/**
 *  apply() - It is useful when you want to invoke the function immediately and modify the context
 *
 *  It invokes the function immediately and allows you to pass the arguments as Array ( list of arguments )
 *
 *  only different between apply and call is the way you pass the arguments
 */

const printApplyName = function (salutation, greeting) {
  console.log(
    `Hi  ${salutation} ${this.firstName} ${this.lastName}, ${greeting}`
  );
};

const personApply = {
  firstName: 'Himanshu',
  lastName: 'Garg',
};

printApplyName('Mr.', 'Good Morning'); // "Hi Mr. undefined undefined, Good Morning"

printApplyName.apply(personApply, ['Mr.', 'Good Morning']);
