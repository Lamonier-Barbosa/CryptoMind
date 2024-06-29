document.getElementById("botao-copiar").style.display = "none";
document.getElementById("resposta-verso").style.display = "none";

var botaoDeCriptografar = document.getElementById("botao-criptografar");
var botaoDeDescriptografar = document.getElementById("botao-descriptografar");
// var mensagem = document.querySelector(".mensagem").value;
// var resposta = document.getElementById("resposta-verso").value
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

// function descriptografarTexto(texto) {
//     const alfabeto = "abcdefghijklmnopqrstuvwxyz";
//     const chave = 1; // Número de posições para deslocar

//     let resultado = "";

//     for (const caractere of texto) {
//         if (caractere.match(/[a-zA-Z]/)) {
//             const indice = alfabeto.indexOf(caractere.toLowerCase());
//             const novoIndice = (indice - chave + alfabeto.length) % alfabeto.length;
//             const novoCaractere = alfabeto[novoIndice];
//             resultado += caractere === caractere.toUpperCase() ? novoCaractere.toUpperCase() : novoCaractere;
//         } else {
//             resultado += caractere;
//         }
//     }

//     return resultado;
// }

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
    console.log(resposta)
});

botaoDeDescriptografar.addEventListener('click', function () {
    aparecerTexto();
    var mensagem = document.querySelector(".mensagem").value;
    let resposta = descriptografarTexto(mensagem);
    document.getElementById("resposta-verso").value = descriptografarTexto(resposta);
    console.log(resposta)
});

