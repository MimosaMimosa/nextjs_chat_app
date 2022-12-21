import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAuth } from '@lib/auth'
import store from 'redux/store'
import { getToken } from 'next-auth/jwt'

const protectedRoute = [
    '/'
]

export async function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/login') {
        const session = await getToken({ req: request, secret: process.env.AUTH_SECRET })
        if (session) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if (protectedRoute.includes(request.nextUrl.pathname)) {
        const session = await getToken({ req: request, secret: process.env.AUTH_SECRET });
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}