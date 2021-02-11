console.log("MOEEZ")

let max = Math.max(1,2,3,4,44);

console.log(max)


function sum1 ( a , b ) {
    return a + b ;

}

myArray = [5 , 5]
console.log(sum1(myArray))  // type of data plugged-in is not matched 

some_array  = [ 6, 5]

console.log(sum1(...some_array)) // this is a spread operator 


function infinite_sum(...args) {
    let sum = 0 ; 

    for ( const arg of args){

        sum += args;
    }

    return sum ;
}
console.log(infinite_sum(1,2,3,4))