<?php
session_start();



require_once("../funciones/Utilidades.php");
require_once("../principal/ContenidoHtml.php");
require_once("../funciones/Class_Combo_Box.php");
$utilidades = new Utilidades();
$contenido = new ContenidoHtml();
$combo = new Combo_Box();




//$tipo_acceso_menu = $contenido->obtener_permisos_menu($_POST["hdd_numero_menu"]);
//variables
$titulo = 'Sistema de Navegaci&oacute;n'



?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title><?php echo $titulo;?></title>
        <link href="../css/estilos_1.css" rel="stylesheet" type="text/css" />
        <link href="../css/bootstrap/bootstrap.css" rel="stylesheet" type="text/css" />
        
        <link rel="stylesheet" type="text/css" href="../css/bootstrap/dist_clock/bootstrap-clockpicker.min.css">
		
        
        

    </head>
    <!--<body onload="llamar_crear_registro();">-->
    <body>	
        <?php
        $contenido->validar_seguridad(0);
        $contenido->cabecera_html();
		
		
		
        ?>
        
            	
            
            

           
        

        <?php
        $contenido->footer();
        ?>

        <script type='text/javascript' src='../js/jquery.min.js'></script>
        <script type='text/javascript' src='../js/validaFecha.js'></script>
        <script type='text/javascript' src='../js/jquery.validate.js'></script>
        <script type='text/javascript' src='../js/jquery.validate.add.js'></script>
        <script type='text/javascript' src='../js/ajax.js'></script>
        <script type='text/javascript' src='../js/funciones.js'></script>
        <script type='text/javascript' src='../js/bootstrap/bootstrap.js'></script>        
        <script type='text/javascript' src='../js/bootstrap/dist_clock/bootstrap-clockpicker.min.js'></script>
        
    </body>
</html>
