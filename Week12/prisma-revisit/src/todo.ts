import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface TodoSchema {
    user_id: number;
    title: string;
    description?: string;
    done?: boolean;
}

async function createTodo(todo: TodoSchema) {
    try {
        await prisma.$connect();
        const result = await prisma.todo.create({
            data: todo
        });
        console.log("Todo added\n", result);
    } catch (err) {
        console.log("Fail to create todo\n", err);
    } finally {
        await prisma.$disconnect();
    }
}

async function getTodos(user_id: number) {
    try {
        await prisma.$connect();
        const result = await prisma.todo.findMany({
            where: {
                user_id: user_id,
            }
        })
        console.log('Todos : ', result);
    } catch (err) {
        console.log('Fail to fetch todo');
    } finally {
        await prisma.$disconnect();
    }
}

async function getTodosAndUserDetail(user_id: number) {
    try {
        await prisma.$connect();
        const result = await prisma.todo.findMany({
            where: {
                user_id: user_id,
            },
            select: {
                id: true,
                title: true,
                description: true,
                done: true,
                user: true,
            }
        })
        console.log('Todos : ', result);
    } catch (err) {
        console.log('Fail to fetch todo');
    } finally {
        await prisma.$disconnect();
    }
}

const todo: TodoSchema = {
    user_id: 10,
    title: "go to gym22",
    description: "go to gym and do 10 pushups2"
}

async function main() {
    // await createTodo(todo);
    // await getTodos(10);
    await getTodosAndUserDetail(10);
}

main();