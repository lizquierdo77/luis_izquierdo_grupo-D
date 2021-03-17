var personas = [];
  var contenido = '';
  var pos_edicion = -1;
  
  var b_guardar = document.getElementById("b_guardar");
  var b_editar = document.getElementById("b_editar");
  b_editar.style.display = "none";

 function guardar(){
     
     var persona = new Object();
     persona.nombre  = document.getElementById("nombre").value;
     persona.apellido = document.getElementById("apellido").value;
     persona.cedula = document.getElementById("cedula").value;
     persona.edad  =document.getElementById("edad").value;
     
     if ((persona.nombre != '') && (persona.apellido != '') && (persona.cedula != '') && (persona.edad != ''))
      {
        personas.push(persona);
        limpiar();
        console.log(personas);
        listar();
      }
     
     
     
 }
 
 function listar(){
     
           contenido = `<table border=1><tr><td> Nombre </td>
                           <td> Apellido </td>
                           <td> cedula </td>
                           <td> Edad </td>
                           <td> Operacion </td>
                           </tr>`;
             personas.forEach(texto);
             contenido += "</table>";
             document.getElementById("salida").innerHTML = contenido;
                        
 
 }
 function texto(value,index){
  
          
  contenido += "<tr><td>" + value.nombre + "</td><td>" + value.apellido + "</td> <td>" + value.cedula + "</td>  <td>" + value.edad + "</td><td><center><span onclick=eliminar("+ index + ")  class='glyphicon glyphicon-trash margen' ></span>" +
                                "<span onclick=editar("+ index + ")  class='glyphicon glyphicon-pencil' ></span></td></tr>"; 
                             
 }

 function eliminar(i){
   personas.splice(i,1);
   listar();

 }

 function limpiar(){
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("cedula").value = '';
    document.getElementById("edad").value = '';
 }

function editar(pos)
{
    document.getElementById("nombre").value =  personas[pos].nombre;
    document.getElementById("apellido").value = personas[pos].apellido;
    document.getElementById("cedula").value = personas[pos].cedula;
    document.getElementById("edad").value = personas[pos].edad;
    
    b_guardar.style.display = "none";
    b_editar.style.display = "block";
    pos_edicion = pos;
  
}

function proce_editar(){
  b_guardar.style.display = "block";
    b_editar.style.display = "none";
     var persona = new Object();
     persona.nombre  = document.getElementById("nombre").value;
     persona.apellido = document.getElementById("apellido").value;
     persona.cedula = document.getElementById("cedula").value;
     persona.edad  =document.getElementById("edad").value;
     personas[pos_edicion] = persona;
     limpiar();
     listar();
    
}
  

