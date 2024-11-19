//Dado um array de anos de nascimento [1990, 1985, 2000, 2010], use o método map para calcular as idades assumindo que o ano atual é 2024.
const anos =  [1990, 1985, 2000, 2010]

const idades = anos.map( valor => 2024 - valor )
console.log(idades)