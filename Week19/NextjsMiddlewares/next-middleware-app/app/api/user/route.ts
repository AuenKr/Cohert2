import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        msg: "On api/user route page",
    })
}