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

/* Esercizio 3 */

function staircase(n) {
    
    for(let i = 1; i <= n; i++){
    let space = (n-i);
    let space_output = "";
    for (let j = 0; j < space; j++){
        space_output += " ";
    }
    
    let print_output = "";
    for (let j = 0; j < i; j++){
        print_output += "#"
    }
    
    console.log(space_output + print_output);
    }
}