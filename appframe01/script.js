function sendMessage() {
    var message = document.getElementById('message').value;

    // Dispara uma mensagem para o frame pai
    // O * é a origem (domínio) da mensagem (Verificar no App00)
    window.parent.postMessage(message, '*');    
}