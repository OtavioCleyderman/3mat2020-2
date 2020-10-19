/*
    PILHA
    - É uma estrutura de dados do tipo lista linear, mas de acesso restrito
    - Princípio de funcionamento: LIFO (Last In, First Out)  - o último a entrar
      é o primeiro a sair
    - Todas as operações são realizadas na parte final da estrutura de armazenamento
*/

let texto = 'AS ARMAS E OS BARÕES ASSINALADOS QUE DA OCIDENTAL PRAIA TAPROBANA'

let pilha = []

for(let i = 0; i < texto.length; i++) {
    // Inserindo na pilha: SEMPRE no final, usando push()
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let invertido = ''

while(pilha.length > 0) { // Enquanto a pilha não estiver vazia
    // Retirando da pilha: SEMPRE do final, usando pop()
    invertido += pilha.pop()
}
console.log(invertido)
