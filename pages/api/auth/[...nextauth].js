import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


// import messages from '../../../components/grpc/docencia_pb'
// import services from '../../../components/grpc/docencia_grpc_pb'

// import grpc from 'grpc'

// const grpcCredentials = grpc.credentials.createInsecure();
// const client = new services.CoreClient("localhost:8080", grpcCredentials);


// const getInfo = async (email) => {
//     const request = new messages.InfoIDRequest();
//     request.setEmail(email);

//     let data = new Promise((resolve, reject) => {
//         client.getInfoByID(request, function (err, response) {
//             let user = response.toObject();
//             resolve(user);
//         })
//     })

//     let user = await data
//     user.info = JSON.parse(atob(user.info))
//     return user;
// }

export const authOptions = {
    secret: "cooding.io",
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        {
            id: "custom",
            name: "Docencia",
            type: "oauth",
            clientId: "myapp",
            clientSecret: "apple123",
            wellKnown: "https://auth.cooding.io/.well-known/openid-configuration",
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
        async session({ session, user }) {
            // session.Me = await getInfo(session.user.email);
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
