ALTER TABLE user_has_favorite DROP FOREIGN KEY fk_user_has_anime_anime1;
ALTER TABLE anime_has_actor DROP FOREIGN KEY fk_anime_has_actor_anime1; 
ALTER TABLE anime_has_actor DROP FOREIGN KEY fk_anime_has_actor_actor;


truncate anime;
truncate actor;
truncate anime_has_actor