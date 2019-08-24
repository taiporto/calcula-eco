-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19-Ago-2019 às 19:54
-- Versão do servidor: 8.0.17
-- versão do PHP: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdcalculaeco`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplinas`
--

CREATE TABLE `disciplinas` (
  `id_disciplina` int(11) NOT NULL,
  `nome_disciplina` varchar(80) NOT NULL,
  `creditos` int(11) NOT NULL,
  `periodo` int(11) NOT NULL,
  `curso` varchar(20) NOT NULL,
  `valido` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `disciplinas`
--

INSERT INTO `disciplinas` (`id_disciplina`, `nome_disciplina`, `creditos`, `periodo`, `curso`, `valido`) VALUES
(22, 'Comunicação e Artes', 4, 1, 'cs', 1),
(23, 'Comunicação e Filosofia', 4, 1, 'cs', 1),
(24, 'Comunicação e R. Brasileira', 4, 1, 'cs', 1),
(25, 'História da Comunicação', 4, 1, 'cs', 1),
(26, 'Língua Portuguesa I', 3, 1, 'cs', 1),
(27, 'Linguagem Gráfica', 4, 1, 'cs', 1),
(28, 'Teoria da Comunicação I', 4, 1, 'cs', 1),
(29, 'Comunicação e Economia', 4, 2, 'cs', 1),
(30, 'Comunicação, Psicologia e Cognição I', 4, 2, 'cs', 1),
(31, 'Laboratório de Comunicação A', 2, 2, 'cs', 0),
(32, 'Língua Portuguesa II', 3, 2, 'cs', 1),
(33, 'Linguagem Audiovisual I', 4, 2, 'cs', 1),
(34, 'Sistemas e Tecnologias de Comunicação', 4, 2, 'cs', 1),
(35, 'Teoria da Comunicação II', 4, 2, 'cs', 1),
(36, 'Antropologia e Comunicação', 4, 3, 'cs', 1),
(37, 'Comunicação e Marketing', 4, 3, 'cs', 1),
(38, 'Fotografia', 4, 3, 'cs', 1),
(39, 'Laboratório de Comunicação B', 2, 3, 'cs', 0),
(40, 'Linguagem Audiovisual II', 4, 3, 'cs', 1),
(41, 'Sistemas de Informação', 4, 3, 'cs', 1),
(42, 'Teoria da Comunicação III', 4, 3, 'cs', 1),
(43, 'Comunicação e Filosofia', 4, 1, 'j', 1),
(44, 'Gêneros Jornalísticos', 3, 1, 'j', 1),
(45, 'História da Comunicação e do Jornalismo', 4, 1, 'j', 1),
(46, 'Linguagem Gráfica', 4, 1, 'j', 1),
(47, 'Teoria da Comunicação I', 4, 1, 'j', 1),
(48, 'Linguagem Fotográfica', 4, 1, 'j', 1),
(49, 'Laboratório 1', 2, 1, 'j', 0),
(50, 'Comunicação e Artes', 4, 2, 'j', 1),
(51, 'Introdução à Pesquisa em Comunicação', 4, 2, 'j', 1),
(52, 'Laboratório 2', 1, 2, 'j', 0),
(53, 'Redação Jornalística I', 3, 2, 'j', 1),
(54, 'Reportagem I', 3, 2, 'j', 1),
(55, 'Introdução à Linguagem Audiovisual', 4, 2, 'j', 1),
(56, 'Teoria da Comunicação II', 4, 2, 'j', 1),
(57, 'Antropologia e Comunicação', 4, 3, 'j', 1),
(58, 'Mídia, Psicologia e Cognição', 4, 3, 'j', 1),
(59, 'Teorias do Jornalismo', 4, 3, 'j', 1),
(60, 'Redação Jornalística II', 3, 3, 'j', 1),
(61, 'Radiojornalismo', 3, 3, 'j', 1),
(62, 'Fotojornalismo I', 3, 3, 'j', 1),
(63, 'Laboratório 3', 1, 3, 'j', 0),
(64, 'Fundamentos de Economia para Comunicação', 4, 4, 'j', 1),
(65, 'Cultura e Relações Étnico-Raciais no Brasil', 4, 4, 'j', 1),
(66, 'Análise das Práticas Discursivas', 4, 4, 'j', 1),
(67, 'Reportagem II', 3, 4, 'j', 1),
(68, 'Webdesign', 3, 4, 'j', 1),
(69, 'Telejornalismo', 3, 4, 'j', 1),
(70, 'Laboratório 4', 1, 4, 'j', 0),
(71, 'Política e Comunicação', 4, 5, 'j', 1),
(72, 'Marketing e Gestão para Jornalismo', 4, 5, 'j', 1),
(73, 'Cibercultura', 4, 5, 'j', 1),
(74, 'Acessoria de Imprensa e de Comunicação', 3, 5, 'j', 1),
(75, 'Complementar Escolha Condicionada', 2, 5, 'j', 1),
(76, 'Complementar Livre Escolha', 2, 5, 'j', 1),
(77, 'Laboratório 5', 1, 5, 'j', 0),
(78, 'Inovação e empreendedorismo', 4, 6, 'j', 1),
(79, 'Jornalismo de dados', 3, 6, 'j', 1),
(80, 'Legislação e Ética no Jornalismo', 4, 6, 'j', 1),
(81, 'Complementar Escolha Condicionada', 4, 6, 'j', 1),
(82, 'Complementar Livre Escolha', 4, 6, 'j', 1),
(83, 'Laboratório 6', 1, 6, 'j', 0),
(84, 'Pesquisa em Jornalismo', 3, 7, 'j', 1),
(85, 'Complementar Escolha Condicionada', 4, 7, 'j', 1),
(86, 'Complementar Livre Escolha', 4, 7, 'j', 1),
(87, 'Laboratório 7', 1, 7, 'j', 0),
(88, 'Estágio Supervisionado', 2, 7, 'j', 1),
(89, 'Projeto Experimental em Jornalismo', 3, 8, 'j', 1),
(90, 'Laboratório 8', 1, 8, 'j', 0),
(91, 'Estágio Supervisionado', 2, 8, 'j', 1),
(92, 'Direção Arte em Publ e Prop I ', 3, 4, 'pp', 1),
(93, 'Marketing para Publ e Prop ', 4, 4, 'pp', 1),
(94, 'Pesquisa Merc Opinião Publica', 4, 4, 'pp', 1),
(95, 'Redação Publicitária I', 3, 4, 'pp', 1),
(96, 'A. Acadêmicas de Livre Escolha ', 4, 4, 'pp', 1),
(97, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 4, 'pp', 1),
(98, 'A. Acadêmicas Optativas (Grupo Teoria) ', 4, 4, 'pp', 1),
(99, 'Comp Consum e Segmentação ', 4, 5, 'pp', 1),
(100, 'Mídia', 4, 5, 'pp', 1),
(101, 'Planejamento de Campanhas ', 3, 5, 'pp', 1),
(102, 'A. Acadêmicas de Livre Escolha', 3, 5, 'pp', 1),
(103, 'A. Acadêmicas Optativas (Grupo Habilitação)\r\n', 2, 5, 'pp', 1),
(104, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 5, 'pp', 1),
(105, 'Criação Mídias Contemporâneas ', 3, 6, 'pp', 1),
(106, 'Criação Publicitária', 3, 6, 'pp', 1),
(107, 'História da Propaganda', 4, 6, 'pp', 1),
(108, 'A. Acadêmicas de Livre Escolha', 2, 6, 'pp', 1),
(109, 'A. Acadêmicas Optativas (Grupo Habilitação)\r\n', 2, 6, 'pp', 1),
(110, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 6, 'pp', 1),
(111, 'Assessoria de Comunicação ', 2, 7, 'pp', 1),
(112, 'Gestão Organiz P/ Comunicação', 2, 7, 'pp', 1),
(113, 'Legislação e Ética em Comunicação ', 4, 7, 'pp', 1),
(114, 'Projeto Experimental I ', 3, 7, 'pp', 1),
(115, 'A. Acadêmicas de Livre Escolha', 2, 7, 'pp', 1),
(116, 'A. Acadêmicas Optativas (Grupo Habilitação)\r\n', 4, 7, 'pp', 1),
(117, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 7, 'pp', 1),
(118, 'Projeto Experimental em Publicidade Propaganda', 6, 8, 'pp', 1),
(119, 'A. Acadêmicas de Livre Escolha', 6, 8, 'pp', 1),
(120, 'A. Acadêmicas Optativas (Grupo Habilitação)\r\n', 2, 8, 'pp', 1),
(121, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 8, 'pp', 1),
(122, 'Cinegrafia', 3, 4, 'rtv', 1),
(123, 'Edição de Trilha Sonora', 3, 4, 'rtv', 1),
(124, 'Produção Radiofônica', 3, 4, 'rtv', 1),
(125, 'Roteiro e Red de Audiovisual', 3, 4, 'rtv', 1),
(126, 'Tecnologia da Produção', 3, 4, 'rtv', 1),
(127, 'A. Acadêmicas de Livre Escolha ', 4, 4, 'rtv', 1),
(128, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 4, 'rtv', 1),
(129, 'A. Acadêmicas Optativas (Grupo Teoria) ', 4, 4, 'rtv', 1),
(130, 'Gravação e Mixagem de Audio', 3, 5, 'rtv', 1),
(131, 'Produção de Audiovisual', 3, 5, 'rtv', 1),
(132, 'A. Acadêmicas de Livre Escolha', 2, 5, 'rtv', 1),
(133, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 5, 'rtv', 1),
(134, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 5, 'rtv', 1),
(135, 'Computação Gráfica para Vídeo', 3, 6, 'rtv', 1),
(136, 'Direção de Audiovisual', 3, 6, 'rtv', 1),
(137, 'Edição de Imagem e Som', 3, 6, 'rtv', 1),
(138, 'A. Acadêmicas de Livre Escolha', 2, 6, 'rtv', 1),
(139, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 6, 'rtv', 1),
(140, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 6, 'rtv', 1),
(141, 'Direção de Atuação', 3, 7, 'rtv', 1),
(142, 'Legislação e Ética em Comunicação ', 4, 7, 'rtv', 1),
(143, 'Projeto Experimental I ', 3, 7, 'rtv', 1),
(144, 'A. Acadêmicas de Livre Escolha', 2, 7, 'rtv', 1),
(145, 'A. Acadêmicas Optativas (Grupo Habilitação)', 4, 7, 'rtv', 1),
(146, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 7, 'rtv', 1),
(147, 'Projeto Experimental em Rádio e TV', 6, 8, 'rtv', 1),
(148, 'A. Acadêmicas de Livre Escolha', 6, 8, 'rtv', 1),
(149, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 8, 'rtv', 1),
(150, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 8, 'rtv', 1),
(151, 'Processos Gráficos', 4, 4, 'pe', 1),
(152, 'Redação Técnica I', 3, 4, 'pe', 1),
(153, 'Editoração', 3, 4, 'pe', 1),
(154, 'Top Esp em Edição A', 4, 4, 'pe', 1),
(155, 'A. Acadêmicas de Livre Escolha', 4, 4, 'pe', 1),
(156, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 4, 'pe', 1),
(157, 'A. Acadêmicas Optativas (Grupo Teoria) ', 4, 4, 'pe', 1),
(158, 'Marketing Produção Editorial', 4, 5, 'pe', 1),
(159, 'Cálculo Custos Matérias Primas', 4, 5, 'pe', 1),
(160, 'Edição de Livros', 4, 5, 'pe', 1),
(161, 'Redação Técnica II', 3, 5, 'pe', 1),
(162, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 5, 'pe', 1),
(163, 'Legislação e Ética em Comunicação', 4, 6, 'pe', 1),
(164, 'Layout Editorial', 3, 6, 'pe', 1),
(165, 'Redação Técnica III', 3, 6, 'pe', 1),
(166, 'Expressão em Ling Digitais', 3, 6, 'pe', 1),
(167, 'A. Acadêmicas Optativas (Grupo Teoria)', 4, 6, 'pe', 1),
(168, 'Projeto Experimental I', 3, 7, 'pe', 1),
(169, 'Direito Autoral em Produção', 2, 7, 'pe', 1),
(170, 'Top Esp em Edição B', 3, 7, 'pe', 1),
(171, 'A. Acadêmicas de Livre Escolha', 4, 7, 'pe', 1),
(172, 'A. Acadêmicas Optativas (Grupo Habilitação)', 4, 7, 'pe', 1),
(173, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 7, 'pe', 1),
(174, 'Projeto Experimental em Editoração', 6, 8, 'pe', 1),
(175, 'A. Acadêmicas de Livre Escolha', 6, 8, 'pe', 1),
(176, 'A. Acadêmicas Optativas (Grupo Habilitação)', 2, 8, 'pe', 1),
(177, 'A. Acadêmicas Optativas (Grupo Teoria)', 2, 8, 'pe', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD PRIMARY KEY (`id_disciplina`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  MODIFY `id_disciplina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
