import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from 'next/image'

import Ide from '../components/IDE/ide'
import {CodeCpp, CodeJava,CodePython,CodeGolang,CodeSQL} from '../components/IDE/codes' 
import Coder from '../components/IDE/CoderSync';


function GenerateIDE(){
    const [url, setURL] = useState("");
    const [code, setCode] = useState(CodeCpp);
    const [repository, setRepository] = useState({owner:"",name:""});
    const [lang, setLang] = useState("Cpp");
    const [err, setErr] = useState("");  

    const coder = new Coder({id:1},{setCode,setLang,setURL,setErr,code,lang,url,err,repository, setRepository})
    return coder
}


export default function Profile() {


    const { data } = useSession();


    let coder1 = GenerateIDE()
    let coder2 = GenerateIDE()

    return <div>
        <h1> Prueba</h1>

        <p> Pregunta 1 </p>

        <Ide Type={"csharp"} Code={coder1.code} Lang={coder1.lang} Coder={coder1}/>

        <p> Pregunta 2 </p>
        <Ide Type={"csharp"} Code={coder2.code} Lang={coder2.lang} Coder={coder2}/>


    </div>
}