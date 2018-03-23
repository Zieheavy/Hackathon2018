-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 23 mrt 2018 om 08:16
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
-- Tabelstructuur voor tabel `trainingen`
--

DROP TABLE IF EXISTS `trainingen`;
CREATE TABLE IF NOT EXISTS `trainingen` (
  `naam` text NOT NULL,
  `kosten` text NOT NULL,
  `van` text NOT NULL,
  `tot` text NOT NULL,
  `min_deelnemers` int(11) NOT NULL,
  `max_deelnemers` int(11) NOT NULL,
  `omschrijving` text NOT NULL,
  `club_id` text NOT NULL,
  `coach` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `type` text NOT NULL,
  `datum` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `trainingen`
--

INSERT INTO `trainingen` (`naam`, `kosten`, `van`, `tot`, `min_deelnemers`, `max_deelnemers`, `omschrijving`, `club_id`, `coach`, `id`, `name`, `type`, `datum`) VALUES
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 10, 'simple', 'voetbal', '2018-03-31'),
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 12, 'simple', 'voetbal', '2018-03-31'),
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 11, 'simple', 'voetbal', '2018-03-31'),
('Bal dribbelen', '199,99', '10:00', '19:00', 10, 100, 'Er is een speciale dag voor alle sporters. Lunch en dine is inbegrepen!', '1', 'Louis van Gaal', 7, 'deluxe', 'voetbal', '2018-03-24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
