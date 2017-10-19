-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 13, 2017 at 11:20 PM
-- Server version: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SampleData`
--

-- --------------------------------------------------------

--
-- Table structure for table `SampleDataTable`
--

CREATE TABLE `SampleDataTable` (
  `id` int(11) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `type_of_record` varchar(32) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SampleDataTable`
--

INSERT INTO `SampleDataTable` (`id`, `first_name`, `last_name`, `type_of_record`, `email`) VALUES
(1, 'tester', 'last_tester', 'salesforce', 'tester@gmail.com'),
(2, 'tester1', 'last_tester1', 'eloqua', 'tester1@gmail.com'),
(3, 'tester2', 'last_tester2', 'salesforce', 'tester2@gmail.com'),
(4, 'tester3', 'last_tester3', 'eloqua', 'tester3@gmail.com'),
(5, 'tester4', 'last_tester4', 'salesforce', 'tester4@gmail.com'),
(6, 'tester4', 'last_tester4', 'salesforce', 'tester4@gmail.com'),
(7, 'tester5', 'last_tester5', 'salesforce', 'tester5@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SampleDataTable`
--
ALTER TABLE `SampleDataTable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `SampleDataTable`
--
ALTER TABLE `SampleDataTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
