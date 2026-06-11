-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jun 11, 2026 at 11:37 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventarisweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `del` int(11) NOT NULL,
  `ctm` datetime DEFAULT NULL,
  `mtm` datetime DEFAULT NULL,
  `dtm` datetime DEFAULT NULL,
  `usr` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id`, `username`, `password`, `nama`, `del`, `ctm`, `mtm`, `dtm`, `usr`) VALUES
(1, 'admin1', 'adminsatu', 'ADMIN 1', 0, '2026-04-26 10:59:21', NULL, NULL, 0),
(2, 'admin2', 'admindua', 'ADMIN 2', 0, '2026-04-26 10:59:21', NULL, NULL, 0),
(3, 'test', 'test', 'test', 0, '2026-05-21 10:41:47', NULL, NULL, 0),
(4, 'test', 'test', 'test', 0, '2026-05-21 10:48:20', NULL, NULL, 0),
(5, 'asasasasaasasasasa', 'asaxaaasaasasasa', 'asdsdsasasasasasa', 1, '2026-05-21 10:48:26', '2026-05-21 17:25:16', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `perangkat`
--

CREATE TABLE `perangkat` (
  `id` int(11) NOT NULL,
  `nama_perangkat` varchar(200) NOT NULL,
  `jenis_perangkat` enum('MOUSE','KEYBOARD','CPU','MONITOR') NOT NULL,
  `posisi` enum('LAB A','LAB B','LAB C','LAB D') NOT NULL,
  `del` int(11) NOT NULL,
  `ctm` datetime DEFAULT NULL,
  `mtm` datetime DEFAULT NULL,
  `dtm` datetime DEFAULT NULL,
  `usr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perangkat`
--

INSERT INTO `perangkat` (`id`, `nama_perangkat`, `jenis_perangkat`, `posisi`, `del`, `ctm`, `mtm`, `dtm`, `usr`) VALUES
(1, 'CADXC', 'MOUSE', 'LAB A', 0, '2026-05-26 19:02:06', NULL, NULL, 0),
(2, 'AABBC', 'MOUSE', 'LAB B', 0, '2026-05-26 19:02:06', '2026-05-26 19:09:04', NULL, 0),
(3, 'AABBX', 'CPU', 'LAB B', 1, '2026-05-26 19:12:56', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perangkat`
--
ALTER TABLE `perangkat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `perangkat`
--
ALTER TABLE `perangkat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
