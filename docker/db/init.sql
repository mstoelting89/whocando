create table if not exists contacts (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, PRIMARY KEY(id));
INSERT INTO contacts (name, email, country) VALUES ("Max Mustermann", "max@mustermann.de", "Germany");
INSERT INTO contacts (name, email, country) VALUES ("Frauke Zimmermann", "frauke@zimmermann.de", "Germany");
INSERT INTO contacts (name, email, country) VALUES ("Jack Bauer", "jack@bauer.de", "USA");
INSERT INTO contacts (name, email, country) VALUES ("Jaquet Girard", "jaquet@girard.de", "France");
