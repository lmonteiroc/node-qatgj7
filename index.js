// run `node index.js` in the terminal
// principais estruturas de dados
/*const souCasadoComAregi = true;
const anoNascimento = 1980;
const media = (7+8+9+10) / 4;
const nome = 'Luciano';
let idade = null;
const filho
const numeroGrande = 12348887697865765n;
const numeroGrande2 = BigInt("12348887697865765n");
const meuObjeto = {
  curso: " Estrutura de dados",
  instrutores: "Gabriel"
}
console.log(numeroGrande2);*/

const saldoRegi = 10000;
const saldoLuciano = 1500;
const Saldototal = saldoRegi + saldoLuciano;
console.log(Saldototal);

const saldoContas = [100, 200, 300, 200, 120, 130, 10.9];
const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);

let meuArray = ['Luciano', 'Regi'];
let meuArray2 = new Array();
let meuArray3 = new Array('Luciano');

console.log(meuArray);
console.table(meuArray);
console.table(meuArray3);
console.table(meuArray2);

//add novos elementos no array
//obs: o array pode ser escrito das seguintes formas -> const meuArray [conteudo] (pode ser let, var ou const) ou let meuArray = new Array (conteudo)
// o push add um novo conteudo no array sem ter que modificar a estrutura do array original
//console.table add o conteudo do array dentro de uma tabela, fica mais amigável
let frutas = new Array('abacaxi');
frutas.push('banana');
frutas.push('maçã');
frutas.push('morango');
//unshift add o item na posição 0
frutas.unshift('abacate');
// pop remove o ultimo ítem do array
frutas.pop();
// shift remove o primeiro ítem
frutas.shift();
// splice permite escolher o item que será removido conforme sua posição
const frutaRemovida = frutas.splice(2, 1, 'caqui');
console.table(frutas);

console.table(frutas);
