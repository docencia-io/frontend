import messages from '../../../grpc/docencia_pb'
import services from '../../../grpc/docencia_grpc_pb'

import grpc from 'grpc'
import { getSession } from "next-auth/react";

const pushFile = async ({projectID,token,content,file}) => {
    const grpcCredentials = grpc.credentials.createInsecure();
    const client = new services.GitlabClient(process.env.GITLAB||"localhost:8000", grpcCredentials);
    const request = new messages.PushRequest();


    request.setToken(token);
    request.setRepository("codes");
    request.setName(file)
    request.setContent(btoa(content))
    request.setProjectid(projectID)

    let data = new Promise((resolve, reject) => {
        client.push(request, function (err, response) {
            let data = response.toObject();

            console.log("DATA",data)
            resolve(response.toObject());
        })
    })
  
    return await data;
}
export default async function handler(req, res) {
    const body = req.body

 
    const  data  = getSession({ req });
    data.then((session) => {
        let token = session.Me.info.data.user.gitlab

        let repositories = [{ id:0,owner:session.Me.info.data.user.username }]

        for(let section of   session.Me.info.data.user.sectionsByOwnerId.edges){
           
            repositories.push({ id:section.node.gitlabProyectId,owner: section.node.courseByCourseId.code+"-"+section.node.section })
        }
        for(let section of  session.Me.info.data.user.usersSectionsByUserId.edges){
            if (section.node.role ==3){
                continue
            }
            repositories.push({ id:section.node.sectionBySectionId.gitlabProyectId,owner: section.node.sectionBySectionId.courseByCourseId.code+"-"+section.node.sectionBySectionId.section })
        }

        enableTopush = true


        pushFile({
            token: token,
            file: body.file,
            content:body.content,
            projectID: body.projectID
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
