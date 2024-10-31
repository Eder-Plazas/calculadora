window.onload = function() {
    const resultado = document.getElementById('resultado');
    let operacion = '';
    let operandoAnterior = '';
    let operador = '';


    function actualizarResultado(valor) {
        resultado.value = valor;
    }


    function agregarValor(valor) {
        if (resultado.value === 'ERROR') {
            resultado.value = '';
        }
        resultado.value += valor;
    }


    document.getElementById('cero').addEventListener('click', () => agregarValor('0'));
    document.getElementById('uno').addEventListener('click', () => agregarValor('1'));
    document.getElementById('dos').addEventListener('click', () => agregarValor('2'));
    document.getElementById('tres').addEventListener('click', () => agregarValor('3'));
    document.getElementById('cuatro').addEventListener('click', () => agregarValor('4'));
    document.getElementById('cinco').addEventListener('click', () => agregarValor('5'));
    document.getElementById('seis').addEventListener('click', () => agregarValor('6'));
    document.getElementById('siete').addEventListener('click', () => agregarValor('7'));
    document.getElementById('ocho').addEventListener('click', () => agregarValor('8'));
    document.getElementById('nueve').addEventListener('click', () => agregarValor('9'));
    document.getElementById('punto').addEventListener('click', () => {
        
    });


    function operar(nuevoOperador) {
        if (resultado.value !== '') {
            if (operandoAnterior === '') {
                operandoAnterior = resultado.value;
            } else if (operador) {
                const resultadoOperacion = calcularResultado();
                if (resultadoOperacion !== 'ERROR') {
                    operandoAnterior = resultadoOperacion;
                    actualizarResultado(operandoAnterior);
                }
            }
            resultado.value = '';
            operador = nuevoOperador;
        }
    }


    document.getElementById('mas').addEventListener('click', () => operar('+'));
    document.getElementById('menos').addEventListener('click', () => operar('-'));
    document.getElementById('multi').addEventListener('click', () => operar('*'));
    document.getElementById('division').addEventListener('click', () => operar('/'));





    function calcularResultado() {
        let resultadoCalculo;
        const operandoActual = parseFloat(resultado.value);
        const operandoPrevio = parseFloat(operandoAnterior);

        if (isNaN(operandoActual) || isNaN(operandoPrevio)) {
            return 'ERROR';
        }

        switch (operador) {
            case '+':
                resultadoCalculo = operandoPrevio + operandoActual;
                break;
            case '-':
                resultadoCalculo = operandoPrevio - operandoActual;
                break;
            case '*':
                resultadoCalculo = operandoPrevio * operandoActual;
                break;
            case '/':
                if (operandoActual === 0) {
                    return 'ERROR';
                }
                resultadoCalculo = operandoPrevio / operandoActual;
                break;
            default:
                return 'ERROR';
        }
        return resultadoCalculo.toString();
    }


    document.getElementById('igual').addEventListener('click', () => {
        if (operador !== '' && resultado.value !== '') {
            const resultadoFinal = calcularResultado();
            actualizarResultado(resultadoFinal);
            operacion = '';
            
        }
    });
};