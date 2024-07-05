const form = document.getElementById('form-pesquisa');

function validaNumero(a, b) {
    const valida = a < b;
    return valida;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomePesquisa = document.getElementById('nome')
    const numeroIdade = document.getElementById('idade');
    const primeiroValor = document.getElementById('campoA');
    const segundoValor = document.getElementById('campoB');
    const mensagemSucesso = 'Parabéns '+nomePesquisa.value+'! O segundo número digitado: '+segundoValor.value+', é maior que o primeiro número digitado: '+primeiroValor.value+'. Muito obrigado por responder à nossa pesquisa!';

    formEValido = validaNumero(primeiroValor.value, segundoValor.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomePesquisa.value = '';
        numeroIdade.value = '';
        primeiroValor.value = '';
        segundoValor.value = '';
        document.querySelector('.error-message').style.display = 'none';
        segundoValor.style.border = ''
    } else {
        segundoValor.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

segundoValor.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
        segundoValor.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        segundoValor.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})