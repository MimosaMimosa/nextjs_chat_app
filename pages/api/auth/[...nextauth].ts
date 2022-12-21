import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    secret:process.env.AUTH_SECRET,
    pages:{
        // signIn:'/login',
        // error:'/login',  
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
                        email: credentials?.email,
                        password: credentials?.password
                    })
                    return res.data.user;
                } catch (error: any) {
                    throw new Error(JSON.stringify({ status: error.response.status, ok: false, data: error.response.data }));
                }
            }
        })
    ],
    callbacks: {
        signIn: async () => {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        session: async ({ session, token }) => {
            session.user.id = token.id as string
            session.user.token = token.token as string
            return session
        },
        jwt: async ({ token, user }) => {
            console.log(user);
            if (user?._id) {
                token.id = user._id
                token.token = user.token
            }
            return token
        },
    }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, authOptions)
}
