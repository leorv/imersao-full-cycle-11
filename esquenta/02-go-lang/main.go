package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

type Product struct {
	Name  string
	Price float64
}

func (p Product) showNameAndPrice() {
	fmt.Println("Name:", p.Name, "Price:", p.Price)
}

func main() {
	product := Product{
		Name:  "Chair",
		Price: 100.0,
	}
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		panic(err)
	}
	insertProduct(db, product)
}

func insertProduct(db *sql.DB, product Product) {
	_, err := db.Exec("INSERT INTO products (name, price) VALUES (?,?)", product.Name, product.Price)
	if err != nil {
		panic(err)
	}
}
