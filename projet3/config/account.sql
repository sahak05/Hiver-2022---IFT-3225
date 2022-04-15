use sadikoua_projet_3;
--
-- Table structure for table 'accounts'
--


--Les droits des users qui sont CONSULT et MODIFY sachant que MODIFY peut CONSULT
CREATE TABLE IF NOT EXISTS `accounts` (
	`account_id` int(10) UNSIGNED NOT NULL,
	`account_name` varchar(255) NOT NULL,
	`account_passwd` varchar(255) NOT NULL,
	`account_reg_time` timestamp NOT NULL default current_timestamp,
	`account_enabled` tinyint(1) unsigned not null default '1',
	`account_right` ENUM('CONSULT', 'MODIFY') not null default 'CONSULT'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


alter table `accounts`
	add primary key (`account_id`),
	add unique key `account_name` (`account_name`);

alter table `accounts` 
	MODIFY `account_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;



insert into `accounts` (`account_name`, `account_passwd`, `account_right`) values
	('ift3225', 'sÃ©same', 'CONSULT'),
	('admin', 'ouvre-toi', 'MODIFY');