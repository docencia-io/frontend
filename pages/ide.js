import { useState, useEffect } from 'react';
import Ide from '../components/IDE/ide'
import LeftBar from '../components/IDE/leftBar'
// import { data, Me, Api,UUID ,GenerateUUID,Render} from '../core/ensena'
import {CodeCpp, CodeJava,CodePython,CodeGolang,CodeSQL} from '../components/IDE/codes' 
import Coder from '../components/IDE/CoderSync';
import { useSession} from "next-auth/react";
import RunCode from '../components/IDE/RunCode';

export default function IDE() {

    const { data } = useSession();

    const [url, setURL] = useState("");
    const [code, setCode] = useState(CodeCpp);
    const [repository, setRepository] = useState({owner:"",name:""});
    const [lang, setLang] = useState("Cpp");
    const [err, setErr] = useState("");  

    const coder = new Coder({id:1},{setCode,setLang,setURL,setErr,code,lang,url,err,repository, setRepository})


    return <div className="mdk-drawer-layout__content page2 " style={{ transform: 'translate3d(0px, 0px, 0px)' }}>

        <div data-push data-responsive-width="768px" className="mdk-drawer-layout js-mdk-drawer-layout" data-domfactory-upgraded="mdk-drawer-layout">
            <LeftBar  Lang={lang} Coder={coder}/>
            <div className="mdk-drawer-layout__content" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                     {url != "" || err!="" ? <RunCode url={url} err={err}/>: null}   
               
                <Ide Type={"csharp"} Code={code} Lang={lang} Coder={coder}/>
               
            </div>
       

        </div>
    </div>
}
