// Estructura de datos para almacenar los clientes
var clientes = [];

// Función para agregar un cliente a la estructura de datos
function agregarCliente() {
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var compras = parseInt(document.getElementById("compras").value);

   // Validaciones
   if (nombre.trim() === "" || apellido.trim() === "" || isNaN(compras) || compras <= 0) {
      alert("Por favor, ingresa datos válidos.");
      return;
   }

   // Verificar si el código ya existe
   for (var i = 0; i < clientes.length; i++) {
      if (clientes[i].nombre === nombre && clientes[i].apellido === apellido) {
         alert("Ya existe un cliente con ese nombre y apellido.");
         return;
      }
   }

   // Agregar el cliente a la estructura de datos
   clientes.push({ nombre: nombre, apellido: apellido, compras: compras });

   // Limpiar los campos del formulario
   document.getElementById("nombre").value = "";
   document.getElementById("apellido").value = "";
   document.getElementById("compras").value = "";

   // Actualizar la tabla y mostrar los clientes
   mostrarClientes();
}

// Función para mostrar los clientes en el HTML
function mostrarClientes() {
   var mostrarDiv = document.getElementById("mostrar");
   mostrarDiv.innerHTML = "";

   if (clientes.length === 0) {
      mostrarDiv.innerHTML = "<p>No hay clientes registrados.</p>";
      return;
   }

   var tabla = document.createElement("table");
   tabla.border = "1";

   // Crear encabezados de la tabla
   var encabezados = ["Nombre", "Apellido", "Compras"];
   var encabezadosRow = document.createElement("tr");

   for (var j = 0; j < encabezados.length; j++) {
      var encabezadoCell = document.createElement("th");
      encabezadoCell.innerHTML = encabezados[j];
      encabezadosRow.appendChild(encabezadoCell);
   }

   tabla.appendChild(encabezadosRow);

   // Agregar filas con datos de clientes
   for (var k = 0; k < clientes.length; k++) {
      var cliente = clientes[k];
      var fila = document.createElement("tr");

      var nombreCell = document.createElement("td");
      nombreCell.innerHTML = cliente.nombre;
      // ... completar con las demás celdas (apellido, compras)

      fila.appendChild(nombreCell);
      // ... completar con las demás celdas (apellido, compras)

      tabla.appendChild(fila);
   }

   mostrarDiv.appendChild(tabla);
}

// Resto de las funciones: actualizarCliente(), eliminarCliente() y calcularPromedioCompras()
