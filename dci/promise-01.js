/*
Making Promises
Soooooo.....
This is the first set of exercises on promises.
A Promise is a mechanism frequently used in JavaScript to handle asynchronous
processes; that is, promises are how we reason about the business of waiting.
From a somewhat mechanical perspective, promises are simple state machines
with three possible states:
    Pending
    Resolved
    Rejected
Resolved and rejected are final states, which means that once a promise gets
to one of these states, it absolutely cannot go to any other state.
Pending can go either way. A promise that is either resolved or rejected
may also have a payload, a value that it carries. It's a little like an array
that can only contain one value. It's entirely possible that that value will
be undefined, but that's still a value.
How we access these values is the subject of a future chapter of exercises.
For now, we're going to focus on the mechanisms for making promises.
*/

/*
    Exercise 1
    Use Promise.resolve(value) to create a promise that will resolve
    with the value 3.

    Exercise 2
    Use Promise.reject(error) to create a promise that will reject with the
    string "Boo!"
*/
let promise = new Promise((resolve, reject) => {
  resolve(3);
  reject('Boo!');
});

promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/*
Exercise 3
You have the outline of a function makePromiseWithConstructor(itShouldResolve)
Use the Promise constructor to create a promise that will:
    resolve if itShouldResolve is truthy
    reject if itShouldResolve is falsy
*/
function makePromiseWithConstructor(itShouldResolve) {
  let promise = new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve('Success! It is truthy');
    } else {
      reject('Error! It is falsy');
    }
  });

  promise
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

makePromiseWithConstructor(false);

// Solution 2: Using the technique from ex4
function makePromiseWithConstructorV2(itShouldResolve) {
  return new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
}

makePromiseWithConstructorV2(false)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

/*
Exercise 4
This is a common use of the Promise constructor. If you want to simulate waiting 
for a value, a common technique is to create a function like the following. 
It simply accepts a value, and a delayInMs, then returns a promise that will resolve with 
that value after that delay.
*/

function delayMe(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

delayMe('Hello', 3000).then((value) => console.log(value));
