package service

import (
	"context"
	"errors"
	todopb "todo/proto"
)

type TodoService struct {
	todopb.UnimplementedTodoServiceServer
}

var (
	Todos   []*todopb.Todo
	counter = 0
)

func (s *TodoService) CreateTodo(_ context.Context, Todo *todopb.Todo) (*todopb.Todo, error) {
	todo := todopb.Todo{
		Id:        int64(counter),
		Task:      Todo.Task,
		Completed: Todo.Completed,
	}
	Todos = append(Todos, &todo)
	counter++

	return &todo, nil
}

func (s *TodoService) GetTodo(_ context.Context, _ *todopb.GetTodoRequest) (*todopb.GetTodoResponse, error) {
	data := todopb.GetTodoResponse{
		Data: Todos,
	}
	return &data, nil
}

func (s *TodoService) UpdateTodo(_ context.Context, Todo *todopb.Todo) (*todopb.Todo, error) {
	foundId := -1

	for key, value := range Todos {
		if Todo.Id == value.Id {
			value.Completed = Todo.Completed
			value.Task = Todo.Task
			foundId = key
			break
		}
	}

	if foundId == -1 {
		return nil, errors.New("todo not found")
	}
	return Todos[foundId], nil
}

func (s *TodoService) DeleteTodo(_ context.Context, data *todopb.DeleteTodoRequest) (*todopb.Todo, error) {
	foundId := -1

	for key, value := range Todos {
		if data.Id == value.Id {
			foundId = key
			break
		}
	}

	if foundId == -1 {
		return nil, errors.New("todo not found")
	}
	todo := Todos[foundId]
	Todos = append(Todos[:foundId], Todos[foundId+1:]...)

	return todo, nil
}
