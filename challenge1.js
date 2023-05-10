/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */ 
function printName () {

 const myName = "abdulaziz adel alnaser";
 console.log (myName);
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(x){
   x = 2023 - x;
console.log (x)
}
 printAge(1983);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello (name , language) {
let message;
if (language === "english") {
    message = `Hello ${name}`;
  } else if (language === "espanish") {
    message = `Hola ${name}`
  } else if (language === "frinch") {
    message = `Bonjour ${name}`;
  }
 else { 
    message = `Marhaba ${name}`;
  }
  console.log (message);
}
printHello ('abdulaziz' , 'frinch');
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (a , b){
    let message1;
    if (a>b) {
        message1 = `${a}`;
      } else {
        message1 = `${b}`;
      }
      console.log (message1);
    }
printMax (2 , 5);
