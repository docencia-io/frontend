import { useState, useEffect } from 'react';
import Ide from '../components/IDE/ide'

import LeftBar from '../components/IDE/leftBar'
// import { data, Me, Api,UUID ,GenerateUUID,Render} from '../core/ensena'
import {CodeCpp, CodeJava,CodePython,CodeGolang,CodeSQL} from '../components/IDE/codes' 


export default function IDE() {

    const [url, setURL] = useState("");
    const [code, setCode] = useState(CodeCpp);
    const [lang, setLang] = useState("Cpp");
    const [err, setErr] = useState("");  
    const coder ={}// new Coder(Me,{setCode,setLang,setURL,setErr,code,lang,url,err})

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
