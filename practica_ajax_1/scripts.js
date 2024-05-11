
//FUNCION PARA VERIFICAR EL TIPO DE NAVEGADOR QUE UTILIZAMOS PARA PODER CREAR UNA PETICION DE AJAX
function ejecutarAjax(){
    // var ajaxRequest;
    // if(window.XMLHttpRequest){
    //     ajaxRequest = new XMLHttpRequest();
    // }else{
    //     new ActiveXObject("microsoft.XMLHTTP");
    // }

    //si ajaxRequest.onreadystatechange == 0 --> no ha sido inicializada
    //si ajaxRequest.onreadystatechange == 1 --> ha sido establecida
    //si ajaxRequest.onreadystatechange == 2 --> ha sido enviada
    //si ajaxRequest.onreadystatechange == 3 --> esta siendo procesada
    //si ajaxRequest.onreadystatechange == 4 --> ha sido finalizada

    //si ajaxRequest.status == 200  --> fue exitosa
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange=function(){
        if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
            document.getElementById("info").innerHTML = ajaxRequest.responseText;
        }
    }

    ajaxRequest.open("GET","documento.txt",true); //peticion asincrona --> la patnall no sera recargada
    ajaxRequest.send();

}
