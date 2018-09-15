<?php

require_once("DbConexion.php");

class DbListas extends DbConexion {//Clase que hace referencia a la tabla: listas_detalle

    public function getListaDetalles($idLista) {
        try {
            $sql = "SELECT id_detalle, codigo_detalle, nombre_detalle, orden " .
                    "FROM listas_detalle " .
                    "WHERE id_lista=" . $idLista . " " .
                    "ORDER BY orden";
					
			
            return $this->getDatos($sql);
        } catch (Exception $e) {
            return array();
        }
    }

    
	public function getDetalle($id_detalle) {
        try {
            $sql = "SELECT * 
                    FROM listas_detalle
                    WHERE id_detalle = $id_detalle";

            return $this->getUnDato($sql);
        } catch (Exception $e) {
            return array();
        }
    }
    
    

}

?>
