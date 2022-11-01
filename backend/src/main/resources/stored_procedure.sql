CREATE PROCEDURE insert_category(in name VARCHAR(255), in color VARCHAR(255))
BEGIN
START TRANSACTION;
INSERT INTO category (name, color) VALUES (name, color);
select * from category c where c.name = name limit 1;
COMMIT;
END