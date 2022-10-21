//Selectores Globales

const inputValid = document.querySelector('#input-val')
const enviar = document.querySelector('#enviar')
const formulario = document.querySelector('.formulario')

inputValid.addEventListener('change',(e) => {

    const resultado = e.target.value

    if(resultado.includes('@')){
        console.log('email valido');
        mostrarAlerta('Hemos enviado un mensaje a tu correo')
    }else{
        console.log('email NO valido');
        mostrarAlerta('Please enter a valid email address','error')
    }
})


function mostrarAlerta(mensaje, tipo){

    const mensajeAlerta = document.createElement('P')

    if(tipo){
        mensajeAlerta.textContent = mensaje
        mensajeAlerta.style.color = 'red'
        mensajeAlerta.classList.add('mt-1','mb-0','posic')
        inputValid.parentElement.appendChild(mensajeAlerta)
        setTimeout(() => {
            mensajeAlerta.textContent = ''
        },2000)
        return
    }
    mensajeAlerta.textContent = mensaje
    mensajeAlerta.style.color = 'green'
    mensajeAlerta.classList.add('mt-1','mb-0','posic')
    inputValid.parentElement.appendChild(mensajeAlerta)
    setTimeout(() => {
        mensajeAlerta.textContent = ''
    },2000)



}