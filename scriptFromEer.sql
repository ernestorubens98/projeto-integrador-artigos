-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: review_artigos
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artigo_categorias`
--

DROP TABLE IF EXISTS `artigo_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigo_categorias` (
  `fk_artigo` int NOT NULL,
  `fk_categoria` int NOT NULL,
  PRIMARY KEY (`fk_artigo`,`fk_categoria`),
  KEY `fk_categorias_has_artigos_artigos1_idx` (`fk_artigo`),
  KEY `fk_categorias_has_artigos_categorias1_idx` (`fk_categoria`),
  CONSTRAINT `fk_categorias_has_artigos_artigos1` FOREIGN KEY (`fk_artigo`) REFERENCES `artigos` (`id_artigo`),
  CONSTRAINT `fk_categorias_has_artigos_categorias1` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigo_categorias`
--

LOCK TABLES `artigo_categorias` WRITE;
/*!40000 ALTER TABLE `artigo_categorias` DISABLE KEYS */;
INSERT INTO `artigo_categorias` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `artigo_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artigos`
--

DROP TABLE IF EXISTS `artigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigos` (
  `id_artigo` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `resumo` varchar(45) NOT NULL,
  `arquivo_artigo` varchar(200) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  PRIMARY KEY (`id_artigo`),
  UNIQUE KEY `id_artigo_UNIQUE` (`id_artigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigos`
--

LOCK TABLES `artigos` WRITE;
/*!40000 ALTER TABLE `artigos` DISABLE KEYS */;
INSERT INTO `artigos` VALUES (1,'ArtigoDavi','auidhasuidhuaishduisahdusa',NULL,'1000-01-01 00:00:00'),(2,'ArtigoErn','asdasdasdasdasdasdsad',NULL,'1000-01-01 00:00:00');
/*!40000 ALTER TABLE `artigos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artigos_autores`
--

DROP TABLE IF EXISTS `artigos_autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigos_autores` (
  `id_art_autor` int NOT NULL AUTO_INCREMENT,
  `fk_artigo` int NOT NULL,
  `fk_usuario` int NOT NULL,
  `is_usuario` tinyint DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_art_autor`,`fk_artigo`,`fk_usuario`),
  UNIQUE KEY `id_art_autor_UNIQUE` (`id_art_autor`),
  KEY `fk_artigos_has_usuarios_usuarios1_idx` (`fk_usuario`),
  KEY `fk_artigos_has_usuarios_artigos1_idx` (`fk_artigo`),
  CONSTRAINT `fk_artigos_has_usuarios_artigos1` FOREIGN KEY (`fk_artigo`) REFERENCES `artigos` (`id_artigo`),
  CONSTRAINT `fk_artigos_has_usuarios_usuarios1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigos_autores`
--

LOCK TABLES `artigos_autores` WRITE;
/*!40000 ALTER TABLE `artigos_autores` DISABLE KEYS */;
INSERT INTO `artigos_autores` VALUES (1,1,5,1,NULL),(2,2,1,1,NULL),(3,1,1,1,NULL);
/*!40000 ALTER TABLE `artigos_autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria_UNIQUE` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Biologia'),(2,'Computacao');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id_comentario` int NOT NULL AUTO_INCREMENT,
  `texto_comentario` varchar(500) NOT NULL,
  `fk_usuario` int NOT NULL,
  `fk_artigo` int NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id_comentario`,`fk_usuario`,`fk_artigo`),
  UNIQUE KEY `id_comentario_UNIQUE` (`id_comentario`),
  KEY `fk_comentarios_usuarios1_idx` (`fk_usuario`),
  KEY `fk_comentarios_artigos1_idx` (`fk_artigo`),
  CONSTRAINT `fk_comentarios_artigos1` FOREIGN KEY (`fk_artigo`) REFERENCES `artigos` (`id_artigo`),
  CONSTRAINT `fk_comentarios_usuarios1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Legal!',1,1,'1000-01-01 00:00:00'),(2,'Nao gostei',1,1,'1000-01-01 00:00:00'),(3,'Bom',5,2,'1000-01-01 00:00:00'),(4,'Ruim',5,1,'1000-01-01 00:00:00'),(5,'Melhor artigo',1,2,'1000-01-01 00:00:00');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notas`
--

DROP TABLE IF EXISTS `notas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notas` (
  `fk_usuario` int NOT NULL,
  `fk_artigo` int NOT NULL,
  `nota` decimal(4,2) DEFAULT '0.00',
  PRIMARY KEY (`fk_usuario`,`fk_artigo`),
  KEY `fk_curtidas_usuarios_idx` (`fk_usuario`),
  KEY `fk_nota_artigos1_idx` (`fk_artigo`),
  CONSTRAINT `fk_curtidas_usuarios` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_nota_artigos1` FOREIGN KEY (`fk_artigo`) REFERENCES `artigos` (`id_artigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notas`
--

LOCK TABLES `notas` WRITE;
/*!40000 ALTER TABLE `notas` DISABLE KEYS */;
INSERT INTO `notas` VALUES (1,2,2.50),(5,1,5.90);
/*!40000 ALTER TABLE `notas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `area_atuacao` varchar(100) NOT NULL,
  `is_admin` tinyint NOT NULL DEFAULT '0',
  `foto_perfil` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ernesto','er@gmail.com','123456','Desenvolvedor',0,NULL),(5,'Davi','davi@gmail.com','123456','Programador',1,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-19 14:43:04
