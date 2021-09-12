alert("My first page JS")
var name = "Marcos Paulo" // Tipagem dinamica
var age = 21
var phrase = "Japão é melhor time do mundo!"
// Testando concatenação
alert("Welcome " + name + " você tem " + age + " anos")

// Exemplo de como usar o console.log (Visualização no console do navegador)
console.log(phrase)
// Utilizando o comando replace
console.log("Replace" + phrase.replace("Japão", "Brasil"))

// Uppercase para colocar todas as letras maiúsculas
console.log("Uppercase: " + phrase.toUpperCase())

// Lowercase para colocar todas as letras minúsculas
console.log("Lowecase: "+phrase.toLowerCase())

// Realizando operações matemáticas
var year = 2000
console.log(age + year)

// Trabalhando com listas
var list = ["Marcos Paulo", "Lucas", "João", "Pedro"]
console.log(list)
list.push("Maria") // insere um elemento no final da lista
console.log(list)
list.pop()      // remove o último elemento da lista
console.log(list)
// Tamanho da lista
console.log(list.length)

// Reverte a lista
console.log(list.reverse())

// Transformando lista para string
console.log(list.toString())

// Modificando separador da lista
console.log(list.join(" - "))

// Dicionário
var fruit = {
    nome: "Maçã",
    cor: "Vermelha"
}

console.log(fruit.cor)
console.log(fruit.nome)

// Lista de dicionários
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}]
console.log(frutas)
console.log(frutas[1].nome)

// Condicionais
var idade = prompt("Qual sua idade?") // Exibe uma caixa de texto para o usuário
if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}

// Laço de repetição
var count = 0
console.log("While")
while (count <= 5) {
    console.log(count)
    count++
}

count = 0
console.log("For")
for (count; count <= 5; count++) {
    console.log(count)
}

// Date
var date = new Date()
console.log(date)
console.log(date.getMonth() + 1) // Mês começa em 1
console.log(date.getDay()) // Dia da semana começa em 0
console.log(date.getDate()) // Dia do mês começa em 1
console.log(date.getFullYear()) // Ano
console.log(date.getHours()) // Hora
console.log(date.getMinutes()) // Minutos
console.log(date.getSeconds()) // Segundos

// Funções
function soma(n1, n2) {
    return n1 + n2
}

alert(soma(5, 10))

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))

function validaIdade(idade) {

    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))

var counter = 0
function clicked(){
    counter++
    alert("Obrigado por clicar " + counter + " vezes")

    document.getElementById("text").innerHTML = "Obrigado por clicar " + counter + " vezes"
}

// Redirecionamento para outra página
function redirect(){
    window.open("https://www.google.com") // abre outra janela
    window.location.href = "https://www.google.com.br" // abre na mesma janela
}

function over(){
    document.getElementById("write").innerHTML = "Obrigado por passar o mouse"
}

function mudar(){
    document.getElementById("write").innerHTML = "Mudooooou"
}

function mudarPorElemento(element){
    element.innerHTML = "Mudooooou"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(element){
    console.log(element.value)
}