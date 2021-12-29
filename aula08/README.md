#Operadores 2

°OP Relacionais:

- 5 > 2 (true) 
- 7 < 4 (false)
- 8 >= 8 (true)
- 9 <= 7 (false)
- 5 == 5 (true)
- 4 != 4 (false)

- Exemplos: 

- preço >= 200.50       // O preço é maior ou igual a 200.50
- idade < 18            // A idade é menor do que 18 
- curso == 'JavaScript' // O curso é JavaScript
- n1 != n2              // n1 é diferente de n2 

- Identidade:

- 5 == 5    (true) = sao iguais(tem que ser igual do memo numero) 
- 5 == '5'  (true) = sao iguais do mesmo valor (tem que ser do mesmo valor)
- 5 === '5' (false) = sao de tipos diferentes  (tem que ser identicos de valor e tipo)
- 5 === 5   (true) = são identicos do mesmo valor e numero

°OP Logicos:

- ! (negação)    ex:(Quero uma caneta SO NAO PODE SER azul)
- && (conjunção) ex:(Quero uma caneta azul E uma vermelha)
- || (disjunção) ex:(Quero uma canea azul OU uma vermelha) 

- Negação: (Explicação: Dis não as coisas)

- ! true -> false (Algo não verdadeiro é falso)
  ! false -> true (Algo não falso é verdadeiro)
  
- Conjunção: (Explicação: Só esta certo se tiver as duas canetas)

-true && false -> true   (consegui as duas canetas)
-true && false -> false  (consegui apenas a caneta azul)
-false && true -> false  (consegui apenas a vermelha)
-false && false -> false (não consegui nem uma caneta) 

- disjunção: (Explicação: Só esta certo se tiver uma das canetas)

-true || true -> true    (consegui as duas canetas) 
-true || false -> true   (consegui a caneta azul)
-false || true -> true   (consegui a caneta vermelha)
-false || false -> false (não consegui nenhuma caneta)

- Exemplo:

- idade >= 15 && idade <=17       // A idade esta entre 15 e 17
- estado == 'RJ' || estado == 'SP'// O estado é RJ ou SP 
- salário > 1500 && sexo != 'M'   // O salário é acima de 1500 e não é homem

° Precedência:
- (), ** , / ... (Aritimeticos)
- >, <, >= ... (Relacionais)
-!  (Logicos)
-&& (Logicos)
-|| (Logicos)

°OP Ternario:

- 

