import messages from '../../../grpc/docencia_pb'
import services from '../../../grpc/docencia_grpc_pb'

import grpc from 'grpc'
import { getSession } from "next-auth/react";

const listFile = async (token,respositories) => {
    const grpcCredentials = grpc.credentials.createInsecure();
    const client = new services.GitlabClient(process.env.GITLAB||"localhost:8000", grpcCredentials);
    const request = new messages.ListRequest();

    let responses =[]
    for (let repository of respositories) {
        request.setToken(token);
        request.setRepository("codes");
        request.setProjectid(repository.id)

        let data = new Promise((resolve, reject) => {
            client.list(request, function (err, response) {
                let file = response.toObject();
                let files = []
                let documents = JSON.parse(atob(file.files))
                for (let document of documents) {
                    files.push({"file" :document,type:"C++"})
                }
                resolve({"owner":repository.owner,projectID:file.projectid ,files:files});
            })
        })
        responses.push(data)
    }
    return await Promise.all(responses);
}
export default async function handler(req, res) {
    /*const body = req.body
*/
    const  data  = getSession({ req });
    data.then((session) => {
        let token = session.Me.info.data.user.gitlab

        let repositories = [{ id:0,owner:session.Me.info.data.user.username }]

        for(let section of   session.Me.info.data.user.sectionsByOwnerId.edges){
           
            repositories.push({ id:section.node.gitlabProyectId,owner: section.node.courseByCourseId.code+"-"+section.node.section })
        }
        for(let section of  session.Me.info.data.user.usersSectionsByUserId.edges){
            repositories.push({ id:section.node.sectionBySectionId.gitlabProyectId,owner: section.node.sectionBySectionId.courseByCourseId.code+"-"+section.node.sectionBySectionId.section })
        }
        listFile(token,repositories)
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
