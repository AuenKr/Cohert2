import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        type: 'GET',
        msg: 'On api/auth route'
    })
}