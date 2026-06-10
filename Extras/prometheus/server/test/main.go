package main

import (
	"encoding/json"
	"fmt"
)

type TestingType[Input any, Output any] struct {
	A Input
	B Output
	C func(Input) (Output, error)
}

var data = TestingType[int, string]{
	A: 1,
	B: "Hello",
	C: func(a int) (string, error) {
		res := fmt.Sprintf("%d", a)
		return res, nil
	},
}

func wrapTestingType[I any, O any](data TestingType[I, O]) TestingType[any, any] {
	return TestingType[any, any]{
		A: any(data.A),
		B: any(data.B),
		C: func(a any) (any, error) {
			var input I
			if ok, err := a.(I); err {
				input = ok
			} else {
				bytes, err := json.Marshal(a)
				if err != nil {
					return nil, err
				}
				if err := json.Unmarshal(bytes, &input); err != nil {
					return nil, err
				}
			}
			res, err := data.C(input)
			return any(res), err
		},
	}
}

func main() {
	data1 := wrapTestingType(data)
	fmt.Println("A:", data1.A)
	fmt.Println("B:", data1.B)
	fmt.Println(data1.C(1))
}
