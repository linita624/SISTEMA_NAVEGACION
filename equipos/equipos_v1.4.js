function mostrar_formulario(tipo) {
    if (tipo == 1) { //mostrar
        $('.formulario').slideDown(600).css('display', 'block')
    } else if (tipo == 0) { //Ocultar
        $('.formulario').slideUp(600).css('display', 'none')
    }
}

/**
 *Evento para cargar el listado de los perfiles 
 */
function cargar_equipos() {
    var params = 'opcion=2';
    llamarAjax("equipos_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
}

/**
 *Evento para cargar el listado de los perfiles 
 */
function cargar_formulario_crear() {
    var params = 'opcion=1';
    llamarAjax("equipos_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
}


function cargar_formulario_editar(id_equipo) {
    var params = 'opcion=1&id_equipo=' + id_equipo;
    llamarAjax("equipos_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
}


function mostrar_formulario_flotante(tipo) {
    if (tipo == 1) { //mostrar
        $('#fondo_negro').css('display', 'block');
        $('#d_centro').slideDown(400).css('display', 'block');
    } else if (tipo == 0) { //Ocultar
        $('#fondo_negro').css('display', 'none');
        $('#d_centro').slideDown(400).css('display', 'none');
    }
}

function reducir_formulario_flotante(ancho, alto) {
    $('.div_centro').width(ancho);
    //$('.div_centro').height(alto);
    $('.div_centro').css('top', '20%');
    $('.div_interno').width(ancho/*-15*/);
    //$('.div_interno').height(alto-35);
}

function validar_exito() {

    var hdd_exito = $('#hdd_exito').val();
	
    //$('.formulario').css('display', 'none')
    if (hdd_exito > 0) {
        $("#contenedor_exito").addClass("contenedor_exito_visible");
        $('#contenedor_exito').html('Datos guardados correctamente');
        window.scroll(0, 0);
        setTimeout(
                function () {
                    $('#contenedor_exito').slideUp(200).removeClass("contenedor_exito_visible").addClass("contenedor_exito");
                }, 2000);
        volver_inicio();
    } else {
        $("#contenedor_error").addClass("contenedor_error_visible");
        $('#contenedor_error').html('Error al guardar usuarios');

        window.scroll(0, 0);
        setTimeout("$('#contenedor_error').slideUp(200).removeClass('contenedor_error_visible').addClass('contenedor_error')", 3000);
    }

}


function volver_inicio() {
    //Si hay algo en la casilla de buscar usuarios busca por esta opcion
    cargar_equipos();
    
}


function validar_crear_equipo() {
    $("#frm_perfiles").validate({
        rules: {
            txt_nombre_equipo: {
                required: true,
            },
            txt_proceso_maquina: {
                required: true,
            },
            cmb_estado: {
            	required: true,
            }
            
        },
        submitHandler: function() {
            confirmarEdicion("¿Realmente desea crear nuevo Equipo?", "crear_equipo();");
        },
    });
}

function crear_equipo() {
	var txt_nombre_equipo = $('#txt_nombre_equipo').val();
	var txt_proceso_maquina = $('#txt_proceso_maquina').val();
	var cmb_estado = $('#cmb_estado').val();
	var val_array_ids = $('#array_ids').val();
	
	var array_ids = $('#array_ids').val().split(",");
	
	var params = 'opcion=3&txt_nombre_equipo=' + txt_nombre_equipo +
				 '&txt_proceso_maquina=' + txt_proceso_maquina +
				 '&cmb_estado=' + cmb_estado + 
				 '&val_array_ids=' + val_array_ids;
	for (var i = 0; i < array_ids.length; i++) {		
		var variable_ids = $('#'+array_ids[i]).val();		
		params = params + '&' + array_ids[i] + '=' + variable_ids;	
	}
	llamarAjax("equipos_ajax.php", params, "principal_equipos", "cerrar_div_centro(); validar_exito();");
	
	//llamarAjax("equipos_ajax.php", params, "principal_equipos", "cerrar_div_centro();");
	
}

function validar_editar_equipo() {
    $("#frm_perfiles").validate({
        rules: {
            txt_nombre_equipo: {
                required: true,
            },
            txt_proceso_maquina: {
                required: true,
            },
            cmb_estado: {
            	required: true,
            }
        },
        submitHandler: function() {
            
			confirmarEdicion("¿Realmente desea guardar la edición?", "editar_equipo();");
			
        },
    });
}

function editar_equipo() {
    var txt_nombre_equipo = $('#txt_nombre_equipo').val();
	var txt_proceso_maquina = $('#txt_proceso_maquina').val();
	var cmb_estado = $('#cmb_estado').val();
	var hdd_id_equipo = $('#hdd_id_equipo').val();
	var val_array_ids = $('#array_ids').val();
	
	var array_ids = $('#array_ids').val().split(",");
	
	var params = 'opcion=4&txt_nombre_equipo=' + txt_nombre_equipo +
				 '&txt_proceso_maquina=' + txt_proceso_maquina +
				 '&cmb_estado=' + cmb_estado + 
				 '&val_array_ids=' + val_array_ids + 
				 '&hdd_id_equipo=' + hdd_id_equipo;
	for (var i = 0; i < array_ids.length; i++) {		
		var variable_ids = $('#'+array_ids[i]).val();		
		params = params + '&' + array_ids[i] + '=' + variable_ids;	
	}
	
    llamarAjax("equipos_ajax.php", params, "principal_equipos", "cerrar_div_centro(); validar_exito();");
	
}




function confirmarEdicion(titulo, funcion) {
    var params = 'opcion=5&titulo=' + titulo + '&funcion=' + funcion;
    llamarAjax("equipos_ajax.php", params, "ventanaModal", "mostrarVentana();");
}

function mostrarVentana() {
    $('#myModal').modal();
}

