import { useState, useEffect } from 'react';


import dynamic from "next/dynamic"
import { useSession} from "next-auth/react";

const Ace = dynamic(
    async () => {
      const ace = await import('react-ace');
      require('ace-builds/src-noconflict/mode-mysql');
      require('ace-builds/src-noconflict/mode-csharp');
      require('ace-builds/src-noconflict/theme-twilight');
      require('ace-builds/src-noconflict/theme-github');
      require('ace-builds/src-noconflict/mode-python');
      require('ace-builds/src-noconflict/mode-java');
      require('ace-builds/src-noconflict/mode-golang');
      return ace;
    },
  {
    loading: () => (
      <>Loading...</>
    ),
    ssr: false,
  })

export default function IDE({Code,Coder}) {
    const { data } = useSession();

    
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

    return  <Ace
        placeholder="// Inserta tu codigo"
        mode="csharp"  
        theme="github"
        name="hoola"
      
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        // width={windowSize.width}
        width="auto"
        height={windowSize.height}
        highlightActiveLine={true}
        
       value={Code}
       onChange={(e)=>{Coder.Send(e)}}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
          //  fontFamily: "monospace",
            tabSize: 2,
        }} />
}