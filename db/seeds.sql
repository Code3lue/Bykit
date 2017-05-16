insert into users (email, username, password, country)
values("alan.delez@gmail.com", "code3lue", "password", "US");

ALTER TABLE users
ADD password varchar(255) not null;