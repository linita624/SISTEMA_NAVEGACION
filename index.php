<?php
require_once("db/DbUsuarios.php");
require_once("db/DbMenus.php");
require_once("funciones/Utilidades.php");
require_once("funciones/FuncionesPersona.php");

$usuarios = new DbUsuarios();
$menus = new DbMenus();
$utilidades = new Utilidades();
$funcionesPersona = new FuncionesPersona();

//Recibe los datos POST
$usuario = isset($_POST['usuario']) ? $utilidades->limpiar_tags($_POST['usuario']) : null;
$contrasena = isset($_POST['contrasena']) ? $utilidades->limpiar_tags($_POST['contrasena']) : null;

$error = null;
$clase = "index_error2";



if ($usuario || $contrasena ) {
    //consulta en base de datos
    $resultado = $usuarios->validarIngreso($_POST['usuario'], $_POST['contrasena']);

    if ($resultado['id_usuario'] <= 0) {
        $error = true;
        $clase = "index_error";
    } else {
        //Se cargan los datos del usuario en la sesión
		
		
		
        session_start();
        $_SESSION["idUsuario"] = $resultado["id_usuario"];
        $_SESSION["nomUsuario"] = $funcionesPersona->obtenerNombreCompleto($resultado["nombre_usuario"], $resultado["apellido_usuario"], '', '');
        
		//Se actualiza la cookie del lugar
		
		


        //Se obtiene la página a la que se debe redireccionar
        $menu_obj = $menus->getMenuInicioUsuario($resultado["id_usuario"]);
		$pagina_inicio = "principal/principal.php";
        $id_menu = "0";
        if (isset($menu_obj["pagina_menu"])) {
            $pagina_inicio = substr($menu_obj["pagina_menu"], 3);
            $id_menu = $menu_obj["id_menu"];
        }

        //Se redirecciona a la página inicial
        ?>
        <form name="frm_login" id="frm_login" method="post" action="<?php echo($pagina_inicio); ?>">
            <input type="hidden" name="credencial" id="credencial" value="<?php echo($resultado["id_usuario"]); ?>" />
            <input type="hidden" name="hdd_numero_menu" id="hdd_numero_menu" value="<?php echo($id_menu); ?>" />
        </form>
        <script type="text/javascript">
            document.getElementById("frm_login").submit();
        </script>
        <?php
    }
} else {
    $clase = "index_error2";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Sistema de Navegaci&oacute;n</title>
        <link href="css/estilos.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap/bootstrap.css" rel="stylesheet" type="text/css" />
        
        <script type='text/javascript' src='js/jquery.min.js'></script>
        <script type='text/javascript' src='js/jquery.validate.js'></script>
        <script type='text/javascript' src='js/jquery.validate.add.js'></script>
        
        <script type='text/javascript' src='js/ajax.js'></script>
        <script type='text/javascript' src='js/funciones.js'></script>
        <script type='text/javascript' src='js/bootstrap/bootstrap.js'></script>
        
        

        <script type="text/javascript">
			<!--
            $(document).ready(function(){
                $("#unFormulario").validate({
                    rules: {
                        usuario: {
                            required: true,
                            maxlength: 50,
                        },
                        contrasena: {
                            required: true,
                            maxlength: 50,
                        },
                        
                    },
                });
            });

            function dirigirFoco() {
                document.getElementById("usuario").focus();
            }
			// -->
        </script>
        
        
    </head>
    <body id="login" onLoad="dirigirFoco();">

        <div class="login-container">
            <div class="login">
                <img src="imagenes/AVIMOL.png" alt="logo-color" width="220" height="113" class="logo-login">
                    <div class='contenedor_error' id='contenedor_error'>
                        <p>Todos Los campos son obligatorios</p>
                    </div>
                    <?php
                    
                    
                    if ($error) {
                        ?>
                        <div class="<?php echo($clase); ?>">
                            <p>Por favor corrija los siguientes errores de ingreso:</p>
                            <ul>
                                <li>Nombre de usuario o contrase&ntilde;a no validos</li>
                            </ul>
                        </div>
                        <?php
                    }
                    ?>
                    <form id='unFormulario' name='unFormulario' method="post" action="index.php">
                        <input class="input required usuario" type="text" id="usuario" name="usuario" />
                        <input class="input required password" type="password" id="contrasena" name="contrasena" />
                        
                        
                        <input class="btnIniciarsesion" type="submit" value="Ingresar" id="enviar" />
                    </form>
            </div>
        </div>



       
        

    </body>
</html>
