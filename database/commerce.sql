CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`age` INT(11) NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)