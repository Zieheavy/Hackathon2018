-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 20 mrt 2018 om 15:33
-- Serverversie: 5.7.19
-- PHP-versie: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `businessenergy`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `coordinaten`
--

DROP TABLE IF EXISTS `coordinaten`;
CREATE TABLE IF NOT EXISTS `coordinaten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voetbalschool_id` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `coordinaten`
--

INSERT INTO `coordinaten` (`id`, `voetbalschool_id`, `lat`, `lng`) VALUES
(15, 1, 51.4391442, 5.4805866),
(16, 2, 53.2179036, 6.5661601),
(17, 3, 52.9932474, 6.5626143),
(18, 4, 52.961156, 5.9227026),
(19, 5, 51.9857548, 5.8988354),
(20, 6, 50.9985058, 5.8752279),
(21, 7, 52.3701772, 4.8962924),
(22, 10, 51.8939096, 4.5233566),
(23, 14, 51.4862149, 5.6800712);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
