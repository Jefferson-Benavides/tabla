const entradaNumero = document.getElementById('entradaNumero');
const botonCalcular = document.getElementById('botonCalcular');
const botonLimpiar = document.getElementById('botonLimpiar');
const cuerpoTablaResultado = document.getElementById('cuerpoTablaResultado');
const contenedorResultado = document.getElementById('contenedorResultado');

entradaNumero.addEventListener('input', () => {
  const esValido = entradaNumero.checkValidity();
    botonCalcular.disabled = !esValido;
      botonLimpiar.disabled = !esValido;
      });

      document.getElementById('formularioMultiplicacion').addEventListener('submit', (evento) => {
        evento.preventDefault();
          const numero = parseInt(entradaNumero.value);

            fetch('/multiplicacion', {
                method: 'POST',
                    headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                              },
                                  body: `numero=${numero}`,
                                    })
                                        .then((respuesta) => respuesta.json())
                                            .then((datos) => {
                                                  cuerpoTablaResultado.innerHTML = '';
                                                        datos.forEach((entrada) => {
                                                                const fila = document.createElement('tr');
                                                                        const [operandos, resultado] = entrada.split('=');
                                                                                const [a, b] = operandos.split('x');
                                                                                        fila.innerHTML = `
                                                                                                  <td>${a.trim()}</td>
                                                                                                            <td>x</td>
                                                                                                                      <td>${b.trim()} = ${resultado.trim()}</td>
                                                                                                                              `;
                                                                                                                                      cuerpoTablaResultado.appendChild(fila);
                                                                                                                                            });
                                                                                                                                                  contenedorResultado.style.display = 'block';
                                                                                                                                                      })
                                                                                                                                                          .catch((error) => {
                                                                                                                                                                console.error(error);
                                                                                                                                                                    });
                                                                                                                                                                    });

                                                                                                                                                                    botonLimpiar.addEventListener('click', () => {
                                                                                                                                                                      entradaNumero.value = '';
                                                                                                                                                                        cuerpoTablaResultado.innerHTML = '';
                                                                                                                                                                          contenedorResultado.style.display = 'none';
                                                                                                                                                                          });
                                                                                                                                                                          
