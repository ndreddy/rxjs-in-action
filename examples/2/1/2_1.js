/**
 *  RxJS in Action
 *  Listing 2.1
 *  @author Paul Daniels
 *  @author Luis Atencio
 *
 *  Write a functional program that takes an array of numbers, extracts the even numbers, computes their squares, and sums their total.
 *  In this example, because these operations are side effect–free, this program will always produce the same value (220),
 *  given the same input array.
 * to write this program using a non-functional or imperative approach, you’ll probably need to write a loop,
 * a conditional statement, and a few variables to keep track of things. FP, on the other hand, raises the level of
 * abstraction and encourages a style of declarative coding that clearly states the purpose of a program, describing
 * what it does and not how it does it.
 *
 * using const to safeguard the variable’s reference
 *
 * JavaScript also has support for a versatile array data structure with methods such as map, reduce, filter, and others.
 * These are known as higher-order or first-class functions, and they’re one of the most important functional qualities
 * in the language, allowing you to express JavaScript programs in an idiomatic way. A higher-order function is defined
 * as one that can accept as argument as well as return other functions;
 */
const isEven = num => num % 2 === 0;
const square = num => num * num;
const add = (a, b) => a + b;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.filter(isEven).map(square).reduce(add);  //-> 220
console.log(result);
