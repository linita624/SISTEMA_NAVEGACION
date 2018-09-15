<?php
session_start();
/*
  Pagina listado de Equipos,
  Autor: Helio Ruber López - 16/09/2013
 */

header('Content-Type: text/xml; charset=UTF-8');

require_once("../db/DbEquipos.php");
require_once("../db/DbMenus.php");
require_once("../db/DbListas.php");
require_once("../funciones/Utilidades.php");
require_once("../funciones/Class_Combo_Box.php");
require_once("../principal/ContenidoHtml.php");

$dbListas = new DbListas();
$dbEquipos = new DbEquipos();
$dbMenus = new DbMenus();
$utilidades = new Utilidades();
$contenido = new ContenidoHtml();
$contenido->validar_seguridad(1);
$tipo_acceso_menu = $contenido->obtener_permisos_menu($_POST["hdd_numero_menu"]);

$opcion = $_POST["opcion"];

switch ($opcion) {
    case "1": //Formulario de creacion de Equipos
        $combo = new Combo_Box();
        $tipo_accion = '';
        if (isset($_POST['id_equipo'])) {
            $titulo_formulario = 'Editar Equipo';
			
            $id_equipo = $utilidades->str_decode($_POST['id_equipo']);
			$tabla_equipo = $dbEquipos->getUnEquipo($id_equipo);
			$nombre_equipo = $tabla_equipo['nombre_equipo'];
			$proceso_maquina = $tabla_equipo['proceso_maquina'];
			$estado = $tabla_equipo['estado'];
			$temp_max = $tabla_equipo['temp_max'];
			$temp_min = $tabla_equipo['temp_min'];
			$presion = $tabla_equipo['presion'];
			$capacidad = $tabla_equipo['capacidad'];
			$periodo_mantenimiento = $tabla_equipo['periodo_mantenimiento'];
			$limpieza = $tabla_equipo['limpieza'];
			
			$id_mantenimiento = '';
			$tabla_mantenimiento_equipo = $dbEquipos->getUnMantenimientoEquipo($id_equipo);
			
			if(count($tabla_mantenimiento_equipo) > 0){
					
				$id_mantenimiento = $tabla_mantenimiento_equipo['id_mantenimiento'];	
				$cmb_operarios = $tabla_mantenimiento_equipo['id_usuario'];
				$fecha_ini = $tabla_mantenimiento_equipo['format_fecha_inicio'];
				$fecha_fin = $tabla_mantenimiento_equipo['format_fecha_fin'];
				$txt_observaciones = $tabla_mantenimiento_equipo['observaciones'];
				$tipo_accion = 2; //Editar Mantenimiento
				
			}else{
				
				$cmb_operarios = '';
				$fecha_ini = '';
				$fecha_fin = '';
				$txt_observaciones = '';
				$tipo_accion = 1; //Nuevo Mantenimiento
				$id_mantenimiento = '';
				
			}
			
			
			$titulo_formulario = 'Mantenimiento para el Equipo <h3>'.$nombre_equipo.'</h3>';
			
			
			
            
        }

        ?>
        
        <input type="hidden" value="0" name="hdd_exito" id="hdd_exito" />
        <input type="hidden" value="<?php echo $id_equipo; ?>" name="hdd_id_equipo" id="hdd_id_equipo" />
        <input type="hidden" value="<?php echo $id_mantenimiento; ?>" name="hdd_id_mantenimiento" id="hdd_id_mantenimiento" />
        
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading"><?php echo $titulo_formulario; ?></div>
                    <div class="panel-body">
        
			        <form id="frm_perfiles" name="frm_perfiles" method="post">
			        	
			        	<div class="form-group col-md-4">
                            <label for="txt_nombre_perfil">Seleccione el operario para el Mantenimiento *</label>
                            <?php
                            $tabla_operarios = $dbEquipos->getListaOperarios();
							$combo->getComboDb('cmb_operarios', $cmb_operarios, $tabla_operarios, 'id_usuario, nombre_completo_usuario', '--Seleccione--', '', '', '', '', 'form-control');
                            ?>
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Fecha de Inicio de Mantenimiento *</label>
                            <input type="text" class="form-control" name="fecha_ini" id="fecha_ini" placeholder="dd/mm/aaaa" value="<?php echo($fecha_ini);?>" onkeyup="DateFormat(this, this.value, event, false, '3');" onfocus="vDateType = '3';" onBlur="DateFormat(this, this.value, event, true, '3');">
                        </div>
                        
                        
                         <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Fecha Fin de Mantenimiento</label>
                            <input type="text" class="form-control" name="fecha_fin" id="fecha_fin" placeholder="dd/mm/aaaa" value="<?php echo($fecha_fin);?>" onkeyup="DateFormat(this, this.value, event, false, '3');" onfocus="vDateType = '3';" onBlur="DateFormat(this, this.value, event, true, '3');">
                        </div>
                        
                        <div class="form-group col-md-12">
                            <label for="txt_nombre_perfil">Observaciones</label>
                            <textarea class="form-control" name="txt_observaciones" id="txt_observaciones" placeholder="Observaciones" onblur="trim_cadena(this); convertirAMayusculas(this);"><?php echo($txt_observaciones);?></textarea>
                        </div>
                        
                        
		                <div class="centrar">
				        	
				        	<?php
			                if ($tipo_accion == 2) {
			                    ?>
		                            <input type="hidden"  id="hdd_idmenus" nombre="hdd_idmenus" value="<?php echo $ids_menus; ?>" />
		                            <?php
		                            if ($tipo_acceso_menu == 2) {
		                                ?>
		                                <button type="submit" class="btn btn-success" id="btn_crear_perfil" nombre="btn_crear_perfil" onclick="validar_mantenimiento_equipo_editar();">Actualizar</button>
		                                <?php
		                            }
		                            ?>
		                            <button type="button" class="btn btn-default" id="btn_cancelar" nombre="btn_cancelar" onclick="cargar_equipos();">Cancelar</button>
		                            
			                    <?php
			                } else {
			                    ?>
		                            <input type="hidden"  id="hdd_idmenus" nombre="hdd_idmenus" value="<?php echo $ids_menus; ?>" />
		                            <?php
		                            if ($tipo_acceso_menu == 2) {
		                                ?>
		                                <button type="submit" class="btn btn-success" id="btn_editar_perfil" nombre="btn_editar_perfil" onclick="validar_mantenimiento_equipo_nuevo();">Guardar</button>
		                                
		                                <?php
		                            }
		                            ?>
		                            <button type="button" class="btn btn-default" id="btn_cancelar" nombre="btn_cancelar" onclick="cargar_equipos();">Cancelar</button>

			                    <?php
			                }
			                ?>
                           
                        </div>
				        
			            
			            <br />
			        </form>
			        
                    </div>
                </div>
            </div>
        </div>
        <?php
        break;

    case "2": //Listado de los perfiles
        $tabla_equipos = $dbEquipos->getListaEquipos();
        ?>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
        
        
        			<div id="paginador" class="centrar">
                        <nav>
                            <ul class="pagination">
                            </ul>
                        </nav>
                    </div>
        
			        <table class="table table-bordered paginated">	
			            <thead>
			                <tr><th colspan='6'>Lista de Equipos</th></tr>	
			                <tr>
			                    <th style="width: 5%;">Id</th>	
			                    <th style="width: 23%;">Nombre</th>	
			                    <th style="width: 32%;">Proceso</th>
			                    <th style="width: 32%;">Periodo Mantenimiento</th>
			                    <th style="width: 32%;">Fecha Ultimo Mantenimiento</th>
			                    <th style="width: 15%;">Estado</th>
			                </tr>
			            </thead>
			            <?php
			            foreach ($tabla_equipos as $fila_equipos) {
			            	
							$id_equipo = $fila_equipos['id_equipo'];
							$nombre_equipo = $fila_equipos['nombre_equipo'];
							$proceso_maquina = $fila_equipos['proceso_maquina'];
							$estado = $fila_equipos['estado'];
							$nombre_estado = $fila_equipos['estado_equipo'];
							$periodo_mantenimiento = $fila_equipos['periodo_mantenimiento'];
							
							$fecha_ultimo_mantenimiento = $fila_equipos['fecha_ultimo_mantenimiento'];
							
							
							
							
							if($estado == 7){
								$color_estado = "#E6F8E0";
							}
							if($estado == 8){
								$color_estado = "#F7BE81";
							}
							if($estado == 9){
								$color_estado = "#D0F5A9";
							}
							
			                ?>
			                <tr onclick='cargar_formulario_editar(<?php echo $id_equipo; ?>);' style="cursor: pointer; background-color: <?php echo($color_estado);?>;"">
			                    <td align="center"><?php echo $id_equipo; ?></td>
			                    <td align="left"><?php echo $nombre_equipo; ?></td>
			                    <td align="left"><?php echo $proceso_maquina; ?></td>
			                    <td align="left"><?php echo $periodo_mantenimiento; ?></td>
			                    <td align="left"><?php echo $fecha_ultimo_mantenimiento; ?></td>
			                    <td align="center"><span class="<?php echo $class_estado; ?>"><?php echo $nombre_estado; ?></span></td>
			                </tr>
			                <?php
			            }
			            ?>
			        </table>
			        </div>
            	</div>
        </div>
        <br/>
        <script id='ajax'>
           //<![CDATA[ 
            $(function () {
                $('.paginated', 'table').each(function (i) {
                    $(this).text(i + 1);
                });

                $('table.paginated').each(function () {
                    var currentPage = 0;
                    var numPerPage = 10;
                    var $table = $(this);
                    $table.bind('repaginate', function () {
                        $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
                    });
                    $table.trigger('repaginate');
                    var numRows = $table.find('tbody tr').length;
                    var numPages = Math.ceil(numRows / numPerPage);
                    var $pager = $('.pagination');
                    for (var page = 0; page < numPages; page++) {

                        $('<li><a href="#">' + (page + 1) + '</a></li>').bind('click', {
                            newPage: page
                        }, function (event) {
                            currentPage = event.data['newPage'];
                            $table.trigger('repaginate');
                            $(this).addClass('active').siblings().removeClass('active');

                        }).appendTo($pager);

                    }
                    $pager.appendTo('#paginador').find('li:first').addClass('active');
                });
            });
            //]]>
            
        </script>
        <?php
        break;

    case "3": //Crear Mantenimiento
        $id_usuario = $_SESSION["idUsuario"];

        @$cmb_operarios = $utilidades->str_decode($_POST["cmb_operarios"]);
		@$hdd_id_equipo = $utilidades->str_decode($_POST["hdd_id_equipo"]);
        @$fecha_ini = $utilidades->str_decode($_POST["fecha_ini"]);
        @$fecha_fin = $utilidades->str_decode($_POST["fecha_fin"]);	
		@$txt_observaciones = $utilidades->str_decode($_POST["txt_observaciones"]);
		
		
		//echo $hdd_id_equipo." - ".$cmb_operarios." - ".$fecha_ini." - ".$fecha_fin." - ".$txt_observaciones;
		
        $valor_exito = $dbEquipos->crearMantenimiento($hdd_id_equipo, $cmb_operarios, $fecha_ini, $fecha_fin, $txt_observaciones);
		
        ?>
        <input type="hidden" value="<?php echo $valor_exito; ?>" name="hdd_exito" id="hdd_exito" />
        <?php
        break;

    case "4": //Editar Mantenimiento
        $id_usuario = $_SESSION["idUsuario"];
	
		@$cmb_operarios = $utilidades->str_decode($_POST["cmb_operarios"]);
		@$hdd_id_equipo = $utilidades->str_decode($_POST["hdd_id_equipo"]);
        @$fecha_ini = $utilidades->str_decode($_POST["fecha_ini"]);
        @$fecha_fin = $utilidades->str_decode($_POST["fecha_fin"]);	
		@$txt_observaciones = $utilidades->str_decode($_POST["txt_observaciones"]);
		
		@$hdd_id_mantenimiento = $utilidades->str_decode($_POST["hdd_id_mantenimiento"]);
		
		
		
		
        $valor_exito = $dbEquipos->editarMantenimiento($hdd_id_equipo, $cmb_operarios, $fecha_ini, $fecha_fin, $txt_observaciones, $hdd_id_mantenimiento);

        
		
		
        ?>
        <input type="hidden" value="<?php echo $valor_exito; ?>" name="hdd_exito" id="hdd_exito" />
        <?php
    break;
	
	
	 case "5"://Modal, Confirmacion crear/editar
        ?>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <?php
            @$titulo = $_POST["titulo"];
            @$funcion = $_POST["funcion"];
            ?>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel"><?php echo $titulo; ?></h4>
                    </div>
                    <div class="modal-body centrar">
                        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="<?php echo $funcion; ?>">Si</button>
                    </div>

                </div>
            </div>
        </div>
        <?php
        break;
	
	
	
	
}
?>
