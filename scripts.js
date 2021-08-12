nome = prompt( 'Informe o seu nome:', '' );
alert( 'Bem Vindo ' + nome + '!' );
sobrenome = prompt( 'Informe o seu sobrenome:', '' );
idade = prompt( 'Informe o sua idade:', '' );
console.log( 'Seu nome é: ' + nome + '\n Seu Sobrenome: ' + sobrenome + '\n Sua Idade: ' + idade );
function Pessoa(nome, sobrenome, idade) {
this.nome = nome;
this.sobrenome = sobrenome;
this.idade = idade;
}
var me = new Pessoa(nome, sobrenome, idade);
console.table(me);