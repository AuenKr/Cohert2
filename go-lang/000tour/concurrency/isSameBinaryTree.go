package main

import (
	"fmt"

	"golang.org/x/tour/tree"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	// In Order Traversal
	var inOrderTraversal func(t *tree.Tree)

	inOrderTraversal = func(t *tree.Tree) {
		if t == nil {
			return
		}
		inOrderTraversal(t.Left)
		ch <- t.Value
		inOrderTraversal(t.Right)
	}

	inOrderTraversal(t)
	close(ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	walk1, walk2 := make(chan int), make(chan int)

	go Walk(t1, walk1)
	go Walk(t2, walk2)

	for {
		v1, ok1 := <-walk1
		v2, ok2 := <-walk2

		if !ok1 && !ok2 {
			return true
		}
		if !ok1 != !ok2 || v1 != v2 {
			return false
		}
	}
}

func main() {
	for {
		t1 := tree.New(1)
		t2 := tree.New(1)
		res := Same(t1, t2)

		fmt.Println("Both trees are same: ", res)
		if res {
			return
		}
	}
}
