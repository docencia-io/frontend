

import  messages from '../../components/grpc/docencia_pb'
import  services from '../../components/grpc/docencia_grpc_pb'

import  grpc from 'grpc'



const grpcCredentials = grpc.credentials.createInsecure();

export default function handler(req, res) {
   

    
    const  client = new services.CoreClient("localhost:8080",grpcCredentials);

  
    const  request = new messages.InfoIDRequest();
    request.setId(1);
    client.getInfoByID(request, function(err, response) {
        let user = response.toObject();
        res.status(200).json({ user })
      });

   
  }