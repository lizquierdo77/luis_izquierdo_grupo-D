var myArrayEst = []; //declaracción de Array de objetos

        var edi = -1;

        function buscar() {
            var op = document.getElementById('opciones').value;

            var bus = document.getElementById('busca').value;

            var objt = -1;

            switch (parseInt(op)) {
                case 1:
                    for (let index = 0; index < myArrayEst.length; index++) {
                        const student = myArrayEst[index];
                        if (student.cedula == bus) {
                            objt = index;
                            break;
                        }
                    }
                    break;
                case 2:
                    for (let index = 0; index < myArrayEst.length; index++) {
                        const student = myArrayEst[index];
                        if (student.nombre == bus) {
                            objt = index;
                            break;
                        }
                    }
                    break;
                case 3:
                    for (let index = 0; index < myArrayEst.length; index++) {
                        const student = myArrayEst[index];
                        if (student.apellido == bus) {
                            objt = index;
                            break;
                        }
                    }
                    break;
            }



            if (objt > -1) {
                document.getElementById('tbEdit').style.display = "block";
                document.getElementById('tbEdit').style.margin = "auto";
                document.getElementById('tbEdit').style.width = "340px";
                editar(objt);
            } else {
                document.getElementById('tbEdit').style.display = "none";
                alert("No se encontró");
                edi = -1;
            }
        }


        function editar(pos) {

            edi = pos;

            //eced, enom,  eape,  en1,  en2, en3

            cedula = myArrayEst[pos].cedula;
            nombre = myArrayEst[pos].nombre;
            apellido = myArrayEst[pos].apellido;
            n1 = myArrayEst[pos].n1;
            n2 = myArrayEst[pos].n2;
            n3 = myArrayEst[pos].n3;

            document.getElementById('eced').value = cedula;
            document.getElementById('enom').value = nombre;
            document.getElementById('eape').value = apellido;
            document.getElementById('en1').value = n1;
            document.getElementById('en2').value = n2;
            document.getElementById('en3').value = n3;

        }

        function saveEdit() {

            myArrayEst[edi].cedula = document.getElementById('eced').value;
            myArrayEst[edi].nombre = document.getElementById('enom').value;
            myArrayEst[edi].apellido = document.getElementById('eape').value;
            myArrayEst[edi].n1 = document.getElementById('en1').value;
            myArrayEst[edi].n2 = document.getElementById('en2').value;
            myArrayEst[edi].n3 = document.getElementById('en3').value;

            listadoEst();

            document.getElementById('tbEdit').style.display = "none";

        }
        var j = 0;
        function agregar() {
            var usuario = Object();
            usuario.cedula = document.getElementById('ced').value;
            usuario.nombre = document.getElementById('nom').value;
            usuario.apellido = document.getElementById('ape').value;
            usuario.n1 = document.getElementById('n1').value;
            usuario.n2 = document.getElementById('n2').value;
            usuario.n3 = document.getElementById('n3').value;
            myArrayEst.push(usuario); // insertar en array el estudiante
            limpiarCaja();
            listadoEst();

            if (j == 0) {
                document.getElementById('gar').style.display = "inline-block";
            }
            j++;
        }
        function limpiarCaja() {
            document.getElementById('ced').value = '';
            document.getElementById('nom').value = '';
            document.getElementById('ape').value = '';
            document.getElementById('n1').value = '';
            document.getElementById('n2').value = '';
            document.getElementById('n3').value = '';
            document.getElementById('ced').focus();
        }

        function listadoEst() {
            var salida = '';
            for (i in myArrayEst) {

                var nf = notaFinal(myArrayEst[i].n1, myArrayEst[i].n2, myArrayEst[i].n3);
                var clr = color(myArrayEst[i].n1, myArrayEst[i].n2, myArrayEst[i].n3);
                var est = estado(myArrayEst[i].n1, myArrayEst[i].n2, myArrayEst[i].n3);
                var rec = reconocimiento(myArrayEst[i].n1, myArrayEst[i].n2, myArrayEst[i].n3)
                var ce= colorestado(myArrayEst[i].n1, myArrayEst[i].n2, myArrayEst[i].n3)

                var arr = myArrayEst[i];

                salida += '<tr>'
                salida += '<td>' + arr.cedula + '</td>';
                salida += '<td>' + arr.nombre + '</td>';
                salida += '<td>' + arr.apellido + '</td>';
                salida += '<td>' + arr.n1 + '</td>';
                salida += '<td>' + arr.n2 + '</td>';
                salida += '<td>' + arr.n3 + '</td>';
                salida += '<td style="font - weight: bolder; color: ' + clr + '">' + nf + '</td > ';
                salida += '<td style="font - weight: bolder; color:' + ce + ' "> ' + est + ' </td>';
                salida += '<td>' + rec + '</td>';
                salida += '</tr>';
            }
            document.getElementById('cuerpo').innerHTML = salida;

            analisisEst();
        }

        function notaFinal(n1, n2, n3) {
            var def = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
            return parseFloat(def.toFixed(2));
        }

        function color(n1, n2, n3) {
            if (notaFinal(n1, n2, n3) >= 3) {
                return "blue";
            } else {
                return "red";
            }
        }

        function estado(n1, n2, n3) {
            var nf = parseFloat(notaFinal(n1, n2, n3));
            if (nf >= 3) {
                return "Aprobado" ;
            } else {
                return "Reprobado" ;
            }
        }
        function colorestado(n1, n2, n3){

        if (notaFinal(n1, n2, n3) >= 3) {
                return "blue" ;
            } else {
                return "red" ;
            }
        }
    
        function reconocimiento(n1, n2, n3) {
            var nf = parseFloat(notaFinal(n1, n2, n3));
            var reconocimiento;

            if (nf >= 0 && nf <= 1) {
                reconocimiento = "Deficiente";
            } else if (nf > 1 && nf < 3) {
                reconocimiento = "Insuficiente";
            } else if (nf >= 3 && nf <= 3.5) {
                reconocimiento = "Bueno";
            } else if (nf > 3.5 && nf <= 4) {
                reconocimiento = "Aceptable";
            } else if (nf > 4 && nf <= 4.5) {
                reconocimiento = "Sobresaliente";
            } else if (nf > 4.5 && nf <= 5) {
                reconocimiento = "Excelente";
            }
            return reconocimiento;
        }

        function analisisEst() {
            var salida1 = '';

            salida1 += "<tr>";
            salida1 += "<td>" + "Promedio del Curso" + "</td>";
            salida1 += "<td>" + promedioCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de aprobados" + "</td>";
            salida1 += "<td>" + aprobadosCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de reprobados" + "</td>";
            salida1 += "<td>" + reprobadosCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de deficientes" + "</td>";
            salida1 += "<td>" + deficientesCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de insuficientes" + "</td>";
            salida1 += "<td>" + insuficientesCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de buenos" + "</td>";
            salida1 += "<td>" + buenosCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de aceptables" + "</td>";
            salida1 += "<td>" + aceptablesCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de sobresalientes" + "</td>";
            salida1 += "<td>" + sobresalientesCurso() + "</td>";
            salida1 += "</tr>";

            salida1 += "<tr>";
            salida1 += "<td>" + "Número de excelentes" + "</td>";
            salida1 += "<td>" + excelentesCurso() + "</td>";
            salida1 += "</tr>";

            document.getElementById('cuerpo1').innerHTML = salida1;
        }



        function promedioCurso() {

            var suma = 0;

            for (let index = 0; index < myArrayEst.length; index++) {

                const student = myArrayEst[index]

                suma += notaFinal(student.n1, student.n2, student.n3);

            }

            return suma / myArrayEst.length;
        }

        function aprobadosCurso() {
            var apr = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];

                if (notaFinal(student.n1, student.n2, student.n3) >= 3) {
                    apr++;
                }
            }
            return apr;
        }

        function reprobadosCurso() {
            var repr = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];

                if (notaFinal(student.n1, student.n2, student.n3) < 3) {
                    repr++;
                }
            }
            return repr;
        }

        function deficientesCurso() {
            var deficientes = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Deficiente") {
                    deficientes++;
                }
            }
            return deficientes;
        }

        function insuficientesCurso() {
            var insuficientes = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Insuficiente") {
                    insuficientes++;
                }
            }
            return insuficientes;
        }

        function buenosCurso() {
            var buenos = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Bueno") {
                    buenos++;
                }
            }
            return buenos;
        }

        function aceptablesCurso() {
            var aceptables = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Aceptable") {
                    aceptables++;
                }
            }
            return aceptables;
        }

        function sobresalientesCurso() {
            var sobresalientes = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Sobresaliente") {
                    sobresalientes++;
                }
            }
            return sobresalientes;
        }

        function excelentesCurso() {
            var excelente = 0;

            for (let index = 0; index < myArrayEst.length; index++) {
                const student = myArrayEst[index];
                if (reconocimiento(student.n1, student.n2, student.n3) == "Excelente") {
                    excelente++;
                }
            }
            return excelente;
        }
