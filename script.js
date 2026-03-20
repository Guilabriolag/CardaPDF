// Função para abrir o checkout
function abrirCheckout() {
    document.getElementById('modal-pay').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal-pay').style.display = 'none';
}

// Futura integração com seu QrFlux
function gerarLightning() {
    document.querySelector('.pay-options').style.display = 'none';
    document.getElementById('ln-area').style.display = 'block';
    console.log("Solicitando 10 sats para $Labriolag via Lightning Address");
}

function confirmarManual() {
    // Aqui você validaria o Hash SHA-256 ou o webhook do Mercado Pago
    alert("Pagamento em processamento! Em segundos o download iniciará.");
    // Chamar sua função original de download aqui:
    // exportarProjeto();
}
