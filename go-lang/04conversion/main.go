package main

import "fmt"
import "bufio"
import "os"	
import "strconv"
import "strings"

func main(){
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Welecome here")
	
	fmt.Println("Give rating bw 0 to 5")

	input, _ := reader.ReadString('\n')

	rating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	if err != nil {
		fmt.Println("Error occur while reading ", err)
	} else if rating < 0 || rating >5 {
		fmt.Println("invalid input")
	} else {
		fmt.Println("Thanx for your rating ", rating)
	}
}