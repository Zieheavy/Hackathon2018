-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2018 at 09:17 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

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
-- Table structure for table `clubsinfo`
--

CREATE TABLE `clubsinfo` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `club_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clubsinfo`
--

INSERT INTO `clubsinfo` (`id`, `title`, `content`, `club_id`) VALUES
(4, 'Title tile4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.', 2),
(5, 'Title tile5', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.', 2),
(6, 'Title tile6', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.', 2),
(7, 'Title tile7', 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,', 3),
(66, 'Title tile1', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.', 1),
(67, 'Title tile3', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coordinaten`
--

CREATE TABLE `coordinaten` (
  `id` int(11) NOT NULL,
  `voetbalschool_id` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `voetbalschool_naam` text NOT NULL,
  `voetbalschool_adres` text NOT NULL,
  `voetbalschool_email` text NOT NULL,
  `voetbalschool_postcode` text NOT NULL,
  `voetbalschool_img` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coordinaten`
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

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `person` varchar(25) NOT NULL,
  `datum` varchar(16) NOT NULL,
  `tijd` varchar(16) NOT NULL,
  `user_id` int(11) NOT NULL,
  `dag` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `person`, `datum`, `tijd`, `user_id`, `dag`) VALUES
(11, 'Henk', '20 maart', '17:00 tm/ 18:30', 4, 'dinsdag'),
(12, 'Piet', '22 maart', '17:00 tm/ 19:30', 4, 'donderdag');

-- --------------------------------------------------------

--
-- Table structure for table `fotosenvideos`
--

CREATE TABLE `fotosenvideos` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `voedbalschool_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fotosenvideos`
--

INSERT INTO `fotosenvideos` (`id`, `url`, `voedbalschool_id`) VALUES
(2, '5.jpg', 1),
(3, '4.jpg', 1),
(4, '3.jpg', 2),
(5, '2.jpg', 2),
(6, '1.jpg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `ratingcoach`
--

CREATE TABLE `ratingcoach` (
  `id` int(11) NOT NULL,
  `rating` double(2,1) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `coach` int(11) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ratingcoach`
--

INSERT INTO `ratingcoach` (`id`, `rating`, `comment`, `coach`, `user`) VALUES
(2, 1.5, 'asdf', 3, 4),
(3, 2.5, 'adf', 3, 4),
(4, 2.5, 'asdf', 3, 4),
(17, 5.0, 'asdf', 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `ratingparent`
--

CREATE TABLE `ratingparent` (
  `id` int(11) NOT NULL,
  `coach` int(11) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `rating` double(2,1) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ratingparent`
--

INSERT INTO `ratingparent` (`id`, `coach`, `comment`, `rating`, `user`) VALUES
(1, 4, 'asdf', 4.0, 3),
(2, 4, 'adsf', 2.0, 3),
(3, 4, 'Meer verbetering nodig', 2.5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `trainingen`
--

CREATE TABLE `trainingen` (
  `naam` text NOT NULL,
  `kosten` text NOT NULL,
  `van` text NOT NULL,
  `tot` text NOT NULL,
  `min_deelnemers` int(11) NOT NULL,
  `max_deelnemers` int(11) NOT NULL,
  `omschrijving` text NOT NULL,
  `club_id` text NOT NULL,
  `coach` text NOT NULL,
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL,
  `datum` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trainingen`
--

INSERT INTO `trainingen` (`naam`, `kosten`, `van`, `tot`, `min_deelnemers`, `max_deelnemers`, `omschrijving`, `club_id`, `coach`, `id`, `name`, `type`, `datum`) VALUES
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 10, 'simple', 'voetbal', '2018-03-31'),
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 12, 'simple', 'voetbal', '2018-03-31'),
('100 meter sprintje trekken', '19,99', '18:00', '19:00', 4, 50, 'Iedereen wil wel eens net zo snel zijn als Ronaldo of Messi en daarom organiseer ik een 100-Meters-Challenge!', '14', 'Hafiz Elkilic', 11, 'simple', 'voetbal', '2018-03-31'),
('Bal dribbelen', '199,99', '10:00', '19:00', 10, 100, 'Er is een speciale dag voor alle sporters. Lunch en dine is inbegrepen!', '1', 'Louis van Gaal', 7, 'deluxe', 'voetbal', '2018-03-24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `Privileges` int(2) NOT NULL,
  `spotclub_id` int(11) DEFAULT NULL,
  `naam` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `Privileges`, `spotclub_id`, `naam`) VALUES
(1, 'admin@gmail.com', 'admin', 3, NULL, 'admin'),
(2, 'sportclub@gmail.com', 'sportclub', 2, 1, 'sportclub'),
(3, 'coach@gmail.com', 'coach', 1, 1, 'coach'),
(4, 'parent@gmail.com', 'parent', 0, NULL, 'parent');

-- --------------------------------------------------------

--
-- Table structure for table `voetbalscholen`
--

CREATE TABLE `voetbalscholen` (
  `id` int(11) NOT NULL,
  `naam` text NOT NULL,
  `leden` int(11) NOT NULL,
  `info` varchar(1000) NOT NULL,
  `Location` varchar(100) NOT NULL,
  `Traningen` varchar(20) NOT NULL,
  `Trainers` varchar(20) NOT NULL,
  `Review` double(4,1) NOT NULL,
  `price` double(6,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voetbalscholen`
--

INSERT INTO `voetbalscholen` (`id`, `naam`, `leden`, `info`, `Location`, `Traningen`, `Trainers`, `Review`, `price`) VALUES
(1, 'PSV', 455, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'eindhoven', '5', '5', 1.9, 99.99),
(2, 'AJAX', 234, 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'amsterdam', '4', '5', 4.5, 199.50),
(3, 'SVS Stevensbeek', 20, 'tiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.', 'stevensbeek', '4', '5', 3.3, 50.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clubsinfo`
--
ALTER TABLE `clubsinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coordinaten`
--
ALTER TABLE `coordinaten`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fotosenvideos`
--
ALTER TABLE `fotosenvideos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratingcoach`
--
ALTER TABLE `ratingcoach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratingparent`
--
ALTER TABLE `ratingparent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainingen`
--
ALTER TABLE `trainingen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voetbalscholen`
--
ALTER TABLE `voetbalscholen`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clubsinfo`
--
ALTER TABLE `clubsinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
--
-- AUTO_INCREMENT for table `coordinaten`
--
ALTER TABLE `coordinaten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `fotosenvideos`
--
ALTER TABLE `fotosenvideos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `ratingcoach`
--
ALTER TABLE `ratingcoach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `ratingparent`
--
ALTER TABLE `ratingparent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `trainingen`
--
ALTER TABLE `trainingen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `voetbalscholen`
--
ALTER TABLE `voetbalscholen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
