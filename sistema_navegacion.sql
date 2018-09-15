/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.24-log : Database - sistema_navegacion
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sistema_navegacion` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sistema_navegacion`;

/*Table structure for table `equipo_variable` */

DROP TABLE IF EXISTS `equipo_variable`;

CREATE TABLE `equipo_variable` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_equipo` bigint(20) DEFAULT NULL,
  `id_variable` bigint(20) DEFAULT NULL,
  `valor` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=latin1;

/*Data for the table `equipo_variable` */

insert  into `equipo_variable`(`id`,`id_equipo`,`id_variable`,`valor`) values (7,23,10,'22'),(8,23,11,'33'),(9,23,12,'44'),(10,23,13,'55'),(11,23,14,'66'),(12,23,15,'77'),(71,10,10,'43'),(72,10,11,'43'),(73,10,12,'4'),(74,10,13,'4'),(75,10,14,'4'),(76,10,15,'33'),(93,9,10,'21'),(94,9,11,'22'),(95,9,12,'12'),(96,9,13,'12'),(97,9,14,'21'),(98,9,15,'12'),(99,9,16,'40'),(100,9,17,'12'),(101,9,18,'12'),(102,5,10,'21'),(103,5,11,'23'),(104,5,12,'32'),(105,5,13,'43'),(106,5,14,'34'),(107,5,15,'43'),(108,5,16,'43'),(109,5,17,'34'),(110,5,18,'23'),(138,13,10,'232'),(139,13,11,'21231'),(140,13,12,'312'),(141,13,13,'21'),(142,13,14,'112'),(143,13,15,'23'),(144,13,16,'123'),(145,13,17,'123'),(146,13,18,'43');

/*Table structure for table `equipos` */

DROP TABLE IF EXISTS `equipos`;

CREATE TABLE `equipos` (
  `id_equipo` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre_equipo` varchar(100) DEFAULT NULL,
  `proceso_maquina` varchar(100) DEFAULT NULL,
  `tipo_maquina` bigint(20) DEFAULT NULL,
  `estado` bigint(20) DEFAULT NULL,
  `temp_max` varchar(50) DEFAULT NULL,
  `temp_min` varchar(50) DEFAULT NULL,
  `presion` varchar(50) DEFAULT NULL,
  `capacidad` varchar(50) DEFAULT NULL,
  `periodo_mantenimiento` varchar(50) DEFAULT NULL,
  `limpieza` varchar(50) DEFAULT NULL,
  `id_nodo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_equipo`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `equipos` */

