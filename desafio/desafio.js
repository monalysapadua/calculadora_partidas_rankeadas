/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/




// Função para calcular saldo e determinar o nível
function calcularSaldoERank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;
  
    // Determina o nível com base no número de vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Retorna a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível ${nivel}.`;
  }
  
  // Exemplo de uso da função com retorno
  let vitorias = 100; // Substitua pelos valores desejados
  let derrotas = 20;
  
  // Armazenando o resultado retornado
  let resultado = calcularSaldoERank(vitorias, derrotas);
  
  // Exibindo o resultado no console
  console.log(resultado);  
  
