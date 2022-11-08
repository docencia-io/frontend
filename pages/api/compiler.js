import grpc from 'grpc'
import messages from '../../grpc/docencia_pb'
import services from '../../grpc/docencia_grpc_pb'
import { getSession } from "next-auth/react";


function getURL(lang){
    return  process.env.CompilerCPP
    // switch(lang){
    //     // case "Python":
    //     //     return process.env.CompilerPYTHON
    //     case "Golang":
    //         return process.env.CompilerGO
    //     case "Java":
    //         return process.env.CompilerJAVA
    //     case "Cpp":
    //         return process.env.CompilerCPP
    //     default:
    //         return  process.env.CompilerCPP
    // }
}



export default async function handler(req, res) {
    const body = req.body

    const  data  = getSession({ req });
    data.then((session) => {
       
        const grpcCredentials = grpc.credentials.createInsecure();
        const lang = getURL(body.lang)
        const client = new services.CompilerClient(lang, grpcCredentials);
        const request = new messages.CodeRequest();
        request.setId(session.Me.id);
        request.setCode(body.code);
        
        client.compiler(request, function (err, response) {
        
            let data = response.toObject();
            console.log(data)
            res.status(200).json( {
                error: data.error,
                message: data.message,
                url: "https://ide.docencia.io/CPP/?session="+data.link
             } )
        })

    }).catch((err) => {
        console.log(err)
        res.status(500)
    })
    
   
  }
