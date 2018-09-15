// JavaScript Document

function nuevoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }

    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

var contAjax = 0;
function llamarAjax(strURL, strPARAM, objDestino, funcion, accion, idProgressBar) {
    strPARAM += "&credencial=" + document.getElementById("credencial").value +
            "&hdd_numero_menu=" + document.getElementById("hdd_numero_menu").value;
    try {
        eval("var xmlHttpReq" + contAjax + " = false;");
        eval("var self = this;");
        eval("self.xmlHttpReq" + contAjax + " = nuevoAjax();");
        eval("self.xmlHttpReq" + contAjax + ".open('POST', '" + strURL + "', true);");
        eval("self.xmlHttpReq" + contAjax + ".setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');");
        eval("self.xmlHttpReq" + contAjax + ".onreadystatechange = function() { if (self.xmlHttpReq" + contAjax + ".readyState == 4) { updateObj(self.xmlHttpReq" + contAjax + ".responseText, '" + objDestino + "'); eval('" + funcion + "'); } else { updateObj(\"<img src='../imagenes/ajax-loader.gif\'>\", '" + objDestino + "', self.xmlHttpReq" + contAjax + ".readyState); }}");
        /*Funcion para imprimir el porcentaje de carga del ajax*/
        if (typeof accion !== 'undefined' && typeof idProgressBar !== 'undefined') {
            globalIdProgressBar = idProgressBar;
            eval("self.xmlHttpReq" + contAjax + ".addEventListener('progress'," + barraProgreso + ", false);");
        }
        /*END*/
        eval("self.xmlHttpReq" + contAjax + ".send('" + strPARAM + "');");
        contAjax++;
    } catch (err) {
        //alert(err.message);
    }
}

function updateObj(str, objDestino) {
    try {
        if ("#" + objDestino == "#") {
        } else {
            document.getElementById(objDestino).innerHTML = str;
        }
        var elements = document.getElementsByTagName('script');
        var code = '';
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].id == "ajax") {
                code += elements[i].innerHTML;
                elements[i].id = "ajax_E" + contAjax;
            }
        }
        eval(code);
    } catch (err) {
        //alert(err.message);
    }
}

/*Función que */
function _(el) {
    return document.getElementById(el);
}

function barraProgreso(event) {
    //console.log("Uploaded " + event.loaded + " bytes of " + event.total);
    //_("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
    var percent = (event.loaded / event.total) * 100;
    document.getElementById("divBarraProgreso").classList.remove("visibleNone");
    _(globalIdProgressBar).style.width = percent + "%";
    _(globalIdProgressBar).innerHTML = Math.round(percent) + "%";
    //_("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
}


/*Test*/
var globalIdProgressBar = '';
function llamarAjaxUploadFiles(strURL, strPARAM, objDestino, funcion, idProgressBar, idInputFiles) {
    strPARAM += "&credencial=" + document.getElementById("credencial").value +
            "&hdd_numero_menu=" + document.getElementById("hdd_numero_menu").value;
    try {
        /*TRansforma el urlencoded recibido*/
        var urlParams = strPARAM.split("&");

        /*Asigna los valores en el array formData*/
        var formdata = new FormData();
        for (var i = 0; i < urlParams.length; i++) {
            var arrayDos = urlParams[i].split("=");
            formdata.append(arrayDos[0], arrayDos[1]);
        }

        /*Calcula el número de inputFiles*/
        if (idInputFiles.indexOf(';') !== -1) {
            var inputFiles = idInputFiles.split(";");
            var countInput = 1;
            for (var e = 0; e < inputFiles.length; e++) {
                /*Comprueba si el input está vacio*/
                if ($("#" + inputFiles[e] + "").get(0).files.length !== 0) {
                    formdata.append("file" + countInput, $("#" + inputFiles[e] + "")[0].files[0]);
                    countInput++;
                }
            }
            formdata.append("countFiles", countInput);
        } else {
            /*Comprueba si el input está vacio*/
            if ($("#" + idInputFiles + "").get(0).files.length !== 0) {
                formdata.append("countFiles", 1);//Se envia un archivo
                formdata.append("file1", $("#" + idInputFiles + "")[0].files[0]);
            }
        }

        var ajax = new XMLHttpRequest();
        ajax.open("POST", strURL, "true");

        /*Evento que se ejecuta al finalizar el ajax*/
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                updateObj(ajax.responseText, objDestino);
                eval(funcion);
                document.getElementById("divBarraProgreso").classList.add("visibleNone");
            }
        };
        globalIdProgressBar = idProgressBar;
        ajax.upload.addEventListener("progress", barraProgreso, false);

        ajax.send(formdata);
    } catch (err) {
        //alert(err.message);
    }
}
/*END*/