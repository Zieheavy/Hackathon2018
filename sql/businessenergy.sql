-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 20 mrt 2018 om 11:20
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
-- Tabelstructuur voor tabel `fotosenvideos`
--

DROP TABLE IF EXISTS `fotosenvideos`;
CREATE TABLE IF NOT EXISTS `fotosenvideos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `voedbalschool_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `fotosenvideos`
--

INSERT INTO `fotosenvideos` (`id`, `url`, `voedbalschool_id`) VALUES
(1, 'images/NB/test.png', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `provincies`
--

DROP TABLE IF EXISTS `provincies`;
CREATE TABLE IF NOT EXISTS `provincies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` text NOT NULL,
  `afkorting` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `provincies`
--

INSERT INTO `provincies` (`id`, `naam`, `afkorting`) VALUES
(1, 'Groningen', 'GR'),
(2, 'Drenthe', 'DR'),
(3, 'Friesland', 'FR'),
(4, 'Gelderland', 'GD'),
(5, 'Limburg', 'LB'),
(6, 'Noord-Brabant', 'NB'),
(7, 'Noord-Holland', 'NH'),
(8, 'Overijssel', 'OV'),
(9, 'Utrecht', 'UT'),
(10, 'Zuid-Holland', 'ZH'),
(11, 'Zeeland', 'ZL'),
(12, 'Flevoland', 'FL');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `trainingen`
--

DROP TABLE IF EXISTS `trainingen`;
CREATE TABLE IF NOT EXISTS `trainingen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` text NOT NULL,
  `datum` datetime NOT NULL,
  `prijs` decimal(10,0) NOT NULL,
  `deelnemers` int(11) NOT NULL,
  `ingeschreven` int(11) NOT NULL,
  `beschrijving` text NOT NULL,
  `locatie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `voetbalscholen`
--

DROP TABLE IF EXISTS `voetbalscholen`;
CREATE TABLE IF NOT EXISTS `voetbalscholen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` text NOT NULL,
  `provincie_id` int(11) NOT NULL,
  `leden` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `voetbalscholen`
--

INSERT INTO `voetbalscholen` (`id`, `naam`, `provincie_id`, `leden`) VALUES
(1, 'PSV', 6, 455);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
