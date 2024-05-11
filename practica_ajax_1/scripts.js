var btnCargar = document.getElementById('cargar')

function cargarContenidoAjax(){
    //crear nuestro xmlhttprequest
    var xhr = new XMLHttpRequest

    //abrimos la conexion
    xhr.open("GET","prueba.txt",true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        if(xhr.readyState == 4 && xhr.status == 200){ 
            //4 para verificar que sea correcta y 200 para verificar que tengamos una respuesta
            console.log("se cargo correctamente");
        }
    }

    xhr.send();

    alert("funciona");
}

btnCargar.addEventListener('click',cargarContenidoAjax);