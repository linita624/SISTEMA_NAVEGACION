<!DOCTYPE html>


<?php
session_start();
require_once("../db/DbEquipos.php");
$dbEquipos = new DbEquipos();

function texto_equipos($id_equipo){
	$dbEquipos = new DbEquipos();
	$tabla_equipos = $dbEquipos->getUnEquipoDetalle($id_equipo);
	
	$i=0;
	$texto_salida = '';
	
	$texto_salida_1 = '<hr/>PARAMETROS DE LA MAQUINA <br />';
	$texto_salida_2 = '<hr/>ESTADO DE LA MAQUINA <br />';
	$texto_salida_3 = '<hr/>MANTENIMIENTO DE LA MAQUINA <br />';
	foreach($tabla_equipos as $fila_equipos){
		
		$nombre_equipo = $fila_equipos['nombre_equipo'];
		$valor = $fila_equipos['valor'];
		$detalle = $fila_equipos['nombre_detalle'];
		$id_variable = $fila_equipos['id_variable'];
		
		$fecha_fin = $fila_equipos['fecha_fin'];
		$fecha_inicio = $fila_equipos['fecha_inicio'];
		$observaciones = $fila_equipos['observaciones'];
		
		if($i==0){
		$texto_salida_3=$texto_salida_3."Fecha inicio=".$fecha_inicio."<br />";
		$texto_salida_3=$texto_salida_3."Fecha Fin=".$fecha_fin."<br />";
		$texto_salida_3=$texto_salida_3."Fecha Observaciones=".$observaciones."<br />";
		}
		
		
		switch ($id_variable) {
			case 10:
			case 11:
			case 12:
			case 13:
			if($i==0){
				$texto_salida_1=$texto_salida_1."Nombre=".$nombre_equipo."<br />";
			}
			$texto_salida_1=$texto_salida_1.$detalle."=".$valor."<br />";	
				"<hr/>";
			break;

			case 14:
			case 15:
			case 16:
			case 17:
			$texto_salida_2=$texto_salida_2.$detalle."=".$valor."<br />";		
			break;
			
		}
			
		
		
		
				
		$i++;	
	}
	//$texto_salida = "Nombre=".$nombre_equipo."<br />Temp Max=".$temp_max."<br />Temp Min=".$temp_min."<br />Presion=".$presion."<br />Capacidad=".$capacidad."<br />Mantenimiento=".$periodo_mantenimiento."<br />Limpieza=".$limpieza;
	$texto_salida=$texto_salida.$texto_salida_1.$texto_salida_2.$texto_salida_3;
	
	return $texto_salida;
}




