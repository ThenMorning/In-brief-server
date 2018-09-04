/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : inbrief

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : utf-8

 Date: 09/04/2018 23:22:01 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `_mysql_session_store`
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `_mysql_session_store`
-- ----------------------------
BEGIN;
INSERT INTO `_mysql_session_store` VALUES ('SESSION_ID:-TCWkvCuJSF_G42mmNlZ1i7Tdo2JmsTF', '1536041023485', '{\"user_id\":12313}'), ('SESSION_ID:0Ya5HEhzDXD4H2hKpikqQcU-4lIAD6uJ', '1535868353774', '{\"user_id\":12313}'), ('SESSION_ID:62TthZ56tuwWzTe-5eO6wXNiJh4-yG7B', '1535870930904', '{\"user_id\":12313}'), ('SESSION_ID:7KQEVWQjbFJrg7rZzcW3eBDVnO5fRZK5', '1535952674775', '{\"user_id\":12313}'), ('SESSION_ID:8n12ohUOQnMN1QKfidFuANbAmDpsGQtt', '1535871727342', '{\"user_id\":12313}'), ('SESSION_ID:9rgP8_n4E7NgdUEgPuyZxHH25Ttqzs4a', '1536051661588', '{\"user_id\":12313}'), ('SESSION_ID:9_VGNrg2Jw5idNuAj4EgHv2XZnWDQg5d', '1536039771778', '{\"user_id\":12313}'), ('SESSION_ID:ACLmJkpXO9jOX4eci_68BzCG55z2qbul', '1536042408679', '{\"user_id\":12313}'), ('SESSION_ID:alWaJ98anq_nC9zR3T9VIKTobR4skWzl', '1535873490045', '{\"user_id\":12313}'), ('SESSION_ID:C257ixnsZ-_HIHff3ycwiyoGhmILpBnQ', '1536039580974', '{\"user_id\":12313}'), ('SESSION_ID:CURJMVQ71jcb2p47y1_Wch-RkdmIQ2xO', '1536051526096', '{\"user_id\":12313}'), ('SESSION_ID:dZkyA9PKko3C7keO9PY7WBn4B5NyS8M5', '1535873298616', '{\"user_id\":12313}'), ('SESSION_ID:gFcZuXSY84g7n910ebBYVDug13NXVe1z', '1535871571977', '{\"user_id\":12313}'), ('SESSION_ID:GPbeBWvp0MSaKBfWv6tRsrEiJV9F67dL', '1536042320205', '{\"user_id\":12313}'), ('SESSION_ID:h-qUq4wWeHZVKDOvOe4gZBN3F8Jdqff-', '1536039626295', '{\"user_id\":12313}'), ('SESSION_ID:IsVFfm9pFre8Txs7F4xzljOKQtsJlyhC', '1536042613531', '{\"user_id\":12313}'), ('SESSION_ID:j8okrhOqYuS0nHOkUoryrf9yUmc56j_a', '1535875037611', '{\"user_id\":12313}'), ('SESSION_ID:jyRgZ1QcN-gG3dIIAjSZX8M7hx8ANdNJ', '1535952691683', '{\"user_id\":12313}'), ('SESSION_ID:K0tj07D_vZJtEHa0-UFa_AorDAxHmpx1', '1536039511782', '{\"user_id\":12313}'), ('SESSION_ID:Kd6LgXuS_3-_WSL0NYAy3QC3teapL2U6', '1536042201660', '{\"user_id\":12313}'), ('SESSION_ID:KEeaVwgIK7qgjBs2fB5fkfVxunj_epcp', '1536051537074', '{\"user_id\":12313}'), ('SESSION_ID:LUFdLFl2RUbk1eqZymWYJGjCKUA7tT1o', '1536039749629', '{\"user_id\":12313}'), ('SESSION_ID:MBOzu2yPGDThSHwJpKkpTjsb7qH1EbWj', '1536042140831', '{\"user_id\":12313}'), ('SESSION_ID:Ndm75LUWLIsMrsL-IxmsPeFDdn9kr9Vt', '1536042686849', '{\"user_id\":12313}'), ('SESSION_ID:NRKZjyrVCwHlFX1Ovjue1Qq-vrd2qzNG', '1536051734491', '{\"user_id\":12313}'), ('SESSION_ID:nsqv5UQsu5vb7I_srpSMAClukH9lu9Ky', '1536043310112', '{\"user_id\":12313}'), ('SESSION_ID:oAsF59bEAoutKl3xMSRG4XhoQDcpPcTf', '1535851409668', '{\"user_id\":12313}'), ('SESSION_ID:oDB78HgHXy-xYu0p9KMMZqzyjG098IaO', '1536042427216', '{\"user_id\":12313}'), ('SESSION_ID:Oin3lZdVF6yKlY4dZX19qPZVqneLL8BL', '1535873764308', '{\"user_id\":12313}'), ('SESSION_ID:p-huxzPEa-EbrJctpgnl1BVZfqWuDE7M', '1536042068524', '{\"user_id\":12313}'), ('SESSION_ID:pjxPkU3RNeIytKDb_MzcBt4sP79fT2ad', '1535851181532', '{\"user_id\":12313}'), ('SESSION_ID:RAQuYZT6-uhx8OOALpvEPHNKjp_cw5K3', '1536039832258', '{\"user_id\":12313}'), ('SESSION_ID:RjRy_aFas7t9AkOZgO61xLNrlaS7YMPM', '1536051628347', '{\"user_id\":12313}'), ('SESSION_ID:S4JN84E0NBiyLaO_7DvrNzXYrgxQNmYt', '1536041047173', '{\"user_id\":12313}'), ('SESSION_ID:SVr87dC9oi3PJbk2k6Uwn6-Yxd9Cx2Wy', '1536039811266', '{\"user_id\":12313}'), ('SESSION_ID:UG3J507swYIA6wKq-1uBsU2YgtOOURN4', '1536042241739', '{\"user_id\":12313}'), ('SESSION_ID:UsTPAJ-twA3dKJhxeQq4jqviNBecSl7B', '1535959068283', '{\"user_id\":12313}'), ('SESSION_ID:uXLH8SxeAWnlGERzKbLb2DiaZOA-CU-n', '1535959029063', '{\"user_id\":12313}'), ('SESSION_ID:VOPpKlY2a4abiGf5RNDoTqvA0xuo0Uo7', '1536039845284', '{\"user_id\":12313}'), ('SESSION_ID:vVGfMTZTpW4GAUfVVoJ-Vu_Rl8dDq8LF', '1536042003594', '{\"user_id\":12313}'), ('SESSION_ID:wiaWOjr1pdM0S0-82W-gOGFmeGbQiKa-', '1536041192067', '{\"user_id\":12313}'), ('SESSION_ID:xJh_hLYWapryAXyawhhnuIQIe4i-pQuG', '1535870997620', '{\"user_id\":12313}'), ('SESSION_ID:xjj1xuNiQyox57GMLMbYa4asuWCx9LbV', '1536042748229', '{\"user_id\":12313}'), ('SESSION_ID:YA-QiZmf48vhrIR2UcI-15qQ5F17xz3n', '1536051485355', '{\"user_id\":12313}'), ('SESSION_ID:yn_Bmhl--aChGTbPkIq-QR52lb03y1wt', '1536042671710', '{\"user_id\":12313}'), ('SESSION_ID:zbMhgTY67xzWW1puql2Fl0Mp8I2LzNc8', '1536039888019', '{\"user_id\":12313}'), ('SESSION_ID:zTLN3S3w1EFHx0H4jFil5qAiAjMEVQZP', '1536040730391', '{\"user_id\":12313}');
COMMIT;

