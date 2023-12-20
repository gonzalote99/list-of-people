const arreglo = [];
function agregar() {
  let formulario = document.forms['form1'];
  let nombre = formulario["name"].value;
  let apellido = formulario["surname"].value;

  if(nombre&&apellido) {
    arreglo.push(new Persona(nombre, apellido))
    let i = document.createElement('li');
    let list = document.getElementById('list');
    i.innerHTML = nombre + ' ' + apellido;
    list.appendChild(i);

  }
}


function mostrar() {
let texto = '';

document.getElementById('list').innerHTML = texto
}

function eliminar() {

  document.getElementById('list').innerHTML = ''
}