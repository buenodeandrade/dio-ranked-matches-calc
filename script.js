// Função para calcular o saldo e o nível do jogador
function calcularSaldoNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

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
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Lida com a submissão do formulário
document.getElementById('rankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let vitorias = parseInt(document.getElementById('vitorias').value);
    let derrotas = parseInt(document.getElementById('derrotas').value);

    // Calcula o saldo e o nível
    let resultado = calcularSaldoNivel(vitorias, derrotas);

    // Exibe a mensagem com o saldo e o nível
    document.getElementById("mensagem").innerText = `Você tem saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`;
    
    // Esconde o formulário após submissão
    document.getElementById('rankForm').style.display = 'none';
});