?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="mobile-web-app-capable" content="yes" />		
		<style type="text/css" title="Default">
			body, div, h1, h2, h3, span, p {
				font-family: Verdana,Arial,Helvetica,sans-serif;
			}
			/* fullscreen */
			html {
				height:100%;
			}
			body {
				height:100%;
				margin: 0px;
				overflow:hidden; /* disable scrollbars */
				font-size: 10pt;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* remove highlight on tab for iOS/Android */
			}
			/* fix for scroll bars on webkit & >=Mac OS X Lion */ 
			::-webkit-scrollbar {
				background-color: rgba(0,0,0,0.5);
				width: 0.75em;
			}
			::-webkit-scrollbar-thumb {
    			background-color:  rgba(255,255,255,0.5);
			}
		</style>	
	</head>
	<body>
	
	<?php
		$tour = new SimpleXMLElement('360_0978_out.xml', null, true);
		$i=0;
		foreach ($tour->panorama as $nodo) 
		{
			
			if($nodo['id']=='node2'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='101A'){						
						$texto_info = texto_equipos(9);						
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			
			if($nodo['id']=='node3'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='101A'){						
						$texto_info = texto_equipos(9);						
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			
			if($nodo['id']=='node4'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='102A'){						
						$texto_info = texto_equipos(8);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='102B'){						
						$texto_info = texto_equipos(8);						
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			
			if($nodo['id']=='node45'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='103A'){						
						$texto_info = texto_equipos(7);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='103B'){						
						$texto_info = texto_equipos(18);						
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			
			if($nodo['id']=='node13'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='103A'){
						$texto_info = texto_equipos(7);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='103B'){						
						$texto_info = texto_equipos(18);						
						$nodo_h['description'] = $texto_info;
					}
					
					
				}
			}
			
			
			if($nodo['id']=='node14'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104A'){
						$texto_info = texto_equipos(11);
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='103B'){						
						$texto_info = texto_equipos(18);						
						$nodo_h['description'] = $texto_info;
					}		
					
				}
			}
			
			
			if($nodo['id']=='node28'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104A'){
						$texto_info = texto_equipos(11);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104B'){
						$texto_info = texto_equipos(11);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104C'){
						$texto_info = texto_equipos(11);
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
						
			if($nodo['id']=='node33'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					
					if($nodo_h['id']=='105A'){
						$texto_info = texto_equipos(3);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='105B'){
						$texto_info = texto_equipos(2);
						$nodo_h['description'] = $texto_info;
					}
				}
			}
			
			
			if($nodo['id']=='node35'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					
					if($nodo_h['id']=='106A'){
						$texto_info = texto_equipos(1);
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node55'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					
					if($nodo_h['id']=='106A'){
						$texto_info = texto_equipos(1);
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			
			if($nodo['id']=='node38'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					
					if($nodo_h['id']=='106B'){
						$texto_info = texto_equipos(6);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='106C'){
						$texto_info = texto_equipos(4);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104B'){
						$texto_info = texto_equipos(11);
						$nodo_h['description'] = $texto_info;
					}
										
				}
			}
			
			if($nodo['id']=='node39'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='107A'){						
						$texto_info = texto_equipos(4);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='106C'){						
						$texto_info = texto_equipos(5);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='106B'){						
						$texto_info = texto_equipos(6);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='103B'){						
						$texto_info = texto_equipos(7);						
						$nodo_h['description'] = $texto_info;
					}
				}
			}
			
			if($nodo['id']=='node75'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104A'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='104B'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node80'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='106D'){						
						$texto_info = texto_equipos(6);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node81'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='106D'){						
						$texto_info = texto_equipos(6);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node56'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104B'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}		
					if($nodo_h['id']=='104C'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}						
				}
			}
			
			if($nodo['id']=='node46'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104B'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}		
					if($nodo_h['id']=='104C'){						
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}						
				}
			}
			
			if($nodo['id']=='node49'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='108A'){						
						$texto_info = texto_equipos(10);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node50'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='108A'){						
						$texto_info = texto_equipos(10);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node59'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='108A'){
						$texto_info = texto_equipos(10);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104D'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104E'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104F'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}

					
				}
			}
			
			if($nodo['id']=='node61'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104E'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104F'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}

					
				}
			}
			
			if($nodo['id']=='node86'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104A'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104B'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
				}
			}
			
			if($nodo['id']=='node88'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104B'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104C'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104D'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104E'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			if($nodo['id']=='node89'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104C'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104D'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104E'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104F'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
				}
			}
			
			if($nodo['id']=='node84'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104E'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='104F'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}
				}
			}
			
			if($nodo['id']=='node85'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='104F'){
						$texto_info = texto_equipos(11);						
						$nodo_h['description'] = $texto_info;
					}		
				}
			}
						
			if($nodo['id']=='node109'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}		
				}
			}
			
			if($nodo['id']=='node110'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}		
				}
			}
			
			if($nodo['id']=='node91'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='109B'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					
				}
			}
			
			if($nodo['id']=='node111'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109B'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					
				}
			}
			
			if($nodo['id']=='node98'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109C'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='109B'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					
				}
			}
			
			if($nodo['id']=='node67'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109C'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}						
					
				}
			}
			
			if($nodo['id']=='node68'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='113C'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='109B'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='109A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}
					
					
				}
			}
			
			if($nodo['id']=='node95'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='109C'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='110A'){
						$texto_info = texto_equipos(12);						
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='110B'){
						$texto_info = texto_equipos(12);						
						$nodo_h['description'] = $texto_info;
					}
					
					
				}
			}
			
			if($nodo['id']=='node100'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='111C'){
						$texto_info = texto_equipos(14);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='109A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					
				}
			}
			
			if($nodo['id']=='node101'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='111C'){
						$texto_info = texto_equipos(14);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='114A'){
						$texto_info = texto_equipos(16);						
						$nodo_h['description'] = $texto_info;
					}	
					
				}
			}
			
			if($nodo['id']=='node102'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='111C'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='112A'){
						$texto_info = texto_equipos(13);						
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node103'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='111B'){
						$texto_info = texto_equipos(14);
						$nodo_h['description'] = $texto_info;
					}	
					if($nodo_h['id']=='112A'){
						$texto_info = texto_equipos(17);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='111C'){
						$texto_info = texto_equipos(14);
						$nodo_h['description'] = $texto_info;
					}					
				}
			}
			
			if($nodo['id']=='node104'){
				foreach($tour->panorama[$i]->hotspots[0]->hotspot as $nodo_h){					
					if($nodo_h['id']=='111A'){
						$texto_info = texto_equipos(12);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='111B'){
						$texto_info = texto_equipos(12);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='111C'){
						$texto_info = texto_equipos(12);
						$nodo_h['description'] = $texto_info;
					}
					if($nodo_h['id']=='112A'){
						$texto_info = texto_equipos(12);
						$nodo_h['description'] = $texto_info;
					}
					
				}
			}
			
			
		
			
			
			
			
			
			$i++;
			
		}
		
		
		
		//var_dump($tour);
		
		//Maquina Tolva Bascula Dosificadora		
		//$tour->panorama[0]->hotspots[0]->hotspot[2]['title']='Hola Mundo 2';
		
		//echo "dsfdsfdsfdsfdsf -- ".$tour->panorama[0]->hotspots[0]->hotspot[2]['title'];
		
		$tour->asXML('360_0978_out_4.xml');
		
		
		?>
	
	
	
	
	
	
	
<!-- - - - - - - 8<- - - - - - cut here - - - - - 8<- - - - - - - -->
		<script type="text/javascript" src="pano2vr_player.js">
		</script>
		<script type="text/javascript" src="skin.js">
		</script>
		<div id="container" style="width:100%;height:100%;overflow:hidden;">
		<br>Loading...<br><br>
		This content requires HTML5 with CSS3 3D Transforms or WebGL.
		</div>
		<script type="text/javascript">
	
			// create the panorama player with the container
			pano=new pano2vrPlayer("container");
		// add the skin object
		skin=new pano2vrSkin(pano);
		// load the configuration
		window.addEventListener("load", function() {
			pano.readConfigUrlAsync("360_0978_out_4.xml");
		});
		</script>
		<noscript>
			<p><b>Please enable Javascript!</b></p>
		</noscript>
<!-- - - - - - - 8<- - - - - - cut here - - - - - 8<- - - - - - - --> 
		<!-- Hack needed to hide the url bar on iOS 9, iPhone 5s --> 
		<div style="width:1px;height:1px;"></div>
	</body>
</html>
