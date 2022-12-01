package main

import "fmt"

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

	product2 := Product{
		Name:  "Table",
		Price: 250.0,
	}

	product3 := Product{
		Name:  "Laptop",
		Price: 1300.0,
	}

	fmt.Println(product.Name, product.Price, product2)

	product3.showNameAndPrice()
}
