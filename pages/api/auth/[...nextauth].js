import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    {
      id: "custom",
      name: "Docencia",
      type: "oauth",
      clientId:"myapp",
      clientSecret:"apple123",
      
      wellKnown: "https://auth.cooding.io/.well-known/openid-configuration",
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      checks: ["pkce", "state"],
      
      profile(profile) {
        //console.log("PP", profile)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image:"",
         // image: profile.picture,
        }
      },
      
    }

  ],

  theme: {
    colorScheme: "light",
  },
  callbacks: {

    async jwt({ token }) {
     // console.log("JWT", token)
      token.userRole = "admin"
      return token
    },
  },
  
}

export default NextAuth(authOptions)