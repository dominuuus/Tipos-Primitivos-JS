//Atividade: Programas de fixação tipos primitivos

//1: Nome, Idade, Cidade
nome = "Domingos";
idade = "33";
cidade = "Paulista"
console.log("Olá! Meu nome é "+nome+" e tenho "+idade+" anos."+" "+"Eu moro na cidade de "+cidade)

//2: Operações básicas
const num1 = 30
const num2 = 20
const subtracao = (num1 - num2)
const adicao = (num1 + num2)
const multiplicacao = (num1 * num2)
const divisao = (num1 / num2)
console.log("O resultado da subtração de "+num1+" - "+num2+" = "+subtracao)
console.log("O resultado da adição de "+num1+" + "+num2+" = "+adicao)
console.log("O resultado da multiplicação de "+num1+" * "+num2+" = "+multiplicacao)
console.log("O resultado da divisão de "+num1+" / "+num2+" = "+divisao)
// Alternativo
console.log("Num 1: "+num1)
console.log("Num 2: "+num2)
console.log("Subtração: "+(num1-num2))
console.log("Adição: "+(num1+num2))
console.log("Multiplicação: "+(num1*num2))
console.log("Divisão: "+(num1/num2))

//Cálculo de área
const base = 5
const altura = 12
const area = (base * altura) / 2
console.log("O cálculo da área é o resultado da base ("+base+" cm) multiplicado pela altura ("+altura+" cm), dividido por 2. Sendo assim a área é: "+area+" cm")

//Cálculo de média
const aluno1 = 8.5
const aluno2 = 6
const aluno3 = 9
const media = (aluno1 + aluno2 + aluno3) / 3
console.log("As notas dos alunos foram: "+aluno1+" | "+aluno2+" | "+aluno3)
console.log("O resultado da média das três notas é: "+media)

// Programa de desconto
const preco_real = 5400
const perc_desconto = 10
const valor_desconto = preco_real * (perc_desconto / 100)
const valor_final = preco_real - valor_desconto
console.log("O preço médio do iPhone 15 é de R$ "+preco_real+" nas lojas digitais. Para pagamento à vista, é possível aplicar um desconto de "+perc_desconto+"%. Sendo assim, o consumidor teria um desconto de R$ "+valor_desconto+". O valor total a pagar ficaria em R$ "+valor_final+".")

// Imposto de Renda
const salario = 5400
const aliquota = 9
const deducao = salario * (aliquota / 100)
console.log("Salário Bruto: R$ "+salario)
console.log("Alíquota: "+aliquota+"% *")
console.log("Dedução: R$ "+deducao)
console.log("*Cálculo de alíquota realizado a partir do site da Receita Federal: https://www27.receita.fazenda.gov.br/simulador-irpf/")

// Conversor de moeda
const valor = 1200
const cambio = 5.45
const conversao_cambio = Math.round(valor / cambio)
console.log("Valor em R$ "+valor)
console.log("Câmbio: R$ "+cambio)
console.log("Valor após conversão em dólar: US$ "+conversao_cambio)

// Conversor de temperatura
const celsius = 40
const conversao_temperatura = (celsius * 9/5) + 32
console.log("Temperatura em Celsius: "+celsius+"º")
console.log("Temperatura correspondente em Fahrenheit: "+conversao_temperatura+"º")

// Calculadora IMC
const peso = 60
const alturaimc = 1.77
const imc = (peso / (alturaimc * alturaimc))
console.log("Peso: "+peso+" kg")
console.log("Altura: "+alturaimc+" m")
console.log("IMC: "+imc.toFixed(2))

