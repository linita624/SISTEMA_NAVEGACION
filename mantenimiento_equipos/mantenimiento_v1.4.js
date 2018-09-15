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
    llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
}

/**
 *Evento para cargar el listado de los perfiles 
 */
function cargar_formulario_crear() {
    var params = 'opcion=1';
    llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
}


function cargar_formulario_editar(id_equipo) {
    var params = 'opcion=1&id_equipo=' + id_equipo;
    llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "mostrar_formulario(1)");
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


function validar_mantenimiento_equipo_nuevo() {
    $("#frm_perfiles").validate({
        rules: {
            cmb_operarios: {
                required: true,
            },
            fecha_ini: {
                required: true,
            },
            txt_observaciones: {
            	required: true,
            }
            
        },
        submitHandler: function() {
            confirmarEdicion("¿Realmente desea crear Mantenimiento al Equipo?", "crear_mantenimiento();");
        },
    });
}


function validar_mantenimiento_equipo_editar() {
    $("#frm_perfiles").validate({
        rules: {
            cmb_operarios: {
                required: true,
            },
            fecha_ini: {
                required: true,
            },
            txt_observaciones: {
            	required: true,
            }
            
        },
        submitHandler: function() {
            confirmarEdicion("¿Realmente desea Actualizar Mantenimiento al Equipo?", "editar_mantenimiento();");
        },
    });
}

function crear_mantenimiento() {
	var cmb_operarios = $('#cmb_operarios').val();
	var hdd_id_equipo = $('#hdd_id_equipo').val();
	var fecha_ini = $('#fecha_ini').val();
	var fecha_fin = $('#fecha_fin').val();
	var txt_observaciones = $('#txt_observaciones').val();
	
	var params = 'opcion=3&cmb_operarios=' + cmb_operarios +
				 '&hdd_id_equipo=' + hdd_id_equipo +
				 '&fecha_ini=' + fecha_ini +
				 '&fecha_fin=' + fecha_fin +
				 '&txt_observaciones=' + txt_observaciones;
	
	
	llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "cerrar_div_centro(); validar_exito();");
	//llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "cerrar_div_centro();");
	
}


function editar_mantenimiento() {
    var cmb_operarios = $('#cmb_operarios').val();
	var hdd_id_equipo = $('#hdd_id_equipo').val();
	var fecha_ini = $('#fecha_ini').val();
	var fecha_fin = $('#fecha_fin').val();
	var txt_observaciones = $('#txt_observaciones').val();
	var hdd_id_mantenimiento = $('#hdd_id_mantenimiento').val();
	
	
	var params = 'opcion=4&cmb_operarios=' + cmb_operarios +
				 '&hdd_id_equipo=' + hdd_id_equipo +
				 '&fecha_ini=' + fecha_ini +
				 '&fecha_fin=' + fecha_fin +
				 '&txt_observaciones=' + txt_observaciones +
				 '&hdd_id_mantenimiento=' + hdd_id_mantenimiento;
	
	
	llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "cerrar_div_centro(); validar_exito();");
	//llamarAjax("mantenimiento_ajax.php", params, "principal_equipos", "cerrar_div_centro();");
	
}




function confirmarEdicion(titulo, funcion) {
    var params = 'opcion=5&titulo=' + titulo + '&funcion=' + funcion;
    llamarAjax("mantenimiento_ajax.php", params, "ventanaModal", "mostrarVentana();");
}

function mostrarVentana() {
    $('#myModal').modal();
}

