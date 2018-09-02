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

 Date: 09/02/2018 23:25:03 PM
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
INSERT INTO `_mysql_session_store` VALUES ('SESSION_ID:0Ya5HEhzDXD4H2hKpikqQcU-4lIAD6uJ', '1535868353774', '{\"user_id\":12313}'), ('SESSION_ID:62TthZ56tuwWzTe-5eO6wXNiJh4-yG7B', '1535870930904', '{\"user_id\":12313}'), ('SESSION_ID:8n12ohUOQnMN1QKfidFuANbAmDpsGQtt', '1535871727342', '{\"user_id\":12313}'), ('SESSION_ID:alWaJ98anq_nC9zR3T9VIKTobR4skWzl', '1535873490045', '{\"user_id\":12313}'), ('SESSION_ID:dZkyA9PKko3C7keO9PY7WBn4B5NyS8M5', '1535873298616', '{\"user_id\":12313}'), ('SESSION_ID:gFcZuXSY84g7n910ebBYVDug13NXVe1z', '1535871571977', '{\"user_id\":12313}'), ('SESSION_ID:j8okrhOqYuS0nHOkUoryrf9yUmc56j_a', '1535875037611', '{\"user_id\":12313}'), ('SESSION_ID:oAsF59bEAoutKl3xMSRG4XhoQDcpPcTf', '1535851409668', '{\"user_id\":12313}'), ('SESSION_ID:Oin3lZdVF6yKlY4dZX19qPZVqneLL8BL', '1535873764308', '{\"user_id\":12313}'), ('SESSION_ID:pjxPkU3RNeIytKDb_MzcBt4sP79fT2ad', '1535851181532', '{\"user_id\":12313}'), ('SESSION_ID:UsTPAJ-twA3dKJhxeQq4jqviNBecSl7B', '1535959068283', '{\"user_id\":12313}'), ('SESSION_ID:uXLH8SxeAWnlGERzKbLb2DiaZOA-CU-n', '1535959029063', '{\"user_id\":12313}'), ('SESSION_ID:xJh_hLYWapryAXyawhhnuIQIe4i-pQuG', '1535870997620', '{\"user_id\":12313}');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `dynamics`
-- ----------------------------
BEGIN;
INSERT INTO `dynamics` VALUES ('1', '1', '34234234', '12', '123', '3423424', '2018-09-02 14:45:36', '2018-09-02 14:45:36'), ('2', '12313', '1231313', '0', '0', '0', '2018-09-02 15:56:50', '2018-09-02 15:56:50'), ('3', '12313', '12313', '0', '0', '0', '2018-09-02 20:56:31', '2018-09-02 20:56:31'), ('4', '12313', 'hahahh', '0', '0', '0', '2018-09-02 21:00:25', '2018-09-02 21:00:25'), ('5', '12313', 'hahahh', '0', '0', '0', '2018-09-02 21:02:23', '2018-09-02 21:02:23'), ('6', '12313', '12313', '0', '0', '0', '2018-09-02 21:07:28', '2018-09-02 21:07:28'), ('7', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:44', '2018-09-02 21:11:44'), ('8', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:51', '2018-09-02 21:11:51'), ('9', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:51', '2018-09-02 21:11:51'), ('10', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('11', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('12', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('13', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('14', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:52', '2018-09-02 21:11:52'), ('15', '12313', 'heihie', '0', '0', '0', '2018-09-02 21:11:53', '2018-09-02 21:11:53'), ('16', '12313', '111', '0', '0', '0', '2018-09-02 21:13:37', '2018-09-02 21:13:37'), ('17', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('18', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('19', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('20', '12313', '111', '0', '0', '0', '2018-09-02 21:13:38', '2018-09-02 21:13:38'), ('21', '12313', '23123', '0', '0', '0', '2018-09-02 21:14:22', '2018-09-02 21:14:22'), ('22', '12313', '123123', '0', '0', '0', '2018-09-02 21:14:58', '2018-09-02 21:14:58');
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
