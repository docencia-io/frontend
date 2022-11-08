import { useState, useEffect } from 'react'
import Iframe from "react-iframe";


export default function RunCode({ url, err }) {
    const [width, setWidth] = useState(0)
    const handleWindowResize = () => {
        setWidth(window.innerWidth - 249);
    }
    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return <div>
        {err != "" ? <div className="card-footer bg-dark">
            <div id="myId2"  className="alert alert-secondary" role="alert" style={{'width':(width-10)+"px"}}>
                    {err}
            </div>


        </div> : err}
        {url != "" ? <Iframe
            url={url}
            width={width + "px"}
            height={"400px"}
            id="myId2"
            frameBorder={0}
            className="myClassname"
            display="initial"
            position="relative"
        /> : null}
    </div>
}