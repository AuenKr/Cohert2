package main

import "fmt"
import "time"

func main(){
	fmt.Println("Welcome to time study in Golang")
	presentTime := time.Now()
	fmt.Println("Curr Time : ", presentTime);

	fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))

	createdDate := time.Date(2020, time.August, 31, 10, 10, 10, 10, time.UTC)
	fmt.Println(createdDate)
	fmt.Println(createdDate.Format("01-02-2006 15:04:05 Moday"))
}