/*
Escribir una funcion que al pasarle un numero:
    - Muesta "fizz" si es multiplo de 3.
    - Muestra "buzz" si es multiplo de 5.
    - Muestra "fizzbuzz" si es multiplo de 3 y 5.
    - Muestra el numero si no es multiplo de ninguno de los anteriores.
*/

const notNumberError = "parameter provided must be a number";

// const fizzbuzz = (number) => {
//   if (typeof number !== "number" || Number.isNaN(number))
//     throw new Error(notNumberError);
//   if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
//   if (number % 3 === 0) return "fizz";
//   if (number % 5 === 0) return "buzz";
//   return number;
// };

// Refractorization
const fizzbuzz = (number) => {
  if (typeof number !== "number" || Number.isNaN(number))
    throw new Error(notNumberError);

  const multiplies = { 3: "fizz", 5: "buzz" };
  let output = "";

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });

  return output === "" ? number : output;
};

export { notNumberError, fizzbuzz };
