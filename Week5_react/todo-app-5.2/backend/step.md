## Apporoach to make todo-backend

-   write a express boilertemplate code with express.json() as middleware
-   input validation : zod
    -   1. define all types for all endpoint
        -   {
            todos : {},
            todo : { title : string description : string},
            completed : { id : string}
            }
    -   2. create types.js and all zod validation code from user
        -   check parsepayload
    -   3. add in mongodb

## Aproach to make todo-frontend
 
- divide the frontend into section: **createTodo** && **getTodo**
- add all components of page in src/components/ 
    - Note pageName and jsx extension

> **CreateTodo.jsx**
> **Todos.jsx**

