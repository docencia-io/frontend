import messages from '../../grpc/docencia_pb'
import services from '../../grpc/docencia_grpc_pb'

import grpc from 'grpc'
import { getSession } from "next-auth/react";



const changePassword = async (email,password) => {
    const grpcCredentials = grpc.credentials.createInsecure();
    const client = new services.CoreClient(process.env.NewCore, grpcCredentials);
    const request = new messages.ChangePasswordRequest();
    request.setEmail(email);
    request.setPassword(password);

    let data = new Promise((resolve, reject) => {
        client.changePassword(request, function (err, response) {
            let user = response.toObject();
            resolve(user);
        })
    })
    let user = await data
    return user;
}

export default async function handler(req, res) {
    const body = req.body
    if (!body.email || !body.password) {
      return res.status(400).json({ data: 'First or last name not found' })
    }
    const  data  = getSession({ req });
    data.then((session) => {
        changePassword(session.user.email,body.password).then((data) => {
            res.status(200).json( data )
        }).catch((err) => {
            console.log(err)
            res.status(500)
        })

    }).catch((err) => {
        console.log(err)
        res.status(500)
    })
    
   
  }
