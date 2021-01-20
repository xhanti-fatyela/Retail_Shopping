create table myRetails(
id serial not null primary key,
users text not null,
email text not null,
colour text not null,
size int not null,
price text not null,
order_no text not null,
cost int not null
);

create table sku(
    id serial not null primary key,
    shoes text not null,
    shoeName text not null,
    stock int not null
);

insert into sku(shoes , shoeName,  stock) values('/images/b.jpg', 'Urban Find' , 121);
insert into sku(shoes , shoeName,  stock) values('/images/c.jpg', 'HDKS Sneaker' , 150);
insert into sku(shoes , shoeName,  stock) values('/images/d.jpg', 'Relay Shoe' , 98);
insert into sku(shoes , shoeName,  stock) values('/images/e.jpg', 'Sport Guyisa' , 110);

insert into sku(shoes , shoeName,  stock) values('/images/2.jpg', 'Rose Sandal' , 111);
insert into sku(shoes , shoeName,  stock) values('/images/3.jpg', 'Red High Heels' , 131);
insert into sku(shoes , shoeName,  stock) values('/images/4.jpg', 'Pink Sneaker' , 89);
insert into sku(shoes , shoeName,  stock) values('/images/5.jpg', 'Mini Heels' , 120);
insert into sku(shoes , shoeName,  stock) values('/images/6.jpg', 'Womens Blazer' , 120);
insert into sku(shoes , shoeName,  stock) values('/images/7.jpg', 'Two Tone Denim' , 120);
insert into sku(shoes , shoeName,  stock) values('/images/f.jpg', 'Denim Jacket' , 120);
insert into sku(shoes , shoeName,  stock) values('/images/g.jpg', 'Denim Jean' , 120);