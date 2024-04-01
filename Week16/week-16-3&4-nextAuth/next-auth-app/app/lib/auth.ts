import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'Enter email' },
                password: { label: 'Password', type: 'password', placeholder: 'Enter password' },
            },
            async authorize(credentials: any) {
                const { username, password } = credentials;
                const userDetail = {
                    id: '1234',
                    name: 'fds',
                    email: 'fds@fds.com',
                    username: username,
                    password: password
                }
                return {
                    id: '1234',
                    name: 'fds',
                    email: 'fds@fds.com',
                    username: username,
                    password: password
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({ user }) => {
            if (user.email == 'abc@abc.com') return false;
            return true;
        },
        jwt: ({ token }) => {
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) session.user.id = token.sub;
            return session;
        }
    },
    pages: {
        signIn : '/signin'
    }
}
