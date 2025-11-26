package main

import (
	"fmt"
    "strconv"
	"syscall/js"
	"time"
)

// recursiveFib calculates the Nth Fibonacci number using direct recursion.
// This function has exponential time complexity.
func recursiveFib(n int) int {
	if n <= 1 {
		return n
	}

	return recursiveFib(n-1) + recursiveFib(n-2)
}

func main() {
    // Default to 35
	n := 35

	window := js.Global()
	location := window.Get("location")
	searchParams := window.Get("URLSearchParams").New(location.Get("search"))
	nParam := searchParams.Call("get", "n")
	if nParam.Type() == js.TypeString && nParam.String() != "" {
		parsed, err := strconv.Atoi(nParam.String())
		if err == nil {
			n = parsed
		}
	}

	fmt.Printf("Calculating Fibonacci(%d)...\n", n)

	start := time.Now()
	result := recursiveFib(n)
	elapsed := time.Since(start)

	fmt.Printf("Result: %d\n", result)
	fmt.Printf("Time taken: %s\n", elapsed)
}
