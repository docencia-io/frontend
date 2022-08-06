import { useState, useEffect } from 'react';


import dynamic from "next/dynamic"


export default function IDE() {


    const [render, setRender] = useState(false)
    const AceEditor = dynamic(() => import("react-ace"), {
        // Do not import in server side
        ssr: false,
      })

      const Ace = dynamic(() => import('ace-builds/src-noconflict/ace'), {
        // Do not import in server side
        ssr: false,
      })
useEffect(()=>{
    setRender(true)
})

    return <>
    {render?<AceEditor
        placeholder="// Inserta tu codigo"
        //mode={"Cshap"}//Type(Lang)}
        theme="twilight"
        name="hoola"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        width={"100%"}
        height={"700px"}
        highlightActiveLine={true}
        //value={Code}
        // onChange={(e)=>{Coder.Send(e)}}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }} />:null}
        </>
}