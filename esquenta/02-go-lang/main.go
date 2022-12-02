package main

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
)

type Product struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

// interface no go funciona apenas para métodos, não atributos.
type ProductInterface interface {
	showNameAndPrice()
}

func (p Product) showNameAndPrice() {
	fmt.Println("Name:", p.Name, "Price:", p.Price)
}

func recebeProduct(p ProductInterface) {
	p.showNameAndPrice()
}

func XPTO(numero int) (int, error) {
	if numero < 0 {
		return 0, errors.New("Número menor que zero")
	}
	return numero, nil
}

func main() {

	products := []Product{
		{Name: "Banana", Price: 2.99},
		{Name: "Apple", Price: 1.99},
		{Name: "Orange", Price: 0.99},
	}

	http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
		jsonProducts, err := json.Marshal(products)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Write(jsonProducts)
	})

	// product := Product{
	// 	Name:  "Chair",
	// 	Price: 100.0,
	// }
	// db, err := sql.Open("sqlite3", "data.db")
	// if err != nil {
	// 	panic(err)
	// }
	// insertProduct(db, product)

	// x, err := XPTO(10)
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println(x)

	// recebeProduct(product)
}

func insertProduct(db *sql.DB, product Product) {
	_, err := db.Exec("INSERT INTO products (name, price) VALUES (?,?)", product.Name, product.Price)
	if err != nil {
		panic(err)
	}
}
