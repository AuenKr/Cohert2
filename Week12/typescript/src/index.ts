interface User {
    readonly id: string,
    name: string,
    age: number,
    readonly email: string,
    password: string
}

// readonly => forced const : internal value of array or object also not change
// usecase => use in config files

type UpdateProps = Pick<User, 'name' | 'age' | 'password'>;

type UpdatePropsOptional = Partial<UpdateProps>;

type fixedProps = Readonly<Pick<User, 'id' | 'email'>>; // can do this on use readonly on individual property

function updateUser(updateProps: UpdateProps) {
    // Database call to update name, age, password
    console.log(`${updateProps.name} of ${updateProps.age} having password : ${updateProps.password} is shit!!`)
}

updateUser({ name: 'fuck', age: 213, password: 'shit#password' })