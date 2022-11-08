import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


import messages from '../../../grpc/docencia_pb'
import services from '../../../grpc/docencia_grpc_pb'

import grpc from 'grpc'

const grpcCredentials = grpc.credentials.createInsecure();


const findOrCreate = async (profile) => {
    // console.log(process.env.NewCore)
    const client = new services.CoreClient(process.env.NewCore, grpcCredentials);
    const request = new messages.FindOrCreateUserRequest();
    request.setName(profile.given_name)
    request.setLastname(profile.family_name)
    request.setProvider( "GOOGLE" )
    request.setEmail(profile.email);
    let data = new Promise((resolve, reject) => {
        client.findOrCreateUser(request, function (err, response) {
            let user = response.toObject();
            resolve(user);
        })
    })
    let user = await data
    return user;
}

const getInfo = async (email) => {
    // console.log(process.env.NewCore)
    const client = new services.CoreClient(process.env.NewCore, grpcCredentials);
    const request = new messages.InfoIDRequest();
    request.setEmail(email);
    let data = new Promise((resolve, reject) => {
        client.getInfoByID(request, function (err, response) {
            let user = response.toObject();
            //console.log("ACA",user)
            resolve(user);
        })
    })
    let user = await data
    user.info = JSON.parse(atob(user.info))
    return user;
}

export const authOptions = {
    secret: "cooding.io",
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // profile(profile) {
            //     return profile
            // }
        }),
        {
            id: "docencia",
            name: "Docencia",
            type: "oauth",
            clientId: "myapp",
            clientSecret: "apple123",
            wellKnown: "https://auth.docencia.io/.well-known/openid-configuration",
            authorization: { params: { scope: "openid email profile" } },
            idToken: true,
            checks: ["pkce", "state"],
            async profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: "",
                };
            },
        },
    ],

    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
            console.log("PROVIDER",profile)
              await findOrCreate(profile)
              return profile.email.endsWith("@mail.udp.cl") || profile.email.endsWith("@mmae.cl")
            }
            return true // Do different verification for other providers that don't have `email_verified`
          },
        async session({ session, user }) {
            session.Me = await getInfo(session.user.email);
            session.Username = session.Me.info.data.user.username;
            return session
          },
        async jwt({ token }) {
            // console.log("JWT", token)
            token.userRole = "admin";
            return token;
        },
    },
};

export default NextAuth(authOptions);
