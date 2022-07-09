-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: fiberku.site
-- Waktu pembuatan: 09 Jul 2022 pada 22.59
-- Versi server: 10.7.4-MariaDB-1:10.7.4+maria~focal
-- Versi PHP: 8.0.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FP_WEB`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `aboutMeViewSetting`
--

CREATE TABLE `aboutMeViewSetting` (
  `id_content` int(11) NOT NULL,
  `visi` text DEFAULT NULL,
  `misi` text DEFAULT NULL,
  `sejarah` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `aboutMeViewSetting`
--

INSERT INTO `aboutMeViewSetting` (`id_content`, `visi`, `misi`, `sejarah`) VALUES
(3, 'Menyediakan layanan dan kebutuhan internet yang bertujuan meningkatkan pelayanan dalam masyarakat, transaksi ataupun bisnis dan juga memajukan SDM melalui jaringan internet.', 'Pelayanan yang baik terhadap customer guna untuk kepuasan produk yang kami sediakan. Meningkatkan dan mengoptimalkan kemampuan SDM. Pemerataan jaringan internet diseluruh wilayah.', 'Fiberku resmi diluncurkan pada tahun 2022 sebagai Internet Service Provider yang meyediakan kebutuhan internet untuk pelanggan. Fiberku berfokus dalam pemerataan jaringan di seluruh wilayah Indonesia yang memberikan performa terbaik dan kapasitas yang jauh lebih besar. Fiberku meningkatkan jaringan menjadi Fiberku\'s Fast Network, yang merupakan jaringan fiber terbaru dengan teknologi canggih dan andal.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(10) UNSIGNED NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `email`) VALUES
(7, 'aziz', 'azizfath', NULL),
(8, 'admin', 'fiberku', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(10) UNSIGNED NOT NULL,
  `email` varchar(20) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `contact`
--

INSERT INTO `contact` (`id_contact`, `email`, `telepon`, `address`) VALUES
(1, 'cs@fiberku.site', '(+62) 852-2922-2123', 'Jl. Wahid Hasyim 122B, Ngropoh, Condongcatur, Depok, Sleman, Yogyakarta 55283');

-- --------------------------------------------------------

--
-- Struktur dari tabel `homeViewSetting`
--

CREATE TABLE `homeViewSetting` (
  `id_content` int(10) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `caption` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `homeViewSetting`
--

INSERT INTO `homeViewSetting` (`id_content`, `title`, `caption`) VALUES
(1, 'Internet yang cocok kapanpun dan dimanapun', 'Internet merupakan salah satu layanan FiberKu yang menggunakan jaringan fiber optik dan tersebar di seluruh negeri. FiberKu hadir dengan menawarkan pilihan kecepatan Internet unlimited hingga 1000 Mbps. Selain cepat, akses internet FiberKu lebih stabil dan tahan terhadap cuaca. Aktifitas seperti bekerja, belajar, belanja online hingga bermain games di rumah jadilebih praktis dan nyaman.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mediaTransmission`
--

