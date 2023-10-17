const inputNumero = document.getElementById('inputNumero');
const botonCalcular = document.getElementById('botonCalcular');
const botonLimpiar = document.getElementById('botonLimpiar');
const cuerpoTablaResultado = document.getElementById('cuerpoTablaResultado');
const contenedorResultado = document.getElementById('contenedorResultado');

inputNumero.addEventListener('input', () => {
  const esValido = inputNumero.checkValidity();
    botonCalcular.disabled = !esValido;
      botonLimpiar.disabled = !esValido;
      });

      document.getElementById('numAMultiplicar').addEventListener('submit', (e) => {
        e.preventDefault();
document.getElementById('spinner').style.display = 'block';
          const numero = parseInt(inputNumero.value);

            fetch('/multiplicacion', {
                method: 'POST',
                    headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                              },
                                  body: `numero=${numero}`,
                                    })
                                        .then((res) => res.json());
const spinnerTimeout = setTimeout(() => {
    document.getElementById('spinner').style.display = 'none';
  }, 3000);
                                           
 .then((datos) => {
  clearTimeout(spinnerTimeout);                                                cuerpoTablaResultado.innerHTML = '';
                                                        datos.forEach((entrada) => {
                                                                const fila = document.createElement('tr');
                                                                        const [a, x, b, e, r] = entrada.split(' ');
                                                                                
                                                                                        fila.innerHTML = `
                                                                                                  <td>${a.trim()}</td>
                                                                                                            <td>x</td>
                                                                                                                      <td>${b.trim()}</td>
                                                                                                                      <td>=</td>
                                                                                                                      <td> ${r.trim()}</td>
                                                                                                                              `;
                                                                                                                                      cuerpoTablaResultado.appendChild(fila);
                                                                                                                                            });
                                                                                                                                                  contenedorResultado.style.display = 'block';

                                                            botonCalcular.disabled = true;
                                                                                                                                                                          botonLimpiar.disabled = false;   
                                                                                     })
                                                                                                                                                          .catch((error) => {
 document.getElementById('spinner').style.display = 'none';                                                                                                                                                               
console.error(error);
                                                                                                                                                                    });
                                                                                                                                                                    });

                                                                                                                                                                    botonLimpiar.addEventListener('click', () => {
                                                                                                                                                                      inputNumero.value = '';
                                                                                                                                                                          botonCalcular.disabled = true;
                                                                                                                                                                          botonLimpiar.disabled = true;
                                                                                                                                                                        cuerpoTablaResultado.innerHTML = '';
                                                                                                                                                                          contenedorResultado.style.display = 'none';
                                                                                                                                                                          });
                                                                                                                                                                          
