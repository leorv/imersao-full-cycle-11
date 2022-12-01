package main

import (
	"database/sql"
	"fmt"
	"net/http"
)

func main() {
	// um container consegue falar com outro container através da rede interna deles.
	// Apenas usar o nome do serviço do docker compose.
	db, err := sql.Open("mysql", "root:root@tcp(mysql:3307)/imersao11")

	if err != nil {
		panic(err)
	}

	defer db.Close()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, Full Cycle!")
	})

	http.ListenAndServe(":8081", nil)
}
