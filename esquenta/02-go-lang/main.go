package main

import (
	"fmt"
	"time"
)

func contador() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
		time.Sleep(time.Second)
	}
}

func main() {
	fmt.Println("Hello World!")
	go contador()
	go contador()
	contador()

	// http.ListenAndServe(":3000", nil)
}
