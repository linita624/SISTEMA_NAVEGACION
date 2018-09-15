<?php
	require_once("DbConexion.php");
	
	class DbPerfiles extends DbConexion {
		//Muestra los perfiles que estan en estado activos e indicador de atiende con valor de 1
		public function getPerfiles() {
			try {
				$sql = "SELECT *
						FROM perfiles
						WHERE ind_activo=1
						AND ind_atiende=1
						ORDER BY nombre_perfil";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		//Muestra los perfiles que estan en estado activos e indicador de atiende con valor de 1
		public function getListaPerfiles() {
			try {
				$sql = "SELECT * FROM perfiles p
						ORDER BY p.nombre_perfil";
				
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		//Devulve los datos de un perfil
		public function getUnPerfil($id_perfil) {
			try {
				$sql = "SELECT * FROM perfiles WHERE id_perfil = $id_perfil";
				return $this->getUnDato($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		//Devulve los menus y los permiso que tiene el perfil
		public function getPermisosMenus($id_perfil) {
			try {
				$sql = "SELECT * FROM permisoss WHERE id_perfil = $id_perfil";
				return $this->getDatos($sql);
			} catch (Exception $e) {
				return array();
			}
		}
		
		/**
		 * Metodo para crear un perfil
		 */
		public function crearPerfil($nombre_perfil, $descripcion, $id_menu_inicio, $id_usuario, $menus_permisos) {
			try {
				$sql = "CALL pa_crear_perfil('".$nombre_perfil."', '".$descripcion."', ".$id_menu_inicio.", ".$id_usuario.", @id)";
				
				
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_perfil = $arrResultado["@id"];
				
				if ($id_perfil > 0) {
					$array_menus_permisos = explode("-", $menus_permisos);
					foreach ($array_menus_permisos as $fila) {
						if ($fila != '') {
							$menu_permiso = explode(",", $fila);
							$menu = $menu_permiso[0];
							$permiso = $menu_permiso[1];
							if ($permiso != '') {
								$sql = "INSERT INTO permisoss
										(id_perfil, id_menu, tipo_acceso, id_usuario_crea, fecha_crea)
										VALUES (".$id_perfil.", ".$menu.", ".$permiso.", ".$id_usuario.", NOW())";
								$arrCampos[0] = "@id";
								$this->ejecutarSentencia($sql, $arrCampos);
							}
						}
					}
				}
				return $id_perfil;
			} catch (Exception $e) {
				return -2;
			}
		}
		
		/**
		 * Metodo para editar un perfil
		 */
		public function editarPerfil($id_perfil, $nombre_perfil, $descripcion, $id_menu_inicio, $ind_activo, $id_usuario, $menus_permisos) {
			try {
				if (trim($id_menu_inicio) == "") {
					$id_menu_inicio = "NULL";
				}
				$sql = "CALL pa_editar_perfil(".$id_perfil.", '".$nombre_perfil."', '".$descripcion."', ".$id_menu_inicio.", ".$ind_activo.", ".$id_usuario.", @id)";
				$arrCampos[0] = "@id";
				$arrResultado = $this->ejecutarSentencia($sql, $arrCampos);
				$id_resultado = $arrResultado["@id"];
				
				if ($id_resultado > 0) {
					$array_menus_permisos = explode("-", $menus_permisos);
					foreach ($array_menus_permisos as $fila) {
						if ($fila != '') {
							$menu_permiso = explode(",", $fila);
							$menu = $menu_permiso[0];
							$permiso = $menu_permiso[1];
							if ($permiso != '') {
								$sql = "INSERT INTO permisoss
										(id_perfil, id_menu, tipo_acceso, id_usuario_crea, fecha_crea)
										VALUES (".$id_perfil.", ".$menu.", ".$permiso.", ".$id_usuario.", NOW())";
										
								$arrCampos[0] = "@id";
								$this->ejecutarSentencia($sql, $arrCampos);
							}
						}
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