-- ----------------------------
--  Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` bigint(20) NOT NULL,
  `dynamics_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `content` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records of `comment`
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES ('1', '2', '12313', '哈哈哈哈', '2018-09-04 21:42:11', '2018-09-04 21:42:11', 'winward');
COMMIT;

-- ----------------------------
--  Table structure for `dynamics`
-- ----------------------------
DROP TABLE IF EXISTS `dynamics`;
CREATE TABLE `dynamics` (
  `dynamics_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `content` varchar(20) NOT NULL,
  `like_count` bigint(20) DEFAULT '0',
  `unlike_count` bigint(20) DEFAULT '0',
  `comment_count` bigint(20) DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dynamics_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `dynamics`
-- ----------------------------
BEGIN;
INSERT INTO `dynamics` VALUES ('2', '12313', '1231313', '0', '0', '0', '2018-09-02 15:56:50', '2018-09-02 15:56:50'), ('3', '12313', '12313', '0', '0', '0', '2018-09-02 20:56:31', '2018-09-02 20:56:31'), ('4', '12313', 'hahahh', '0', '0', '0', '2018-09-02 21:00:25', '2018-09-02 21:00:25'), ('5', '12313', 'hahahh', '0', '0', '0', '2018-09-02 21:02:23', '2018-09-02 21:02:23'), ('6', '12313', '12313', '0', '0', '0', '2018-09-02 21:07:28', '2018-09-02 21:07:28'), ('7', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:44', '2018-09-02 21:11:44'), ('8', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:51', '2018-09-02 21:11:51'), ('9', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:51', '2018-09-02 21:11:51'), ('10', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('11', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('12', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('13', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('14', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('15', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:53', '2018-09-02 21:11:53'), ('16', '12313', '111', '0', '0', '0', '2018-09-02 21:13:37', '2018-09-02 21:13:37'), ('17', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('18', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('19', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('20', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('21', '12313', '23123', '0', '0', '0', '2018-09-02 21:14:22', '2018-09-02 21:14:22'), ('22', '12313', '123123', '0', '0', '0', '2018-09-02 21:14:58', '2018-09-02 21:14:58'), ('23', '12313', '123123', '0', '0', '0', '2018-09-04 17:01:53', '2018-09-04 17:01:53'), ('24', '12313', '哈哈哈哈', '0', '0', '0', '2018-09-04 18:28:17', '2018-09-04 18:28:17'), ('25', '12313', '1111111', '0', '0', '0', '2018-09-04 18:41:59', '2018-09-04 18:41:59'), ('26', '12313', '222222', '0', '0', '0', '2018-09-04 18:42:52', '2018-09-04 18:42:52'), ('27', '12313', '666', '0', '0', '0', '2018-09-04 18:44:52', '2018-09-04 18:44:52'), ('28', '12313', 'undefined', '0', '0', '0', '2018-09-04 23:10:14', '2018-09-04 23:10:14'), ('29', '12313', 'undefined', '0', '0', '0', '2018-09-04 23:11:17', '2018-09-04 23:11:17');
COMMIT;

-- ----------------------------
--  Table structure for `likes`
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `dynamics_id` bigint(20) NOT NULL,
  `like_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records of `likes`
-- ----------------------------
BEGIN;
INSERT INTO `likes` VALUES ('2', '1', '12313', '2018-09-04 17:22:29', '2018-09-04 23:01:54', 'winward');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `open_id` varchar(255) NOT NULL,
  `motto` varchar(20) DEFAULT NULL,
  `avatar_url` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12314 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('12313', 'Winward', 'ojeHl5QQDkONRagfxnflR_ehSfnQ', '', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLSUgn8iam94KViaA3BwRC7qt443Hic6sxvYzheXlTwH9PDtt0mlSb1NPAso0x9ibSDXm5vUwvKOPKfvg/132', '珠穆朗玛峰.峰顶', '', '', '1', '2018-09-02 09:48:53', '2018-09-02 09:48:53');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