CREATE TABLE `mediaTransmission` (
  `id_mediaTransmission` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `distance` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mediaTransmission`
--

INSERT INTO `mediaTransmission` (`id_mediaTransmission`, `name`, `distance`) VALUES
(1, 'Fiberoptic', '30KM'),
(2, 'Wireless', '30KM'),
(5, 'UTP', '90M');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id_product` int(10) UNSIGNED NOT NULL,
  `id_mediaTransmission` int(10) UNSIGNED NOT NULL,
  `bandwidth` varchar(20) DEFAULT NULL,
  `price` decimal(15,0) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id_product`, `id_mediaTransmission`, `bandwidth`, `price`, `description`) VALUES
(1, 1, '10 Mbps', '100000', 'Mampu menyediakan koneksi yang baik hingga 3 Devices'),
(2, 1, '20 Mbps', '180000', 'Mampu menyediakan koneksi yang baik hingga 6 Devices'),
(3, 1, '50 Mbps', '260000', 'Mampu menyediakan koneksi yang baik hingga 12 Devices'),
(4, 1, '70 Mbps', '320000', 'Mampu menyediakan koneksi yang baik hingga 15 Devices'),
(5, 1, '100 Mbps', '380000', 'Mampu menyediakan koneksi yang baik hingga 20 Devices'),
(6, 1, '300 Mbps', '700000', 'Mampu menyediakan koneksi yang baik hingga 30 Devices'),
(7, 1, '500 Mbps', '900000', 'Mampu menyediakan koneksi yang baik hingga 50 Devices'),
(8, 1, '1000 Mbps', '1100000', 'Mampu menyediakan koneksi yang baik hingga 100 Devices'),
(13, 2, '1 Gbps', '10000000', 'Koneksi dengan wireless yang GG');

-- --------------------------------------------------------

--
-- Struktur dari tabel `promotion`
--

CREATE TABLE `promotion` (
  `id_content` int(11) NOT NULL,
  `path` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promotion`
--

INSERT INTO `promotion` (`id_content`, `path`) VALUES
(1, '/assets/images/promo/1.png'),
(2, '/assets/images/promo/2.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `task`
--

CREATE TABLE `task` (
  `id_task` int(10) UNSIGNED NOT NULL,
  `name` text DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `task`
--

INSERT INTO `task` (`id_task`, `name`, `description`) VALUES
(1, 'BackEnd Developer', 'Mengatur koneksi database dan Rest API'),
(2, 'UI/UX Design', 'Membuat desain pada Figma dan membuat asset-asset'),
(3, 'FrontEnd Developer', 'Membuat koding'),
(4, 'DevOps', 'Mengatur urusan server (VPS, domain, dns, proxy, docker, dll)'),
(7, 'UI/UX & FrontEnd', 'User Interface & User Experience'),
(8, 'TypeWriter & Content', 'Membuat isi content'),
(9, 'FrontEnd & Assets', 'Coding Frontend & membuat Assets'),
(12, 'BackEnd & DevOps', 'Coding backend API dan mengurus server');

-- --------------------------------------------------------

--
-- Struktur dari tabel `team`
--

CREATE TABLE `team` (
  `id_team` int(10) UNSIGNED NOT NULL,
  `nim` varchar(15) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `id_task` int(10) UNSIGNED NOT NULL,
  `photo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `team`
--

INSERT INTO `team` (`id_team`, `nim`, `name`, `id_task`, `photo`) VALUES
(1, '20.11.3675', 'Miftahudin Faiz', 9, '/assets/images/team/faiz.jpeg'),
(2, '20.11.3682', 'Nurul Zalza Bilal Jannah', 8, '/assets/images/team/zalza.jpeg'),
(3, '20.11.3691', 'Muh Ilham Akbar', 7, '/assets/images/team/ilham.jpeg'),
(17, '20.11.3694', 'Fathurrahman Nur Aziz', 12, '/assets/images/team/aziz.jpeg'),
(18, '20.11.3709', 'Rifan Ene Saputra', 2, '/assets/images/team/rifan.jpeg'),
(19, '20.11.3714', 'Muh Bastian Hanafi', 12, '/assets/images/team/bastian.jpeg'),
(20, '20.11.3733', 'Erda Putriana', 8, '/assets/images/team/erda.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `aboutMeViewSetting`
--
ALTER TABLE `aboutMeViewSetting`
  ADD PRIMARY KEY (`id_content`);

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Indeks untuk tabel `homeViewSetting`
--
ALTER TABLE `homeViewSetting`
  ADD PRIMARY KEY (`id_content`);

--
-- Indeks untuk tabel `mediaTransmission`
--
ALTER TABLE `mediaTransmission`
  ADD PRIMARY KEY (`id_mediaTransmission`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `fk_mediaTransmission` (`id_mediaTransmission`);

--
-- Indeks untuk tabel `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id_content`);

--
-- Indeks untuk tabel `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id_task`);

--
-- Indeks untuk tabel `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id_team`),
  ADD KEY `fk_task` (`id_task`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `aboutMeViewSetting`
--
ALTER TABLE `aboutMeViewSetting`
  MODIFY `id_content` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `homeViewSetting`
--
ALTER TABLE `homeViewSetting`
  MODIFY `id_content` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `mediaTransmission`
--
ALTER TABLE `mediaTransmission`
  MODIFY `id_mediaTransmission` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `promotion`
--
ALTER TABLE `promotion`
  MODIFY `id_content` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `task`
--
ALTER TABLE `task`
  MODIFY `id_task` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `team`
--
ALTER TABLE `team`
  MODIFY `id_team` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_mediaTransmission` FOREIGN KEY (`id_mediaTransmission`) REFERENCES `mediaTransmission` (`id_mediaTransmission`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `fk_task` FOREIGN KEY (`id_task`) REFERENCES `task` (`id_task`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