insert  into `equipos`(`id_equipo`,`nombre_equipo`,`proceso_maquina`,`tipo_maquina`,`estado`,`temp_max`,`temp_min`,`presion`,`capacidad`,`periodo_mantenimiento`,`limpieza`,`id_nodo`) values (1,'Tolva de alivio','limpieza',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 1 año','106A'),(2,'Enfriadora','Enfriadora',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 1 año','105B'),(3,'Qubrentadora','Qubrentadora',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 1 año','105A'),(4,'Peletizadora','Peletizadora',NULL,7,'70°C','90°','110 PSI','SIN DATO','2 años','Cada 8 días','107A'),(5,'Tolva Bascula','Tolva Bascula',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','SIN DATO','SIN DATO','106C'),(6,'Mezcladora','Mezcladora',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 8 días','106D'),(7,'Empacadora','Empacadora',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 20 días','103A'),(8,'Molino 1 y 2','Molino 1 y 2',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 8 días','102A'),(9,'Tolva Molienda','moliendo',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','3 meses','Cada 2 meses','101A'),(10,'Micro-mezclador','Micro-mezclador',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','1 mes','Cada 8 días','108A'),(11,'Tolvas graneleras (6)','Tolvas graneleras (6)',NULL,9,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','1 mes','Cada 8 días','104'),(12,'Silos 1 y 2','Silos 1 y 2',NULL,9,'SIN DATO','SIN DATO','SIN DATO','250 toneladas','4 meses','Cada 15 días','110'),(13,'Silos 3, 4 y 5','Silos 3, 4 y 5',0,9,'SIN DATO','SIN DATO','SIN DATO','125 toneladas','4 meses','Cada 8 días','109'),(14,'Silos Grandes 1, 2 y 3 ','Silos Grandes 1, 2 y 3 ',NULL,9,'SIN DATO','SIN DATO','SIN DATO','1500 toneladas','4 meses','Cada 20 días','111'),(15,'Caldera','Caldera',NULL,9,'70°C','90°','100 PSI','SIN DATO','1 mes','Cada 1 mes','113A'),(16,'Bascula','Bascula',NULL,9,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','1 año','SIN DATO','114A'),(17,'Bolco (levanta camiones)','Bolco (levanta camiones)',NULL,7,'SIN DATO','SIN DATO','SIN DATO','SIN DATO','1 semana','Depende del Producto','113A');

/*Table structure for table `listas` */

DROP TABLE IF EXISTS `listas`;

CREATE TABLE `listas` (
  `id_lista` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre_lista` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_lista`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `listas` */

insert  into `listas`(`id_lista`,`nombre_lista`) values (1,'Tipo de Documento'),(2,'Tipos de maquinas'),(3,'Estado equipo'),(4,'Variables Equipos');

/*Table structure for table `listas_detalle` */

DROP TABLE IF EXISTS `listas_detalle`;

CREATE TABLE `listas_detalle` (
  `id_detalle` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_lista` bigint(20) DEFAULT NULL,
  `codigo_detalle` varchar(100) DEFAULT NULL,
  `nombre_detalle` varchar(100) DEFAULT NULL,
  `orden` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

/*Data for the table `listas_detalle` */

insert  into `listas_detalle`(`id_detalle`,`id_lista`,`codigo_detalle`,`nombre_detalle`,`orden`) values (1,1,'1','Cédula de ciudadanía',1),(2,1,'2','Cédula de extranjería',2),(3,1,'3','Pasaporte',3),(4,2,'1','Tipo 1',1),(5,2,'2','Tipo 2',2),(6,2,'3','Tipo 3',3),(7,3,'1','Activo',1),(8,3,'2','De baja',2),(9,3,'3','En Mantenimiento',3),(10,4,'1','Temperatura Máxima(°c)',1),(11,4,'2','Temperatura Mínima(°c)',2),(12,4,'3','Presión(PSI)',3),(13,4,'4','Capacidad(Kg)',4),(14,4,'5','Periodo Mantenimiento(Meses)',5),(15,4,'6','Limpieza(Meses)',6),(16,4,'7','Temperatura Actual(°c)',7),(17,4,'8','Presión Actual(PSI)',8),(18,4,'9','Capacidad Actual(Kg)',9);

/*Table structure for table `mantenimiento_equipos` */

DROP TABLE IF EXISTS `mantenimiento_equipos`;

CREATE TABLE `mantenimiento_equipos` (
  `id_mantenimiento` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_equipo` bigint(20) DEFAULT NULL,
  `id_usuario` bigint(20) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `observaciones_usuario` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_mantenimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `mantenimiento_equipos` */

insert  into `mantenimiento_equipos`(`id_mantenimiento`,`id_equipo`,`id_usuario`,`fecha_inicio`,`fecha_fin`,`observaciones`,`observaciones_usuario`) values (1,9,2,'2018-06-15','2018-06-20','LIMPIEZA',NULL),(2,16,1,'2018-06-15','2018-09-11','MANTENIMIENTO OPTIMO',NULL),(12,13,1,'2019-06-12','2018-09-23','NO SIRVE',NULL);

/*Table structure for table `menus` */

DROP TABLE IF EXISTS `menus`;

CREATE TABLE `menus` (
  `id_menu` int(10) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del menu',
  `nombre_menu` varchar(50) DEFAULT NULL COMMENT 'Nombre del menu',
  `pagina_menu` varchar(200) DEFAULT NULL COMMENT 'Ruta de la pagina del menu',
  `orden` int(2) DEFAULT NULL COMMENT 'Orden del menu',
  `id_menu_padre` int(10) DEFAULT NULL COMMENT 'Identificador del menu padre',
  `ind_visible` int(1) DEFAULT '1' COMMENT 'Indicador si se muestra en el menu, No tiene padre',
  PRIMARY KEY (`id_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DEFAULT;

/*Data for the table `menus` */

insert  into `menus`(`id_menu`,`nombre_menu`,`pagina_menu`,`orden`,`id_menu_padre`,`ind_visible`) values (1,'Administración',NULL,1,NULL,1),(2,'Usuarios','../usuarios/usuarios.php',2,1,1),(3,'Perfiles','../usuarios/perfiles.php',3,1,1),(4,'Módulos',NULL,2,NULL,1),(5,'Módulo de navegación','../navegacion/mod_navega.php',1,4,1),(6,'Módulo de equipos','../equipos/equipos.php',2,4,1),(7,'Módulo de Mantenimiento','../mantenimiento_equipos/mantenimiento.php',3,4,1);

/*Table structure for table `perfiles` */

DROP TABLE IF EXISTS `perfiles`;

CREATE TABLE `perfiles` (
  `id_perfil` int(10) NOT NULL AUTO_INCREMENT COMMENT 'identificador perfiles',
  `nombre_perfil` varchar(50) DEFAULT NULL COMMENT 'nombre del perfil',
  `descripcion` varchar(100) DEFAULT NULL COMMENT 'Descripcion del perfil',
  `ind_activo` int(1) DEFAULT NULL COMMENT 'Indicador de activo o inactivo. 1 = activo. 0=inactivo',
  `id_usuario_crea` int(10) DEFAULT NULL COMMENT 'identificador del usuario creador',
  `fecha_crea` datetime DEFAULT NULL COMMENT 'fecha de creacion del perfil',
  `id_usuario_mod` int(10) DEFAULT NULL COMMENT 'identificador usuario que modifica',
  `fecha_mod` datetime DEFAULT NULL COMMENT 'fecha de modificacion del registro',
  `id_menu_inicio` int(10) DEFAULT NULL COMMENT 'Identificador del menÃº que se abre al inicio',
  PRIMARY KEY (`id_perfil`),
  KEY `fk_perfiles_menus` (`id_menu_inicio`),
  CONSTRAINT `fk_perfiles_menus` FOREIGN KEY (`id_menu_inicio`) REFERENCES `menus` (`id_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DEFAULT;

/*Data for the table `perfiles` */

insert  into `perfiles`(`id_perfil`,`nombre_perfil`,`descripcion`,`ind_activo`,`id_usuario_crea`,`fecha_crea`,`id_usuario_mod`,`fecha_mod`,`id_menu_inicio`) values (1,'Administrador','Administrador de la aplicación',1,1,'2014-12-04 00:00:00',1,'2018-07-14 08:53:05',2),(2,'Operario','Operario - 12345',1,1,'2018-05-04 13:59:55',1,'2018-05-04 14:00:59',3),(3,'Prueba','Prueba Prueba',1,1,'2018-05-05 09:51:15',1,'2018-05-05 09:53:59',2);

/*Table structure for table `permisoss` */

DROP TABLE IF EXISTS `permisoss`;

CREATE TABLE `permisoss` (
  `id_permiso` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'identificador permisos',
  `id_perfil` int(10) DEFAULT NULL COMMENT 'identificador perfil',
  `id_menu` int(10) DEFAULT NULL COMMENT 'identificador menu',
  `tipo_acceso` int(1) DEFAULT NULL COMMENT '1=consulta; 2=completo',
  `id_usuario_crea` int(10) DEFAULT NULL COMMENT 'identificador usuario creador',
  `fecha_crea` datetime DEFAULT NULL COMMENT 'fecha de creacion del registro',
  `id_usuario_mod` int(10) DEFAULT NULL COMMENT 'identificador usuario que modifica',
  `fecha_mod` datetime DEFAULT NULL COMMENT 'fecha modificacion',
  PRIMARY KEY (`id_permiso`),
  UNIQUE KEY `uk_permisos` (`id_perfil`,`id_menu`),
  KEY `fk_permisos_menus` (`id_menu`),
  KEY `fk_permisos_usuarios_mod` (`id_usuario_mod`),
  KEY `fk_permisos_usuarios_crea` (`id_usuario_crea`),
  CONSTRAINT `fk_permisos_menus` FOREIGN KEY (`id_menu`) REFERENCES `menus` (`id_menu`),
  CONSTRAINT `fk_permisos_perfiles` FOREIGN KEY (`id_perfil`) REFERENCES `perfiles` (`id_perfil`),
  CONSTRAINT `fk_permisos_usuarios_crea` FOREIGN KEY (`id_usuario_crea`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_permisos_usuarios_mod` FOREIGN KEY (`id_usuario_mod`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

/*Data for the table `permisoss` */

insert  into `permisoss`(`id_permiso`,`id_perfil`,`id_menu`,`tipo_acceso`,`id_usuario_crea`,`fecha_crea`,`id_usuario_mod`,`fecha_mod`) values (7,2,2,2,1,'2018-05-04 14:00:59',NULL,NULL),(8,2,3,2,1,'2018-05-04 14:00:59',NULL,NULL),(15,3,2,2,1,'2018-05-05 09:53:59',NULL,NULL),(26,1,2,2,1,'2018-07-14 08:53:05',NULL,NULL),(27,1,3,2,1,'2018-07-14 08:53:06',NULL,NULL),(28,1,5,2,1,'2018-07-14 08:53:06',NULL,NULL),(29,1,6,2,1,'2018-07-14 08:53:06',NULL,NULL),(30,1,7,2,1,'2018-07-14 08:53:06',NULL,NULL);

/*Table structure for table `temporal` */

DROP TABLE IF EXISTS `temporal`;

CREATE TABLE `temporal` (
  `id_temp` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_temp`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

/*Data for the table `temporal` */

insert  into `temporal`(`id_temp`,`id_usuario`,`valor`) values (23,2,'2'),(24,1,'1'),(25,1,'2'),(26,1,'3');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(10) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del usuario',
  `nombre_usuario` varchar(100) DEFAULT NULL COMMENT 'Nombre del usuario',
  `apellido_usuario` varchar(100) DEFAULT NULL COMMENT 'Apellido usuario',
  `login_usuario` varchar(20) DEFAULT NULL COMMENT 'login de usuario para iniciar sesion.',
  `clave_usuario` varchar(50) DEFAULT NULL COMMENT 'ContraseÃ±a del usuario para iniciar sesion.',
  `id_tipo_documento` bigint(20) DEFAULT NULL COMMENT 'Id Tipo de documento',
  `numero_documento` varchar(20) DEFAULT NULL COMMENT 'Numero de documento',
  `ind_activo` int(1) DEFAULT '1' COMMENT 'Indicador de actividad del usuario 1=si | 0=no',
  `id_usuario_crea` int(10) DEFAULT NULL COMMENT 'identificador del usuario creador',
  `fecha_crea` datetime DEFAULT NULL COMMENT 'fecha creacion del usuario',
  `id_usuario_mod` int(10) DEFAULT NULL COMMENT 'Identificacion del usuario que modifica el registro',
  `fecha_mod` datetime DEFAULT NULL COMMENT 'Fecha de la modificacion del registro.',
  `email_usuario` varchar(100) DEFAULT NULL COMMENT 'Dirección de email del usuario',
  `telefono_usuario` varchar(10) DEFAULT NULL COMMENT 'Teléfono del usuario',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `uk_usuarios` (`login_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DEFAULT;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usuario`,`nombre_usuario`,`apellido_usuario`,`login_usuario`,`clave_usuario`,`id_tipo_documento`,`numero_documento`,`ind_activo`,`id_usuario_crea`,`fecha_crea`,`id_usuario_mod`,`fecha_mod`,`email_usuario`,`telefono_usuario`) values (1,'Administrador','Administrador','admin','68be59da0cf353ae74ee8db8b005454b515e1a22',1,'1095636266',1,2,'2015-11-10 11:13:34',1,'2018-05-05 10:04:41','info@parapentechicamocha.com',NULL),(2,'Operario','Operario','operario','221f8e3890ed43260b02bb7aabc9cb5dadcff4db',1,'123456',1,1,'2018-05-04 14:02:12',1,'2018-05-05 09:52:48','juan@gmail.com','9999999'),(3,'Prueba 2','Prueba 2','prueba','df67df5fb1fcd5f5074dbe2f88ff4b86c3b30a01',1,'888888',1,1,'2018-05-05 09:54:39',NULL,NULL,'juan@gmail.com','24454');

/*Table structure for table `usuarios_perfiles` */

DROP TABLE IF EXISTS `usuarios_perfiles`;

CREATE TABLE `usuarios_perfiles` (
  `id_usuario_perfil` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'identificador usuarios_perfil',
  `id_usuario` int(10) DEFAULT NULL COMMENT 'Identificador usuario',
  `id_perfil` int(10) DEFAULT NULL COMMENT 'Identificador Perfiles',
  `id_usuario_crea` int(10) DEFAULT NULL COMMENT 'identificacion usuario creador',
  `fecha_crea` datetime DEFAULT NULL COMMENT 'fecha creacion del registro',
  `id_usuario_mod` int(10) DEFAULT NULL COMMENT 'identificacion usuario que modifica el registro',
  `fecha_mod` datetime DEFAULT NULL COMMENT 'fecha de modificacion del registro',
  PRIMARY KEY (`id_usuario_perfil`),
  UNIQUE KEY `uk_usuarios_perfiles` (`id_usuario`,`id_perfil`),
  KEY `fk_usuarios_perfiles_usuarios_crea` (`id_usuario_crea`),
  KEY `fk_usuarios_perfiles_usuarios_mod` (`id_usuario_mod`),
  KEY `fk_usuarios_perfiles_perfiles` (`id_perfil`),
  CONSTRAINT `fk_usuarios_perfiles_perfiles` FOREIGN KEY (`id_perfil`) REFERENCES `perfiles` (`id_perfil`),
  CONSTRAINT `fk_usuarios_perfiles_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_usuarios_perfiles_usuarios_crea` FOREIGN KEY (`id_usuario_crea`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_usuarios_perfiles_usuarios_mod` FOREIGN KEY (`id_usuario_mod`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `usuarios_perfiles` */

insert  into `usuarios_perfiles`(`id_usuario_perfil`,`id_usuario`,`id_perfil`,`id_usuario_crea`,`fecha_crea`,`id_usuario_mod`,`fecha_mod`) values (1,1,1,NULL,NULL,NULL,NULL),(3,2,2,1,'2018-05-04 14:02:12',NULL,NULL),(4,3,3,1,'2018-05-05 09:54:39',NULL,NULL),(5,1,2,1,'2018-05-05 10:04:41',NULL,NULL),(6,1,3,1,'2018-05-05 10:04:41',NULL,NULL);

/* Procedure structure for procedure `pa_crear_equipo` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_crear_equipo` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003 PROCEDURE `pa_crear_equipo`(
	IN `in_txt_nombre_equipo` VARCHAR(100),
	IN `in_txt_proceso_maquina` VARCHAR(100),
	IN `in_cmb_estado` bigINT(20),
	OUT `out_id_equipo` INT(10)
)
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_id_equipo=-1;
    
    /*Se crea la usuario*/
    START TRANSACTION;
    
    INSERT INTO equipos
    (nombre_equipo, proceso_maquina, estado)
    VALUES (in_txt_nombre_equipo, in_txt_proceso_maquina, in_cmb_estado);
    
    COMMIT;
    
    /*Se obtiene el id del registro insertado*/
    SELECT LAST_INSERT_ID() INTO out_id_equipo;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_crear_mantenimiento` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_crear_mantenimiento` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003PROCEDURE `pa_crear_mantenimiento`(IN in_id_equipo BIGINT(20),
                                   IN in_cmb_operarios BIGINT(20),                                          
                                   IN in_fecha_ini date,
                                   IN in_fecha_fin DATe,
				   IN in_txt_observaciones VARCHAR(200),				   
                                   OUT out_id_equipo INT(10))
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_id_equipo=-1;
    
    /*Se crea la usuario*/
    START TRANSACTION;
    
    INSERT INTO mantenimiento_equipos (id_equipo, id_usuario, fecha_inicio, fecha_fin, observaciones)
    VALUES(in_id_equipo, in_cmb_operarios, in_fecha_ini, in_fecha_fin, in_txt_observaciones); 
    
    update equipos set estado = 9 where id_equipo = in_id_equipo and in_fecha_fin = '0000-00-00';
	
    COMMIT;
    
    /*Se obtiene el id del registro insertado*/
    SELECT LAST_INSERT_ID() INTO out_id_equipo;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_crear_perfil` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_crear_perfil` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003  PROCEDURE `pa_crear_perfil`(IN in_nombre_perfil VARCHAR(100),
                                   IN in_descripcion VARCHAR(100),                                    
                                   IN in_id_menu_inicio INT(10),                                                                      
                                   IN in_id_usuario INT(10),
                                   OUT out_id_perfil INT(10))
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_id_perfil=-1;
    
    /*Se crea la usuario*/
    START TRANSACTION;
    
    INSERT INTO perfiles
    (nombre_perfil, descripcion, id_menu_inicio, ind_activo, id_usuario_crea, fecha_crea)
    VALUES (in_nombre_perfil, in_descripcion, in_id_menu_inicio, 1, in_id_usuario, NOW());
    
    COMMIT;
    
    /*Se obtiene el id del registro insertado*/
    SELECT LAST_INSERT_ID() INTO out_id_perfil;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_crear_usuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_crear_usuario` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003  PROCEDURE `pa_crear_usuario`(IN in_nombre_usuario VARCHAR(100),
                                    IN in_apellido_usuario VARCHAR(100),
                                    IN in_id_tipo_documento BIGINT(20),
                                    IN in_numero_documento VARCHAR(20),                                    
                                    IN in_login_usuario VARCHAR(20),
                                    IN in_clave_usuario VARCHAR(50),
                                    IN in_id_usuario_crea INT(10),
                                    IN in_email varchar(100),
                                    IN in_telefono VARCHAR(10),
                                    OUT out_id_usuario INT(10))
    MODIFIES SQL DATA
BEGIN
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_id_usuario=-1;
    
    /*Se crea la usuario*/
    START TRANSACTION;
    
    INSERT INTO usuarios
    (nombre_usuario, apellido_usuario, id_tipo_documento, numero_documento, login_usuario, clave_usuario, ind_activo, id_usuario_crea, fecha_crea, email_usuario, telefono_usuario)
    VALUES (in_nombre_usuario, in_apellido_usuario, in_id_tipo_documento, in_numero_documento, in_login_usuario, SHA(CONCAT(in_login_usuario, '|', in_clave_usuario)), 1, in_id_usuario_crea, NOW(), in_email, in_telefono);
    
    COMMIT;
    
    /*Se obtiene el id del registro insertado*/
    SELECT LAST_INSERT_ID() INTO out_id_usuario;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_editar_equipo` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_editar_equipo` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003  PROCEDURE `pa_editar_equipo`(
	IN `in_txt_nombre_equipo` VARCHAR(100),
	IN `in_txt_proceso_maquina` VARCHAR(100),
	IN `in_cmb_estado` bigINT(1),
	IN `in_hdd_id_equipo` bigINT(10),
	OUT `out_resultado` INT(1)
)
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_resultado = -1;
    
    /*Se crea la perfiles*/
    START TRANSACTION;
    
    	
	/*Actualiza el registro en la tabla perfiles*/
   UPDATE equipos SET
	nombre_equipo=in_txt_nombre_equipo,	
	proceso_maquina=in_txt_proceso_maquina,
	estado=in_cmb_estado		
	WHERE id_equipo=in_hdd_id_equipo;
	
	DELETE FROM equipo_variable WHERE id_equipo = in_hdd_id_equipo;
	
    COMMIT;
    
    SET out_resultado = in_hdd_id_equipo;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_editar_mantenimiento` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_editar_mantenimiento` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003  PROCEDURE `pa_editar_mantenimiento`(IN in_id_equipo BIGINT(20),
                                   IN in_cmb_operarios BIGINT(20),
                                   IN in_fecha_ini DATE,
                                   IN in_fecha_fin DATE,
				   IN in_txt_observaciones VARCHAR(200),				   
				   IN in_id_mantenimiento BIGINT(20),
                                   OUT out_id_equipo INT(10))
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_id_equipo=-1;
    
    /*Se crea la usuario*/
    START TRANSACTION;
    
    
	UPDATE mantenimiento_equipos 
	SET		 	
	fecha_inicio = in_fecha_ini, 
	fecha_fin = in_fecha_fin, 
	observaciones = in_txt_observaciones
	WHERE id_mantenimiento = in_id_mantenimiento;
	
	IF in_fecha_fin != '0000-00-00' THEN
	 UPDATE equipos SET estado = 7 WHERE id_equipo = in_id_equipo;	
	ELSE
	 UPDATE equipos SET estado = 9 WHERE id_equipo = in_id_equipo;
	END IF;
	    
	
	
    COMMIT;
    
    SET out_id_equipo = 1;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_editar_perfil` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_editar_perfil` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003  PROCEDURE `pa_editar_perfil`(IN in_id_perfil INT(10),
                                    IN in_nombre_perfil VARCHAR(100),
                                    IN in_descripcion VARCHAR(100), 
                                    IN in_id_menu_inicio INT(10),                                    
                                    IN in_ind_activo INT(1),                                    
                                    IN in_id_usuario INT(10),
                                    OUT out_resultado INT(1))
    MODIFIES SQL DATA
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_resultado = -1;
    
    /*Se crea la perfiles*/
    START TRANSACTION;
    
    	
	/*Elimina los permisos de la tabla permisos*/
	DELETE FROM permisoss
	WHERE id_perfil=in_id_perfil;
									 
	/*Actualiza el registro en la tabla perfiles*/
	UPDATE perfiles SET
	nombre_perfil=in_nombre_perfil,
	descripcion=in_descripcion,	
	id_menu_inicio=in_id_menu_inicio,	
	ind_activo=in_ind_activo,
	id_usuario_mod=in_id_usuario,
	fecha_mod=NOW()
	WHERE id_perfil=in_id_perfil;
	
    COMMIT;
    
    SET out_resultado = 1;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_editar_usuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_editar_usuario` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003 PROCEDURE `pa_editar_usuario`(IN in_id_usuario INT(10),
                                     IN in_nombre_usuario VARCHAR(100),
                                     IN in_apellido_usuario VARCHAR(100),
                                     IN in_id_tipo_documento INT(20),
                                     IN in_numero_documento VARCHAR(20),
                                     IN in_ind_activo INT(1),
                                     IN in_id_usuario_crea INT(10),
                                     IN in_email VARCHAR(100),
				     IN in_telefono VARCHAR(10),
                                     OUT out_resultado INT(1))
    MODIFIES SQL DATA
BEGIN
    DECLARE l_id_usuario_perfil INT(10);
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_resultado=-1;
    
    /*Se crea el usuario*/
    START TRANSACTION;    
    
    /*Elimina el perfil que no esta en la tabla temporal*/
    DELETE FROM usuarios_perfiles
    WHERE id_usuario=in_id_usuario
    AND id_perfil NOT IN (
        SELECT valor FROM temporal
        WHERE id_usuario=in_id_usuario
    );
    
    /*Se inserta el registro en la tabla usuarios_perfiles*/            
    INSERT INTO usuarios_perfiles
    (id_usuario, id_perfil, id_usuario_crea, fecha_crea)
    SELECT id_usuario, valor, in_id_usuario_crea, NOW()
    FROM temporal
    WHERE id_usuario=in_id_usuario
    AND valor NOT IN (
        SELECT id_perfil FROM usuarios_perfiles
        WHERE id_usuario=in_id_usuario
    );
    
    /*Actualiza el registro en la tabla usuarios*/
    UPDATE usuarios
    SET nombre_usuario=in_nombre_usuario,
    apellido_usuario=in_apellido_usuario,
    id_tipo_documento=in_id_tipo_documento,
    numero_documento=in_numero_documento,      
    ind_activo=in_ind_activo,
    id_usuario_mod=in_id_usuario_crea,
    fecha_mod=NOW(),
    email_usuario = in_email, 
    telefono_usuario = in_telefono
    WHERE id_usuario=in_id_usuario;
    
    COMMIT;
    
    SET out_resultado=1;
END */$$
DELIMITER ;

/* Procedure structure for procedure `pa_resetear_contrasena_usuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `pa_resetear_contrasena_usuario` */;

DELIMITER $$

/*!50003 CREATE */ /*!50017 DEFINER=`sistema`@`%`*/ /*!50003 PROCEDURE `pa_resetear_contrasena_usuario`(IN in_id_usuario INT(10),
							     OUT out_rta BIGINT(1))
    MODIFIES SQL DATA
BEGIN
	DECLARE l_login_usuario VARCHAR(20);
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
    DECLARE EXIT HANDLER FOR SQLWARNING ROLLBACK;
    
    SET out_rta=-1;
    
    START TRANSACTION;
    
    
	/*Almacena el login de usuario*/
	SELECT login_usuario INTO l_login_usuario
	FROM usuarios
	WHERE id_usuario = in_id_usuario;
	
	/*Resetea la contraseña del usuario*/
	UPDATE usuarios SET clave_usuario = SHA(CONCAT(l_login_usuario, '|', l_login_usuario))
	WHERE id_usuario = in_id_usuario;
    
        SET out_rta=1;
    
    COMMIT;
    
END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
