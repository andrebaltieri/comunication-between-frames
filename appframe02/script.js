window.addEventListener('message', function(event) { 
    // Recebe a mensagem
    // IMPORTANTE: Sempre verificar a origem
    document.getElementById('result').innerHTML = event.data;    
}); 