import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAuth } from '@lib/auth'

const protectedRoute = [
    '/', 'chat'
]

export async function middleware(request: NextRequest) {

    if (protectedRoute.includes(request.nextUrl.pathname)) {
        const auth = await verifyAuth(request).catch(error => {
            console.log(error.message)
        })
        if (!auth) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (request.nextUrl.pathname === '/register') {
        const auth = await verifyAuth(request).catch(error => {
            console.log(error.message)
        })
        
        if(auth){
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}