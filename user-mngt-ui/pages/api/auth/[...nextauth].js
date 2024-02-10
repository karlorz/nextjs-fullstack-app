import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Demo',
      credentials: {
        email: { label: "Email", type: "text" },
      },
      authorize: async (credentials) => {
        // Add your logic here to check if the provided email is valid
        const isValidEmail = true; // Replace with your own validation logic
        if (isValidEmail) {
          const user = { email: credentials.email, name: 'Demo User' };
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
    // ...add more providers here
  ],
});