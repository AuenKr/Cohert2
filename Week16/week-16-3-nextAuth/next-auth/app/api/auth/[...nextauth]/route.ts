import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: 'email', type: 'text', placeholder: 'abc@abc.com' },
        password: { label: 'password', type: 'password', placeholder: 'password' },
      },
      async authorize(credentials: any) {
        console.log(credentials)
        const { username, password } = credentials;
        // Check if both username and password are provided and not empty
        if (username && password) {
          const result = {
            username: credentials.username,
            password: credentials.password
          };
          console.log(result);
          return result;
        } else {
          return null; // Return null if either username or password is missing
        }
      },
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST }