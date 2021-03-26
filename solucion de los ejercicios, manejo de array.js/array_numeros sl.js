

var myArrayNumeros= Array();

function registarNumero(){
    var num= parseInt(document.getElementById('num').value);
    myArrayNumeros.push(num);
    console.log(myArrayNumeros);
    document.getElementById('num').value='';
    document.getElementById('num').focus();
    listarNumero();
    operaciones();

}

function listarNumero(){
    var salida='';
    for(var pos=0; pos<=myArrayNumeros.length-1; pos++){
        salida+='<tr><td>'+myArrayNumeros[pos]+'</td></tr>';
        console.log(salida);
    }
    document.getElementById('cuerpo').innerHTML=salida;
}

function operaciones(){
    var salida1='';
    var sum=0;
    for(i in myArrayNumeros)
      sum+=myArrayNumeros[i];
    salida1+='<tr><td>'+'Suma'+'</td><td>'+sum+ '</td></tr>';
    salida1+='<tr><td>'+'Cantidad Elementos'+'</td> <td>'+myArrayNumeros.length+ '</td></tr>';
    salida1+='<tr><td>'+'numero mayor'+'</td><td>'+mayor_menor()[0]+ '</td></tr>';
    salida1+='<tr><td>'+'numero menor'+'</td><td>'+mayor_menor()[1]+ '</td></tr>';
    salida1+='<tr><td>'+'numero par'+'</td><td>'+par_impar()[0]+ '</td></tr>'; 
    salida1+='<tr><td>'+'numero impar'+'</td><td>'+par_impar()[1]+ '</td></tr>'; 
    salida1+='<tr><td>'+'multiplos de cinco'+'</td><td>'+multiplo5()+ '</td></tr>'; 
    salida1+='<tr><td>'+'multiplos de tres'+'</td><td>'+multiplo3()+ '</td></tr>'; 
    salida1+='<tr><td>'+'promedio'+'</td><td>'+promedio()+ '</td></tr>';
    document.getElementById('cuerpo1').innerHTML=salida1;
}
 
function mayor_menor(){
    
    var ma=null;
    for(var i=0; i<myArrayNumeros.length; i++ ){
        if( ma < myArrayNumeros[i]) {
            ma = myArrayNumeros[i];
        }
    }

    var me=20000000000;
    for(var i=0; i < 10; i++ ){
        if( me > myArrayNumeros[i]) {
            me = myArrayNumeros[i];
        }
    }
   return [ma,me]; 
}

function par_impar(){
    var contPar=0;  
    var contImp=0;
    igua=myArrayNumeros
for(i in igua){
    if(igua[i] %2 ==0){
        contPar++;   
    }else{
        contImp++;   
    }
}

return [contPar,contImp];     
}

function multiplo5(){
   var conta=0;
   for(i in myArrayNumeros){
       if(myArrayNumeros[i] % 5==0 )
          conta++; 
       
   }
   return conta;
}

function multiplo3(){
    var contar=0;
    for(i in myArrayNumeros){
        if(myArrayNumeros[i] % 3==0 )
           contar++;
           
    }
    return contar;
 }

 function promedio(){
     var conter=-1;
     for(i in myArrayNumeros){
         if( conter+=myArrayNumeros[i] / myArrayNumeros[i]);
         
     }
     return conter;
 }
