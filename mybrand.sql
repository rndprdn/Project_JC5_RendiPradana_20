-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 05:16 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mybrand`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `waktu_dibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama_lengkap`, `username`, `password`, `email`, `waktu_dibuat`) VALUES
(1, 'Rendi Pradana', 'admin', 'admin', 'rendipradana@gmail.com', '2018-08-09 07:50:41');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `nama_produk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `foto_produk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(11) NOT NULL,
  `size` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `qty` int(11) DEFAULT '1',
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `id_user`, `product_id`, `nama_produk`, `foto_produk`, `desk`, `harga`, `size`, `qty`, `status`) VALUES
(66, 2, 1, 'Peci Samase Pakol Abu', 'samase_abu.jpg', 'PECI SAMASE PAKOL ABU\nHIGH QUALITY MATERIALS', 40000, '5', 1, 0),
(67, 2, 15, 'Samase Kurta Blue denim', 'samse_bluedenim.jpg', 'SAMASE KURTA LIMITED EDITION', 199000, '3', 1, 0),
(68, 2, 1, 'Peci Samase Pakol Abu', 'samase_abu.jpg', 'PECI SAMASE PAKOL ABU\nHIGH QUALITY MATERIALS', 40000, '5', 1, 0),
(69, 2, 14, 'Sirwal Samase Peanut', 'samase_peanut.jpg', 'SIRWAL KANGAROO LIMITED EDITION', 220000, '3', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `category_produk`
--

CREATE TABLE `category_produk` (
  `id` int(11) NOT NULL,
  `category` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category_produk`
--

INSERT INTO `category_produk` (`id`, `category`) VALUES
(1, 'Gamis'),
(2, 'Sirwal'),
(3, 'Jubba'),
(4, 'Kurta'),
(5, 'Peci'),
(6, 'All Produk');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `id` int(11) NOT NULL,
  `delivery` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `delivery_method`
--

INSERT INTO `delivery_method` (`id`, `delivery`) VALUES
(1, 'JNE'),
(2, 'TIKI'),
(3, 'J&T');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `kode_invoice` int(11) NOT NULL,
  `nama_lengkap` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `kota` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `negara` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `kodepos` int(6) NOT NULL,
  `no_hp` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `payment` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `delivery` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `nama_produk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `harga_barang` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `subtotal` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `waktu_co` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `kode_invoice`, `nama_lengkap`, `alamat`, `kota`, `negara`, `kodepos`, `no_hp`, `email`, `payment`, `delivery`, `nama_produk`, `qty`, `harga_barang`, `subtotal`, `waktu_co`) VALUES
(22, 0, 'aaaa', 'aaaaa', 'aaaa', 'aaaa', 22222, '2222', '222@gmail.com', 'Bank Mandiri Syariah', 'JNE', 'Peci Samase Pakol Biru', 1, '40000', '40000', '2018-08-26 22:17:44'),
(23, 0, 'aaaa', 'aaaaa', 'aaaa', 'aaaa', 22222, '2222', '222@gmail.com', 'Bank Mandiri Syariah', 'JNE', 'Peci Samase Pakol Abu', 1, '40000', '40000', '2018-08-26 22:17:44'),
(24, 0, 'aaaa', 'aaaaa', 'aaaa', 'aaaa', 22222, '2222', '222@gmail.com', 'Bank Mandiri Syariah', 'JNE', 'Peci Samase Pakol Putih', 1, '40000', '40000', '2018-08-26 22:17:44'),
(25, 0, 'aaaa', 'aaaaa', 'aaaa', 'aaaa', 22222, '2222', '222@gmail.com', 'Bank Mandiri Syariah', 'JNE', 'Samase Jubba Raglan Putih-Abu', 1, '349000', '349000', '2018-08-26 22:17:45'),
(26, 0, 'aaa', 'aaa', 'aaa', 'aaa', 11, '1111', '111@gmail.com', 'Bank BNI Syariah', 'J&T', 'Peci Samase Pakol Biru', 1, '40000', '40000', '2018-08-26 22:21:16'),
(27, 0, 'aaa', 'aaa', 'aaa', 'aaa', 11, '1111', '111@gmail.com', 'Bank BNI Syariah', 'J&T', 'Peci Samase Pakol Abu', 1, '40000', '40000', '2018-08-26 22:21:16'),
(28, 0, 'aaa', 'aaa', 'aaa', 'aaa', 11, '1111', '111@gmail.com', 'Bank BNI Syariah', 'J&T', 'Peci Samase Pakol Putih', 1, '40000', '40000', '2018-08-26 22:21:16'),
(29, 0, 'aaa', 'aaa', 'aaa', 'aaa', 11, '1111', '111@gmail.com', 'Bank BNI Syariah', 'J&T', 'Samase Jubba Raglan Putih-Abu', 1, '349000', '349000', '2018-08-26 22:21:16'),
(30, 0, 'aaa', 'aaaa', 'aaaa', 'aaa', 1111, '1111', '@@', 'Bank Mandiri Syariah', 'JNE', 'Peci Samase Pakol Biru', 1, '40000', '40000', '2018-08-27 06:49:26'),
(31, 0, 'aaa', 'aaaa', 'aaaa', 'aaa', 1111, '1111', '@@', 'Bank Mandiri Syariah', 'JNE', 'Peci Samase Pakol Abu', 1, '40000', '40000', '2018-08-27 06:49:27');

-- --------------------------------------------------------

--
-- Table structure for table `newusers`
--

CREATE TABLE `newusers` (
  `id` int(250) NOT NULL,
  `nama_depan` varchar(250) NOT NULL,
  `nama_belakang` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newusers`
