-- name: InsertProduct :exec
insert into products (name, price) values (?, ?);