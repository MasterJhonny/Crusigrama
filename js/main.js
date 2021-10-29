class Tabla {
    constructor(nombre, filas, columnas){
        this.nombre = nombre;
        this.filas = filas;
        this.columnas = columnas;
        this.valores = [];
        this.tabla = document.createElement('table');
        this.table = document.createElement('table');
        this.columna = null;
        this.celda = null;
        this.textoCelda = null;
        this.listaPalabra = null;
    }
    crear(){
        var { filas, valores, columnas, tabla, columna, celda, textoCelda } = this;
        var contador = 1;
        for(var i = 0; i < filas; i++){
            valores[i] = new Array(columnas);
        }
        for(var i=0; i < filas; i++){
            columna = document.createElement('tr');
            for(var j=0; j < columnas; j++){
                celda = document.createElement('td');
                textoCelda = document.createElement('input');
                textoCelda.type = 'text';
                textoCelda.style.width ='13px';
                textoCelda.id = `texto${contador++}`;
                celda.appendChild(textoCelda);
                columna.appendChild(celda);       
            }
            tabla.appendChild(columna);
        }
        entrada.appendChild(tabla);
        
    }
    llenar(){
        var { filas, columnas, valores } = this;
        var contador = 1;
        
        for(var i = 0; i < filas; i++){
            for(var j = 0; j < columnas; j++){
                var valor = document.getElementById(`texto${contador++}`);
                valores[i][j] = valor.value; //prompt('Ingresa una letra mayuscula:'); Math.floor(Math.random() * 10);
            }
        }
    }

    dibujar(){
        var { filas, valores, columnas, table, columna, celda, textoCelda } = this;
        var contador = 1;
        for(var i=0; i < filas; i++){
            columna = document.createElement('tr');
            for(var j=0; j < columnas; j++){
                celda = document.createElement('td');
                celda.style.width = '13px';
                celda.id = `letra${contador++}`;
                textoCelda = document.createTextNode(valores[i][j]);               
                celda.appendChild(textoCelda);
                columna.appendChild(celda);       
            }
            table.appendChild(columna);
        }
        salida.appendChild(table);
    }
    palabras(p){
        var { listaPalabra } = this;
        listaPalabra.push(p);

    }

    buscar(){
        var { filas, columnas, listaPalabra } = this;
        listaPalabra = plb.value;
        console.log(listaPalabra)
        var contador1 = 1;
        var contador2 = 1;
        for(var i = 0, log = filas*columnas; i < log; i++){
            var ltr = document.getElementById(`letra${contador1++}`);
            var ltra = document.getElementById(`texto${contador2++}`);
            var valor = ltra.value;
            for(let i = 0; i < listaPalabra.length; i++){
                if(valor === listaPalabra.charAt(i)){
                    ltr.style.backgroundColor = '#ffc996';
                }
            } 
        }
    }
    borrar(){
        var { filas, columnas } = this;
        var contador1 = 1;
        for(var i = 0, log = filas*columnas; i < log; i++){
            var ltr = document.getElementById(`letra${contador1++}`);
            ltr.style.backgroundColor = '#ffff';
        }
    }
}

var entrada = document.getElementById('entrada');
var boton = document.getElementById('boton');
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var salida = document.getElementById('salida');
var plb = document.getElementById('plb');

var letras = new Tabla('Letras', 21,18);
letras.crear();
//letras.llenar();
boton.addEventListener('click', function(){
    letras.llenar();
    // letras.palabras(prompt('Ingresa la palabra buscada: '));
    console.log(letras.valores);
    // salida.innerText = letras.valores;
    letras.dibujar();
    btn.addEventListener('click',function(){
        letras.buscar();
    });
    btn1.addEventListener('click',function(){
        letras.borrar();
    });
});











