// Taxas de câmbio fixas
const taxasDeCambio = {
    USD: { BRL: 5.30, EUR: 0.85 },
    BRL: { USD: 0.19, EUR: 0.16 },
    EUR: { USD: 1.18, BRL: 6.18 }
};

// Função de conversão
function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    if (moedaOrigem === moedaDestino) {
        document.getElementById("resultado").innerText = `O valor convertido é o mesmo: ${valor.toFixed(2)} ${moedaDestino}`;
        return;
    }

    const taxa = taxasDeCambio[moedaOrigem][moedaDestino];
    const valorConvertido = valor * taxa;

    document.getElementById("resultado").innerText = `O valor convertido é: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}