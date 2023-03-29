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

/* Esercizio 4 */

/* Vecchio codice
function divisibleSumPairs(n, k, ar) {
    
    let counter = 0;
    
    for (let i = 0; i <= n; i++) {
        const copy = [...ar];
        let first_number = copy[i];
        copy.splice(i, 1);
        
        for (const second_number of copy){
            if (first_number < second_number) {
                let sum = first_number+second_number;
                if (sum % k == 0){
                    counter++;
                }
            }
        }
    }
    
    return counter;

}
*/

function divisibleSumPairs(n, k, ar) {
    
    let counter = 0
    
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n ; j++){
               
            if((ar[i] + ar[j]) % k == 0){
                counter++;
            }
        }
    }
    
    return counter;

}

/* Esercizio 5 */

function compareTriplets(a, b) {
    let Alice_points = 0;
    let Bob_points = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            Alice_points++;
        } else if(a[i] < b[i]){
            Bob_points++;
        }
    }
    
    const result = [Alice_points, Bob_points];
    return result;
}

/* Esercizio 6 */
