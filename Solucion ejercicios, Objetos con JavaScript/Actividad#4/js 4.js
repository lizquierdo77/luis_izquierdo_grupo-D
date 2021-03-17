
function agregar_producto(){

    var articulo = document.getElementById("articulo");
    var precio = document.getElementById("precio");
    var cantidad= document.getElementById("cantidad");

    var datos = document.getElementById("tabla_productos");

    var grantotal = Number(precio.value) * Number(cantidad.value);

    datos.innerHTML = datos.innerHTML + "<tr><td>"+articulo.value+"</td><td>"+precio.value+"</td><td>"+cantidad.value+"</td><td name='subtotal'>"+grantotal+"</td></tr>";
   
    calcular_total();
    limpiarCaja();
}
function calcular_total(){
    
    var subtotales = document.getElementsByName('subtotal');
    var total = document.getElementById('total');

    var suma = 0;

    for (var index = 0; index < subtotales.length; index++) {
        suma = suma + Number(subtotales[index].innerText)
        
    }

    total.innerText = ""+suma;
}

function limpiarCaja(){
    document.getElementById('articulo').value='';
    document.getElementById('precio').value='';
    document.getElementById('cantidad').value='';
    document.getElementById('articulo').focus();
}