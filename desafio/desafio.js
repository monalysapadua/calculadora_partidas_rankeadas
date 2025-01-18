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
  
