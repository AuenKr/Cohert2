"use server"
import prisma from "@/db"

export async function signUp(username: string, password: string) {
    try {
        const result = await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        return true;
    } catch (error) {
        return false;
    }
}
