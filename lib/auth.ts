import { NextRequest } from "next/server";
import * as jose from 'jose';
export const verifyAuth = async (request: NextRequest) => {
    try {
        const token = request.cookies.get('chat_hub')?.value;
        if(!token) {
            throw new Error('Your token has expired.')
        }
        const secret = new TextEncoder().encode(
            process.env.NEXT_PUBLIC_SECRET_KEY as string
          )
          const { payload } = await jose.jwtVerify(token, secret, {
            issuer: 'chat_hub',
            audience: 'chat_hub',
          })
          return payload;
    } catch (error) {
        throw new Error('Your token has expired.')
    }
}