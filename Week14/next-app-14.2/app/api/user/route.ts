import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const response = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    return Response.json({
        msg: "You are loginin",
        name: response.data.name,
        email: response.data.email
    })
}

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    const result = await prisma.user.create({
        data: {
            email: username,
            password: password
        }
    })
    return Response.json({
        msg: "You are loginin",
        email: username,
        password: password,
        result
    })
}
