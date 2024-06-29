document.getElementById("botao-copiar").style.display = "none";
document.getElementById("resposta-verso").style.display = "none";

var botaoDeCriptografar = document.getElementById("botao-criptografar");
var botaoDeDescriptografar = document.getElementById("botao-descriptografar");
var botaoDeCopiar = document.getElementById("botao-copiar");

function aparecerTexto() {
    document.getElementById("resposta-frente").style.display = "none";
    document.getElementById("botao-copiar").style.display = "block";
    document.getElementById("resposta-verso").style.display = "block";
}

function criptografarTexto(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    texto = texto.toLowerCase();

    let textoCriptografado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (substituicoes.hasOwnProperty(letra)) {
            textoCriptografado += substituicoes[letra];
        } else {
            textoCriptografado += letra;
        }
    }

    return textoCriptografado;
}

function descriptografarTexto(textoCriptografado) {
    const regrasSubstituicao = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const palavrasCriptografadas = textoCriptografado.split(' ');
    const palavrasDescriptografadas = palavrasCriptografadas.map((palavra) => {
        return palavra.replace(/enter|imes|ai|ober|ufat/g, (match) => {
            return regrasSubstituicao[match];
        });
    });

    return palavrasDescriptografadas.join(' ');
}

botaoDeCriptografar.addEventListener('click', function () {
    aparecerTexto();
    var mensagem = document.querySelector(".mensagem").value;
    let resposta = criptografarTexto(mensagem);
    document.getElementById("resposta-verso").value = resposta;
});

botaoDeDescriptografar.addEventListener('click', function () {
    aparecerTexto();
    var mensagem = document.querySelector(".mensagem").value;
    let resposta = descriptografarTexto(mensagem);
    document.getElementById("resposta-verso").value = descriptografarTexto(resposta);
});

function copiar() {
    let resposta = document.getElementById("resposta-verso");
    navigator.clipboard.writeText(resposta.value).then(() => {
        alert("TEXTO COPIADO!");
    });

}

