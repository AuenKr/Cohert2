import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: {
                    label: 'Username', type: 'text', placeholder: 'abc@abc.com'
                },
                password: {
                    label: 'Password', type: 'password', placeholder: 'Enter password'
                }
            },
            async authorize(credentials: any) {
                const { username, password } = credentials;
                if (username && password) return credentials;
                console.log(credentials)
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "set_secret_key",
})

export { handler as GET, handler as POST }