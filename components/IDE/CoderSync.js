// import socketIOClient from "socket.io-client";
import {TypeCode,Type} from './codes'





// import {Api,GenerateUUID } from '../core/ensena'

const ENDPOINT = "https://ws-ide.xn--ensea-rta.cl";
// const socket = socketIOClient(ENDPOINT); 
// const uuid = GenerateUUID()
let sync = {}

// socket.on("broadcast", data => {
//     //console.log("DDD",data,sync,data.id,uuid)

//     if(data.id==undefined){
//         return 
//     }

//     if (!(data.id in sync)){
//         return
//     }
//     if (data.uuid == uuid){
//         return 
//     }
//     const coder = sync[data.id]

//     if (data.sync==true){
//        // socket.emit('SEND',{code:coder.code,lang:coder.lang,id:coder.user,uuid,sync:false})
//         return 
//     }

//     if (coder._code != data.code) {
        

//         coder._code = data.code
//         if (!coder._lock){
//             coder._lock = true 
//             setTimeout(()=>{
//                     coder._lock = false
//                     if (data.lang!=coder.lang){
//                         coder.setLang(data.lang)
//                     }
//                     coder.setCode(coder._code)
//             },200)
//         }

//     }
    

// });


export default class Coder {
    constructor(user, OBJ) {
    this._lock = false 
    this._lock2 = false 
    this._code = ""
    this.user = user.id
    this.setCode = OBJ.setCode
    this.setLang= OBJ.setLang
    this.lang = OBJ.lang
    this.setErr= OBJ.setErr
    this.setURL= OBJ.setURL
    this.code = OBJ.code
    this.repository= OBJ.repository
    this.setRepository= OBJ.setRepository
    sync[this.user] = this
    this.name = ""
    // socket.emit('SEND',{uuid,id:this.user,sync:true})
   
      

      //setTimeout(()=>{setCode("HOOOOOLa") },2000)
    }
    Lang(){

    }
    setLang(lang){
        this.lang = lang
        console.log("LANG",lang)
    }
    Reset(c){
        let code = TypeCode(c)
        this.setCode(code)
        this.setErr("")
        this.setURL("")
        this.Send(code)
    }

    Recive(){
        

    }
   async Save(name){
      const dataPost = {
        content: this.code,
        file : name,
        projectID: this.repository.projectID
       }

       let repository = this.repository
       repository.file = name
       this.setRepository(repository)
   
       // Send the data to the server in JSON format.
       const JSONdata = JSON.stringify(dataPost)
       // Form the request for sending data to the server.
       const options = {
         // The method is POST because we are sending data.
         method: 'POST',
         // Tell the server we're sending JSON.
         headers: {
           'Content-Type': 'application/json',
         },
         // Body of the request is the JSON data we created above.
         body: JSONdata,
       }
       const response = await fetch('/app/api/gitlab/push', options)
       const result = await response.json()

      
    }
    changeLang(lang){
        console.log("LANG",lang)
        this.setLang(lang)
        this.emit(this.code,lang)
    }
    emit(code,lang){
        //socket.emit('SEND',{code,uuid,lang:lang,id:this.user,sync:false})
    }

    Send(code){
        if (code ==this._code){
            return 
        }
        this._code = code 
        this.setCode(code)
        if (!this._lock2 ){
            this._lock2 = true 
            setTimeout(()=>{
                this._lock2=false
                this.emit(code,this.lang)
               
            },200)
        }
    }

    async Exec(){
    const dataPost = {
        lang: this.lang,
        code: this.code
      }
        const JSONdata = JSON.stringify(dataPost)
  
      const endpoint = '/app/api/compiler'
        const options = {
        method: 'POST',   
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }
      const response = await fetch(endpoint, options)
      const result = await response.json()
      //setMessage(result.message)
      if (result.error) {
        this.setURL("");
        this.setErr(result.message);
        return 
      }
      this.setErr("");
      this.setURL(result.url);
      if (this.repository.file !="" ){
        this.name = this.repository.file
        let name_file = this.repository.file 
        Coder.setRepository({
          owner: this.repository.owner,
          file: name_file,
          projectID: this.repository.projectID,
        })
        this.Save(name_file)
      }
    }
  }