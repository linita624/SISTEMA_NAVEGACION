<?php
	require_once("DbConexion.php");
	
	class DbEquipos extends DbConexion {
		
		//Lista de operarios		
		public function getListaMantenimientos($id_equipo) {
			try {
				$sql = "SELECT m.*, CONCAT(u.nombre_usuario, ' ', u.apellido_usuario) AS realizado_por FROM mantenimiento_equipos m
						INNER JOIN usuarios u ON u.id_usuario = m.id_usuario
						WHERE m.id_equipo = $id_equipo";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		public function getValoresVaraibles($id_equipo) {
			try {
				$sql = "SELECT * FROM equipo_variable WHERE id_equipo = $id_equipo";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		
		
		//Devulve los datos de un mantenimeoto
		public function getUnMantenimientoEquipo($id_equipo) {
			try {
				$sql = "SELECT *, DATE_FORMAT(fecha_inicio, '%d/%m/%Y') AS format_fecha_inicio, DATE_FORMAT(fecha_fin, '%d/%m/%Y') AS format_fecha_fin 
						FROM mantenimiento_equipos 
						WHERE id_equipo = $id_equipo
						AND fecha_fin = '0000-00-00'";
				
				//echo $sql;
				
				return $this->getUnDato($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		//Lista de operarios		
		public function getListaOperarios() {
			try {
				$sql = "SELECT DISTINCT u.*, CONCAT(u.nombre_usuario, ' ', u.apellido_usuario) AS nombre_completo_usuario  FROM usuarios u
						INNER JOIN usuarios_perfiles p ON p.id_usuario = u.id_usuario
						WHERE p.id_perfil = 2";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		/**
		 * Metodo para crear un Mantenimiento
		 */
		public function crearMantenimiento($hdd_id_equipo, $cmb_operarios, $fecha_ini, $fecha_fin, $txt_observaciones ) {
			try {
				$sql = "CALL pa_crear_mantenimiento('".$hdd_id_equipo."', '".$cmb_operarios."', STR_TO_DATE('".$fecha_ini."', '%d/%m/%Y'), STR_TO_DATE('".$fecha_fin."', '%d/%m/%Y'), '".$txt_observaciones."', @id)";
				
				//echo $sql;
				
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_equipo = $arrResultado["@id"];
				
				return $id_equipo;
			} catch (Exception $e) {
				return -2;
			}
		}
		
		
		/**
		 * Metodo para editar un Mantenimiento
		 */
		public function editarMantenimiento($hdd_id_equipo, $cmb_operarios, $fecha_ini, $fecha_fin, $txt_observaciones, $hdd_id_mantenimiento) {
			try {
				$sql = "CALL pa_editar_mantenimiento('".$hdd_id_equipo."', '".$cmb_operarios."', STR_TO_DATE('".$fecha_ini."', '%d/%m/%Y'), STR_TO_DATE('".$fecha_fin."', '%d/%m/%Y'), '".$txt_observaciones."', '".$hdd_id_mantenimiento."', @id)";
				
				//echo $sql;
				
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_equipo = $arrResultado["@id"];
				
				return $id_equipo;
			} catch (Exception $e) {
				return -2;
			}
		}
		
		
		//Muestra los perfiles que estan en estado activos e indicador de atiende con valor de 1
		public function getListaEquipos() {
			try {
				$sql = "SELECT e.*, l_estado.nombre_detalle AS estado_equipo,
				        (SELECT MAX(m.fecha_fin) FROM mantenimiento_equipos m WHERE m.id_equipo = e.id_equipo) AS fecha_ultimo_mantenimiento
						FROM equipos e 
						INNER JOIN listas_detalle l_estado ON l_estado.id_detalle = e.estado
						ORDER BY e.estado";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		//Devulve los datos de un equipo
		public function getUnEquipoDetalle($id_equipo) {
			try {
				/*$sql = "SELECT * FROM equipos e
						inner join equipo_variable ev on ev.id_equipo = e.id_equipo
						inner join listas_detalle ld on ld.id_detalle = ev.id_variable
						WHERE e.id_equipo = $id_equipo";*/
						
				$sql="SELECT * FROM equipos e
						inner join equipo_variable ev on ev.id_equipo = e.id_equipo
						inner join listas_detalle ld on ld.id_detalle = ev.id_variable
						left join mantenimiento_equipos me on me.id_equipo = e.id_equipo
						WHERE e.id_equipo = $id_equipo
						and fecha_fin = (SELECT max(fecha_fin)
						FROM mantenimiento_equipos
						WHERE id_equipo = $id_equipo
						)";		
						
						
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		//Devulve los datos de un equipo
		public function getUnEquipo($id_equipo) {
			try {
				$sql = "SELECT * FROM equipos e	WHERE e.id_equipo = $id_equipo";
				return $this->getUnDato($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		
		
		
		/**
		 * Metodo para crear un Equipo
		 */
		public function crearEquipo($txt_nombre_equipo, $txt_proceso_maquina, $cmb_estado, $val_array_ids, $val_array_valor, $id_usuario) {
			try {
				$sql = "CALL pa_crear_equipo('".$txt_nombre_equipo."', '".$txt_proceso_maquina."', ".$cmb_estado.", @id)";
								
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_equipo = $arrResultado["@id"];
				
				
				  if ($id_equipo > 0) {
		                $val_array_valor = explode(",", $val_array_valor);
		                $val_array_ids = explode(",", $val_array_ids);
		                $i=0;
		                foreach ($val_array_valor as $fila_valor) {
		                     $id_variable = $val_array_ids[$i]; 
		                
		                    $sql_insert = "INSERT INTO equipo_variable 
											 (id_equipo, id_variable, valor)
											 VALUES (" . $id_equipo . ", " . $id_variable . ", " . $fila_valor . ")";
		                    $arrCampos[0] = "@id";
		                    $this->ejecutarSentencia($sql_insert, $arrCampos);
		                    $i++;
		                }
		            }
				
				
				
				
				return $id_equipo;
			} catch (Exception $e) {
				return -2;
			}
		}
		
		
		
		/**
		 * Metodo para editar un perfil
		 */
		public function editarEquipo($txt_nombre_equipo, $txt_proceso_maquina, $cmb_estado, $val_array_ids, $val_array_valor, $hdd_id_equipo) {
			try {
				
				$sql = "CALL pa_editar_equipo('".$txt_nombre_equipo."', '".$txt_proceso_maquina."', ".$cmb_estado.", ".$hdd_id_equipo.", @id)";
				
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_resultado = $arrResultado["@id"];
				
				if ($id_resultado > 0) {
	                $val_array_valor = explode(",", $val_array_valor);
	                $val_array_ids = explode(",", $val_array_ids);
	                $i=0;
	                foreach ($val_array_valor as $fila_valor) {
	                    $id_variable = $val_array_ids[$i];
	                    $sql_insert = "INSERT INTO equipo_variable 
									   (id_equipo, id_variable, valor)
									    VALUES (" . $id_resultado . ", " . $id_variable . ", " . $fila_valor . ")";	                    
	                    $arrCampos[0] = "@id";
	                    $this->ejecutarSentencia($sql_insert, $arrCampos);
	                    $i++;
	                }
	            }
	            
				return $id_resultado;
			} catch (Exception $e) {
				return -2;
			}
		}
		
		
		//Lista de departamentos
		public function getDepartamentos() {
			try {
				$sql = "SELECT * FROM departamentos WHERE activo = 1 ORDER BY cod_dep";

				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
	}
?>
