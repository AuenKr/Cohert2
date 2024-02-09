{/* 
// Interface vs type
type TypeUser = {
    firstName: string,
    lastname: string,
    email?: string,
    age?: number,
}

interface interfaceUser {
    firstName: string,
    lastname: string,
    email?: string,
    age?: number,
}

// 1. unions
type id = string | number;

function printId(id: id): void {
    console.log(id);
}

function printId2(id: (string | number)): void {
    console.log(id);
}

printId(234);
printId("fds");
// printId(true);

*/}

// {/* 
// 2. Intersection
type Employee = {
    name: string,
    startDate: Date,
}

type Manager = {
    name: string,
    department: string,
}

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "hello",
    startDate: new Date(),
    department: "EE",
}

// */}
