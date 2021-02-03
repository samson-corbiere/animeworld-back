CREATE TABLE IF NOT EXISTS `anime` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `view` INT NOT NULL,
  `image` VARCHAR(800) NOT NULL,
  `start_date` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Actor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `photo_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `anime_has_actor` (
  `Actor_id` INT NOT NULL,
  `anime_id` INT NOT NULL,
  INDEX `fk_anime_has_actor_Actor_idx` (`Actor_id` ASC),
  INDEX `fk_anime_has_actor_anime1_idx` (`anime_id` ASC),
  CONSTRAINT `fk_anime_has_actor_Actor`
    FOREIGN KEY (`Actor_id`)
    REFERENCES `Actor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_anime_has_actor_anime1`
    FOREIGN KEY (`anime_id`)
    REFERENCES `anime` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `user_has_favorite` (
  `anime_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_user_has_anime_anime1_idx` (`anime_id` ASC),
  INDEX `fk_user_has_anime_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_anime_anime1`
    FOREIGN KEY (`anime_id`)
    REFERENCES `anime` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_anime_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
