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
			
			$tabla_val_variables = $dbEquipos->getValoresVaraibles($id_equipo);
			
			$nombre_equipo = $tabla_equipo['nombre_equipo'];
			$proceso_maquina = $tabla_equipo['proceso_maquina'];
			$estado = $tabla_equipo['estado'];
			
			$temp_max = $tabla_equipo['temp_max'];
			$temp_min = $tabla_equipo['temp_min'];
			$presion = $tabla_equipo['presion'];
			$capacidad = $tabla_equipo['capacidad'];
			$periodo_mantenimiento = $tabla_equipo['periodo_mantenimiento'];
			$limpieza = $tabla_equipo['limpieza'];
			
			
			
            $tipo_accion = 2; //Editar Equipo
        } else {
            $tabla_permisos = array();
            $tabla_val_variables = array();
            $titulo_formulario = 'Crear Nuevo Equipo';
            
            $nombre_equipo = '';
			$proceso_maquina = '';
			$estado = '';
			
			$temp_max = 'SIN DATO';
			$temp_min = 'SIN DATO';
			$presion = 'SIN DATO';
			$capacidad = 'SIN DATO';
			$periodo_mantenimiento = 'SIN DATO';
			$limpieza = 'SIN DATO';
			
            
            $id_equipo = '';
            $tipo_accion = 1; //Crear Equipo
        }

        ?>
        
        <input type="hidden" value="0" name="hdd_exito" id="hdd_exito" />
        <input type="hidden" value="<?php echo $id_equipo; ?>" name="hdd_id_equipo" id="hdd_id_equipo" />
        
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading"><?php echo $titulo_formulario; ?></div>
                    <div class="panel-body">
        
			        <form id="frm_perfiles" name="frm_perfiles" method="post">
			        	
			        	<div class="form-group col-md-4">
                            <label for="txt_nombre_perfil">Nombre del equipo *</label>
                            <input type="text" class="form-control" name="txt_nombre_equipo" id="txt_nombre_equipo"  placeholder="Nombres del equipo" value="<?php echo $nombre_equipo; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Proceso de la Maquina *</label>
                            <input type="text" class="form-control" name="txt_proceso_maquina" id="txt_proceso_maquina" placeholder="Proceso de la Maquina" value="<?php echo $proceso_maquina; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        
                        <div class="form-group col-md-4">
                            <label for="cmb_estado">Estado de las Maquinas *</label>
                            <?php
                            $lista_estados = $dbListas->getListaDetalles(3);
							$combo->getComboDb('cmb_estado', $estado, $lista_estados, 'id_detalle, nombre_detalle', '--Seleccione--', '', '', '', '', 'form-control');
                            ?>
                		</div>
                		
                		
                		<?php
                        $lista_variables = $dbListas->getListaDetalles(4);
                        $array_ids='';
                        foreach($lista_variables as $fila_variables){                        
                        	$id_variable = $fila_variables['id_detalle'];
                        	$nombre_variable = $fila_variables['nombre_detalle'];
                        	$array_ids=$id_variable.",".$array_ids;
                        	$valor_campo = '';
                        	foreach ($tabla_val_variables as $fila_val){
                        	   $id_variable_val = $fila_val['id_variable'];
                        	   
                        	   if($id_variable_val == $id_variable){
                        	      $valor_campo = $fila_val['valor'];
                        	      break;                      	      
                        	   }                        	
                        	
                        	}
                        	
                        	?>
                        	<div class="form-group col-md-4">
                            <label for="txt_nombre_perfil"><?php echo($nombre_variable);?> </label>
                            <input type="text" class="form-control" name="<?php echo($id_variable);?>" id="<?php echo($id_variable);?>"  placeholder="<?php echo($nombre_variable);?>" value="<?php echo($valor_campo); ?>" onblur="trim_cadena(this);" />
                        	</div>
                        	<?php 
                        }
                        $array_ids = substr($array_ids, 0, -1);                        
						?>
                		<input type="hidden" name="array_ids" id="array_ids"  value="<?php echo $array_ids; ?>" />
                		
                		<!-- 
                		<div class="form-group col-md-4">
                            <label for="txt_nombre_perfil">Temperatura M&aacute;xima </label>
                            <input type="text" class="form-control" name="temp_max" id="temp_max"  placeholder="Temperatura M&aacute;xima" value="<?php echo $temp_max; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Temperatura M&iacute;nima </label>
                            <input type="text" class="form-control" name="temp_min" id="temp_min" placeholder="Temperatura M&iacute;nima" value="<?php echo $temp_min; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Presi&oacute;n </label>
                            <input type="text" class="form-control" name="presion" id="presion" placeholder="Presi&oacute;n" value="<?php echo $presion; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_nombre_perfil">Capacidad </label>
                            <input type="text" class="form-control" name="capacidad" id="capacidad"  placeholder="Capacidad" value="<?php echo $capacidad; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Periodo Mantenimiento</label>
                            <input type="text" class="form-control" name="periodo_mantenimiento" id="periodo_mantenimiento" placeholder="Periodo Mantenimiento" value="<?php echo $periodo_mantenimiento; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        <div class="form-group col-md-4">
                            <label for="txt_desc_perfil">Limpieza</label>
                            <input type="text" class="form-control" name="limpieza" id="limpieza" placeholder="Limpieza" value="<?php echo $limpieza; ?>" onblur="trim_cadena(this);" />
                        </div>
                        
                        -->
                        
                		
		                
		                
		                <div class="centrar">
				        	
				        	<?php
			                if ($tipo_accion == 2) {
			                    ?>
		                            <input type="hidden"  id="hdd_idmenus" nombre="hdd_idmenus" value="<?php echo $ids_menus; ?>" />
		                            <?php
		                            if ($tipo_acceso_menu == 2) {
		                                ?>
		                                <button type="submit" class="btn btn-success" id="btn_editar_perfil" nombre="btn_editar_perfil" onclick="validar_editar_equipo();">Guardar</button>
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
		                                <button type="submit" class="btn btn-success" id="btn_crear_perfil" nombre="btn_crear_perfil" onclick="validar_crear_equipo();">Crear</button>
		                                
		                                <?php
		                            }
		                            ?>
		                            <button type="button" class="btn btn-default" id="btn_cancelar" nombre="btn_cancelar" onclick="cargar_equipos();">Cancelar</button>

			                    <?php
			                }
			                ?>
                           
                        </div>
				        
			            
			            <br />
			            
			            
			  
			  
			  <?php
			  $tabla_man_equipos = $dbEquipos->getListaMantenimientos($id_equipo);
			  ?>
			            
			            
			            
            <div class="table-responsive">
        
        
        			<div id="paginador" class="centrar">
                        <nav>
                            <ul class="pagination">
                            </ul>
                        </nav>
                    </div>
        
			        <table class="table table-bordered paginated">	
			            <thead>
			                <tr><th colspan='5'>Mantenimientos</th></tr>	
			                <tr>
			                    <th style="width: 5%;">Id</th>	
			                    <th style="width: 23%;">Fecha Inicio</th>	
			                    <th style="width: 32%;">Fecha Fin</th>
			                    <th style="width: 32%;">Observaciones</th>
			                    <th style="width: 32%;">Realizado Por:</th>
			                    
			                </tr>
			            </thead>
			            <?php
			            foreach ($tabla_man_equipos as $fila_equipos) {
			            	
							$id_mantenimiento = $fila_equipos['id_mantenimiento'];
							$fecha_inicio = $fila_equipos['fecha_inicio'];
							$fecha_fin = $fila_equipos['fecha_fin'];
							$observaciones = $fila_equipos['observaciones'];
							$usuario_realizado = $fila_equipos['realizado_por'];
							
							
							
			                ?>
			                <tr style="cursor: pointer;">
			                    <td align="center"><?php echo $id_mantenimiento; ?></td>
			                    <td align="left"><?php echo $fecha_inicio; ?></td>
			                    <td align="left"><?php echo $fecha_fin; ?></td>
			                    <td align="left"><?php echo $observaciones; ?></td>
			                    <td align="left"><?php echo $usuario_realizado; ?></td>		                    
			                    	                    
			                </tr>
			                <?php
			            }
			            ?>
			        </table>
			        </div>
			            
			            
			            
			            
			            
			            
			            
			            
			            
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
			                <tr><th colspan='5'>Lista de Equipos</th></tr>	
			                <tr>
			                    <th style="width: 5%;">Id</th>	
			                    <th style="width: 23%;">Nombre</th>	
			                    <th style="width: 32%;">Proceso</th>
			                    <th style="width: 15%;">Fecha Ultimo Mantenimiento</th>
			                    <th style="width: 10%;">Estado</th>
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

    case "3": //Crear Equipo
        $id_usuario = $_SESSION["idUsuario"];

        @$txt_nombre_equipo = $utilidades->str_decode($_POST["txt_nombre_equipo"]);
        @$txt_proceso_maquina = $utilidades->str_decode($_POST["txt_proceso_maquina"]);
        @$cmb_estado = $utilidades->str_decode($_POST["cmb_estado"]);
        @$val_array_ids = $utilidades->str_decode($_POST["val_array_ids"]);
        $array_ids = explode(",", $val_array_ids);
        
        $val_array_valor = '';
        $val_array_cod = '';
        foreach($array_ids as $fila_array_id){
            @$valor_variable = $utilidades->str_decode($_POST[$fila_array_id]);
            $val_array_valor = $valor_variable.",".$val_array_valor;
            $val_array_cod = $fila_array_id.",".$val_array_cod;
        }
        $val_array_valor = substr($val_array_valor, 0, -1);
        $val_array_cod = substr($val_array_cod, 0, -1);
        
        $valor_exito = $dbEquipos->crearEquipo($txt_nombre_equipo, $txt_proceso_maquina, $cmb_estado, $val_array_cod, $val_array_valor, $id_usuario);
		
        ?>
        <input type="hidden" value="<?php echo $valor_exito; ?>" name="hdd_exito" id="hdd_exito" />
        <?php
        break;

    case "4": //Editar Equipo
        $id_usuario = $_SESSION["idUsuario"];

        @$hdd_id_equipo = $utilidades->str_decode($_POST["hdd_id_equipo"]);
		
		@$txt_nombre_equipo = $utilidades->str_decode($_POST["txt_nombre_equipo"]);
        @$txt_proceso_maquina = $utilidades->str_decode($_POST["txt_proceso_maquina"]);
        @$cmb_estado = $utilidades->str_decode($_POST["cmb_estado"]);
		
		@$val_array_ids = $utilidades->str_decode($_POST["val_array_ids"]);
        $array_ids = explode(",", $val_array_ids);
        
        $val_array_valor = '';
        $val_array_cod = '';
        foreach($array_ids as $fila_array_id){
            @$valor_variable = $utilidades->str_decode($_POST[$fila_array_id]);
            $val_array_valor = $valor_variable.",".$val_array_valor;
            $val_array_cod = $fila_array_id.",".$val_array_cod;
        }
        $val_array_valor = substr($val_array_valor, 0, -1);
        $val_array_cod = substr($val_array_cod, 0, -1);
		
        $valor_exito = $dbEquipos->editarEquipo($txt_nombre_equipo, $txt_proceso_maquina, $cmb_estado, $val_array_cod, $val_array_valor, $hdd_id_equipo);
		
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
