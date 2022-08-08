import { useState, useEffect } from 'react';


import dynamic from "next/dynamic"
import { useSession} from "next-auth/react";

const AceEditor = dynamic(() => import("react-ace"), {
    // Do not import in server side
    ssr: false,
})


// import "ace-builds/src-noconflict/mode-csharp";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/mode-golang";
// import "ace-builds/src-noconflict/mode-mysql";
// import "ace-builds/src-noconflict/theme-twilight";

export default function IDE({Code,Coder}) {
    const { data, status } = useSession();

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    const [render, setRender] = useState(false)  
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: (window.innerWidth-248)+"px",
          height: window.innerHeight+"px"
        });
        setRender(true)
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 

    return  <AceEditor
        placeholder="// Inserta tu codigo"
        mode="csharp"//Type(Lang)}
        theme="twilight"
        name="hoola"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        width={windowSize.width}
        height={windowSize.height}
        highlightActiveLine={true}
        
       value={Code}
       // onChange={(e)=>{Coder.Send(e)}}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }} />
}