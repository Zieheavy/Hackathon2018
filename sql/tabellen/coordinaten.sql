-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 22 mrt 2018 om 08:23
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
  `voetbalschool_naam` text NOT NULL,
  `voetbalschool_adres` text NOT NULL,
  `voetbalschool_email` text NOT NULL,
  `voetbalschool_postcode` text NOT NULL,
  `voetbalschool_img` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `coordinaten`
--

INSERT INTO `coordinaten` (`id`, `voetbalschool_id`, `lat`, `lng`, `voetbalschool_naam`, `voetbalschool_adres`, `voetbalschool_email`, `voetbalschool_postcode`, `voetbalschool_img`) VALUES
(15, 1, 51.4391442, 5.4805866, 'PSV', 'Wijde Kerkstraat 5', 'info@philips.nl', '5707 AS Eindhoven', 'img/vestigingen/1.png'),
(16, 2, 53.2179036, 6.5661601, 'FC Groningen', 'Frans Handers 78', 'info@fcgroningen.nl', '9631 DF Groningen', 'img/vestigingen/2.png'),
(17, 3, 52.9932474, 6.5626143, 'FC Assen', 'Peperstraat 123', 'info@fcassen.nl', '8951 DD Assen', 'img/vestigingen/3.png'),
(18, 4, 52.961156, 5.9227026, 'FC Heerenveen', 'Engestraat 666', 'info@fcheerenveen.nl', '7527 ED Heerenveen', 'img/vestigingen/4.png'),
(19, 5, 51.9857548, 5.8988354, 'FC Arnhem', 'De Goorloper 1', 'info@vcgelderland.nl', '9624 BB Arnhem', 'img/vestigingen/5.png'),
(20, 6, 50.9985058, 5.8752279, 'FC Sittard', 'Zondestraat 90', 'info@fcsittard.nl', '1212 CD Sittard', 'img/vestigingen/6.png'),
(21, 7, 52.3701772, 4.8962924, 'AJAX', 'De Plein 85', 'info@ajax.nl', '3695 CQ Amsterdam', 'img/vestigingen/7.png'),
(22, 10, 51.8939096, 4.5233566, 'Feyenoord', 'De Kuip 1', 'info@feyenoord.nl', '9694 AA Rotterdam', 'img/vestigingen/8.png'),
(23, 14, 51.4862149, 5.6800712, 'Helmond Sport', 'Helmondstraat 1', 'info@helmondsport.nl', '9999 KK Helmond', 'img/vestigingen/9.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
