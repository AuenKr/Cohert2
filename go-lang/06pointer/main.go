package main

import "fmt"

func main()  {
	fmt.Println("Class on Pointer")

	var poniter *int
	fmt.Println("Unintialize pointer value ", poniter)
	fmt.Printf("Unintialize pointer type %T \n", poniter)

	myNo := 25

	ptr := &myNo
	fmt.Println("variable ptr memory address : ", ptr);
	fmt.Println("variable ptr points to value : ", *ptr);

	*ptr = *ptr *2;
	fmt.Println("variable ptr memory address : ", ptr, " : See it's still pointing to same address");
	fmt.Println("variable ptr points to value (updated) : ", *ptr, " : But value at that address has changed");

}