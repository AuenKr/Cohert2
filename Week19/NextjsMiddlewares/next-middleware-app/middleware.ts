import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let countApiRequest = 0;
let countPageRequest = 0;
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/signin')) {
        console.log('On page /signin route')
        countPageRequest++;
        console.log('countPageRequest : ', countPageRequest)
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/api/user')) {
        console.log("on api/user page");
        countApiRequest++;
        console.log('countApiRequest : ', countApiRequest)
        return NextResponse.next();
    }
}