--Tratamento de dados:

- Comentarios:
:
-/*comentarios em CSS*/
<!--comentario em HTML-->
// comentario em JavaScript

-- Simbolo de +:

- conctenação:

- Ele vai passar a ser Concatenação quando esta assim (string + string)

Ex:
- var nome = window.prompt('qual o seu nome') // o comando esta como string então é concatenação
window.alert('é um grande praser em te conhecer,' + nome)

- Soma:

- Ele vai passar a ser Soma quando esta assim (number + number)

Ex:
    var n1 = Number.parseInt(window.prompt('Digite um numero')) // o comando foi convertido para number então é soma
    var n2 = Number.parseInt(window.prompt('DIgite outro numero'))
    var s = n1 + n2 
    window.alert('A soma dos valores é' + s)
    
- Conversores de strings : 
Number.parseInt(n) = para numeros inteiros 
Number.parseFloat(n) = para numeros reais ou quebrados 
Number(n) = o computador que decide se é real ou inteiro (SE VIRA !)
String(n) = converte de number para string

-Formatando strings:

var s = 'JavaScript'

'Eu estou estudano s' // Não faz interpolação (não funciona)
'Eu estou estudano' + s // usa concatenação (funciona se for apenas strings)
`Eu estou estudano ${s}` // usa template string (funciona mais tem que usar crase ao inves de aspas)
s.length // quantos caracteres a string tem 
s.toUpperCase() //tudo para maiúsculas 
s.toLowerCase() //tudo pra minúsculas 

-Formatando numeos:

var n1 = 1543.5
n1
n1.toFixed(2) //deixa o numero com duas casas





