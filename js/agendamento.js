

/*Mensagem*/

function addedMsg(mensagem) {
    var Mensagens = document.querySelector('#Mensagens')

    const div = document.createElement("div");
    const texto = document.createTextNode(mensagem);
    div.appendChild(texto);
    div.setAttribute("class", "added_carrinho_message")

    Mensagens.appendChild(div);
}

// validação de formulário

var botao = document.querySelector('button')
/*if (botao.disabled) {
    addedMsg('desativado')
}*/



function input_verify() {
    var data = document.querySelector('#data').value
    var inputs = document.querySelectorAll('input')
    var _inputs = 0
    console.log(data, data.length)
    for (let index = 0; index < inputs.length-1; index++) {
        //console.log(inputs[index].value);
        if (inputs[index].value != '') {
            _inputs += 1
        }

    }
    if (data.length != 0) {
        _inputs += 1
    }
    console.log(_inputs)
    if (_inputs == 6 && data != '') {
        botao.removeAttribute('disabled')
    }

}

setInterval(input_verify, 1000)




// função para remover as mensagens na div
function removerdisplay() {
    var menssagems = document.querySelectorAll('.added_carrinho_message')

    for (const menssagem of menssagems) {
        console.log('mensagem')
        menssagem.remove()
    }

}

/*data minima do formulário*/
const data = new Date();
var dateControl = document.querySelector('input[type="datetime-local"]');
//dateControl.value = '2017-06-01T08:30';
console.log(data.getFullYear(), data.getMonth()+1, data.getDate())
/*dateControl.value = `${data.getFullYear()}-0${data.getMonth()+1}-${data.getDate()}T08:30`;*/
dateControl2 = `${data.getFullYear()}-0${data.getMonth()+1}-${data.getDate()}T08:30`;
dateControl.setAttribute("min", `${dateControl2}`)
