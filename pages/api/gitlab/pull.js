import messages from '../../../grpc/docencia_pb'
import services from '../../../grpc/docencia_grpc_pb'

import grpc from 'grpc'
import { getSession } from "next-auth/react";

const pullFile = async ({projectID,token,file}) => {
    const grpcCredentials = grpc.credentials.createInsecure();
    const client = new services.GitlabClient(process.env.GITLAB||"localhost:8000", grpcCredentials);
    const request = new messages.PullRequest();


    request.setToken(token);
    request.setRepository("codes");
    request.setName(file)
    request.setProjectid(projectID)

    let data = new Promise((resolve, reject) => {
        client.pull(request, function (err, response) {
            resolve(response.toObject());
        })
    })
  
    return await data;
}
export default async function handler(req, res) {
    /*const body = req.body
*/
    let params = req.query
    const  data  = getSession({ req });
    data.then((session) => {
        let token = session.Me.info.data.user.gitlab
        pullFile({
            token: token,
            file: params.file,
            projectID: params.projectID
        })
        .then((data) => {
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
