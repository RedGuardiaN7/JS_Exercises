/* Esercizio 1 */

function reverseArray(a) {
    const reversedArray = a.reverse();
    return reversedArray;
}

/* Esercizio 2 */

function simpleArraySum(ar) {
    // Write your code here
    const sumWithInitial = ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,);
    return sumWithInitial;
}