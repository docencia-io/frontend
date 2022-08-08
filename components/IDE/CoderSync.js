import socketIOClient from "socket.io-client";
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
    sync[this.user] = this
    // socket.emit('SEND',{uuid,id:this.user,sync:true})
   
      

      //setTimeout(()=>{setCode("HOOOOOLa") },2000)
    }
    Lang(){

    }
    setLang(lang){

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
    changeLang(lang){
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

    Exec(){
        

        let compiler = new Api("compiler/" + this.lang.toLowerCase())
        compiler.SetDomain("https://ide.xn--ensea-rta.cl/")
        if (this.lang.toLowerCase() =="sql"){
            compiler.SetDomain("https://ide-db.xn--ensea-rta.cl/")
        }
        let msg = {
            "Name": "",
            "File": this.code
        }

        compiler.new(msg).then(data => {
            if (data.Error == true) {
                this.setErr(data.MSG)
                return
            } 
            this.setErr("")
            this.setURL("")
            switch (this.lang) {
                case "Python":
                    this.setURL("https://ide.xn--ensea-rta.cl/PYTHON/?session=" + data.Path)
                    break;
                case "Java":
                    this.setURL("https://ide.xn--ensea-rta.cl/JAVA/?session=" + data.Path)
                    break;
                case "SQL":
                    this.setURL("https://ide-db.xn--ensea-rta.cl/SQL/?session=" + data.Path)
                    break;
                case "Golang":
                    this.setURL("https://ide.xn--ensea-rta.cl/GOLANG/?session=" + data.Path)
                    break;
                default:
                    this.setURL("https://ide.xn--ensea-rta.cl/CPP/?session=" + data.Path);
            }
        

        }).catch((data)=>{
            this.setErr("Error en nuestro servidores ")

        })

    }

  }