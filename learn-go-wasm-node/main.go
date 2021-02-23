package main

import "fmt"

func changeValue(p *int) {
	*p = 10
}

func main() {
	var a int = 1
	changeValue(&a)
	fmt.Println("a = ", a)
}
