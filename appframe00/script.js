// Adiciona um listner para ficar recebendo mensagem dos frames filhos
window.addEventListener('message', function (event) {
    // IMPORTANTE: Sempre verificar a origem da mensagem
    // if (event.origin.indexOf('http://dominioseguro.com')) { 
    
    // Obtem a referência do frame 02
    var frame02 = document.getElementById('iframe02').contentWindow;

    // Envia a mensagem a ele
    // *** Evitar uso do '*' como origem!
    frame02.postMessage(event.data, '*');

    /*
        Podemos serializar um objeto (JSON) como string e enviar por mensagem também!
    */
}); 