CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `num` int(10) unsigned NOT NULL,
  `name` varchar(256) NOT NULL,
  `applied_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `migrations_UN` (`name`),
  UNIQUE KEY `migrations_num_UN` (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;