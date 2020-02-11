create table retails(
id serial not null primary key,
users text not null,
email text not null,
contact int not null,
colour text not null,
size int not null,
price text not null,
order_no text not null,
cost int not null
);

create table sku(
    id serial not null primary key,
    shoes text not null,
    stock int not null
);

insert into sku(shoes , stock) values('/images/b.jpg', 121);
insert into sku(shoes , stock) values('/images/c.jpg', 150);
insert into sku(shoes , stock) values('/images/d.jpg', 98);
insert into sku(shoes , stock) values('/images/e.jpg', 110);

insert into sku(shoes , stock) values('/images/2.jpg', 111);
insert into sku(shoes , stock) values('/images/3.jpg', 131);
insert into sku(shoes , stock) values('/images/4.jpg', 89);
insert into sku(shoes , stock) values('/images/5.jpg', 120);
