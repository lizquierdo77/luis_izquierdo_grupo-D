

        var salida='';
        function guardar(){
            var Datos=Object();
             Datos.nom=document.getElementById('nom').value;
             Datos.ape=document.getElementById('ape').value;
             Datos.ced= parseFloat(document.getElementById('ced').value);
             Datos.eda= parseFloat(document.getElementById('eda').value);
            console.log(Datos);
            console.log(Datos.ape);
            
            salida+='<tr><td>'+Datos.nom+'</td> <td>'+Datos.ape+'</td> <td>'+Datos.ced+'</td> <td>'+Datos.eda+'</td></tr>';
            document.getElementById('cuerpo').innerHTML=salida;
            limpiarCaja(); 
        }

        function limpiarCaja(){
            document.getElementById('nom').value='';
            document.getElementById('ape').value='';
            document.getElementById('ced').value='';
            document.getElementById('eda').value='';
            document.getElementById('nom').focus();
        }
      