--

INSERT INTO `newusers` (`id`, `nama_depan`, `nama_belakang`, `username`, `email`, `password`) VALUES
(2, 'maqlo', 'terbang', 'lol', 'yyy@gmail.com', '2f0bbb7e076f6313ae14f1f69c35a3e5bb5c2de48bd9e4771ed77fa2f70c5904'),
(3, 'rendi', 'pradana', 'maqlo', 'maqlo@gmail.com', 'f2afd1cacb5441a5e65a7a460a5f9898b7b98b08aa6323a2e53c8b9a9686cd86');

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `bank` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `no_rek` varchar(13) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id`, `bank`, `no_rek`) VALUES
(1, 'Bank Mandiri Syariah', '009-123456789'),
(2, 'Bank BNI Syariah', '009-123456789');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `nama_produk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(11) NOT NULL,
  `foto_produk` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `category_id`, `nama_produk`, `harga`, `foto_produk`, `deskripsi`, `size`, `qty`) VALUES
(1, 5, 'Peci Samase Pakol Abu', 40000, 'samase_abu.jpg', 'PECI SAMASE PAKOL ABU\nHIGH QUALITY MATERIALS', 5, 5),
(2, 5, 'Peci Samase Pakol Biru', 40000, 'samase_biru.jpg', 'PECI SAMASE PAKOL BIRU\nHIGH QUALITY MATERIALS', 5, 5),
(3, 5, 'Peci Samase Pakol Coklat', 40000, 'samase_coklat.jpg', 'PECI SAMASE PAKOL COKLAT\nHIGH QUALITY MATERIALS', 5, 5),
(4, 5, 'Peci Samase Pakol Putih', 40000, 'samase_putih.jpg', 'PECI SAMASE PAKOL PUTIH\r\nHIGH QUALITY MATERIALS', 5, 5),
(5, 5, 'Peci Samase Pakol Hijau', 40000, 'samase_hijau.jpg', 'PECI SAMASE PAKOL HIJAU\r\nHIGH QUALITY MATERIALS', 5, 5),
(6, 5, 'Peci Samase Pakol Krem', 40000, 'samase_krem.jpg', 'PECI SAMASE PAKOL KREM\r\nHIGH QUALITY MATERIALS', 5, 5),
(7, 3, 'Samase Jubba Raglan Putih-Abu', 349000, 'samase_raglan_putih_abu2.jpg', 'JUBBA RAGLAN\r\n.\r\nLIMITED EDITION', 2, 3),
(8, 3, 'Samase Jubba Raglan Abu-Putih', 349000, 'samase_raglan_abu_putih.jpg', 'JUBBA RAGLAN\n.\nLIMITED EDITION', 2, 2),
(9, 3, 'Samase Jubba Raglan Abu-Navy', 349000, 'samase_raglan_abu_biru.jpg', 'JUBBA RAGLAN\n.\nLIMITED EDITION', 2, 1),
(10, 3, 'Samase Jubba Raglan Navy-Abu', 349000, 'samase_raglan_biru_abu.jpg', 'JUBBA RAGLAN\n.\nLIMITED EDITION', 2, 2),
(11, 1, 'Samase Ghamis Biru-Abu', 209000, 'samase_abu_biru.jpeg', 'GHAMIS SAMASE\r\n.\r\nLIMITED EDITION', 2, 4),
(12, 1, 'Samase Ghamis Abu Muda-Hitam', 209000, 'samase_abumuda_hitam.jpeg', 'GHAMIS SAMASE\r\n .\r\n LIMITED EDITION', 3, 3),
(13, 1, 'Samase Ghamis Putih-Navy', 209000, 'samase_putih_navy.jpeg', 'GHAMIS SAMASE\r\n .\r\n LIMITED EDITION', 3, 4),
(14, 2, 'Sirwal Samase Peanut', 220000, 'samase_peanut.jpg', 'SIRWAL KANGAROO LIMITED EDITION', 3, 2),
(15, 4, 'Samase Kurta Blue denim', 199000, 'samse_bluedenim.jpg', 'SAMASE KURTA LIMITED EDITION', 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `size_chart`
--

CREATE TABLE `size_chart` (
  `id` int(11) NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `size_chart`
--

INSERT INTO `size_chart` (`id`, `size`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'ALL SIZE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_produk`
--
ALTER TABLE `category_produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newusers`
--
ALTER TABLE `newusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `size_chart`
--
ALTER TABLE `size_chart`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `category_produk`
--
ALTER TABLE `category_produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `newusers`
--
ALTER TABLE `newusers`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `size_chart`
--
ALTER TABLE `size_chart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category_produk` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
