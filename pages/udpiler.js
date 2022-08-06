import Iframe from 'react-iframe'
import { useEffect, useState } from 'react';
export default function IDE() {
    const [height, setHeight] = useState(0)
    const handleWindowResize = () => {
        setHeight(window.innerHeight - 80);
    }
    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return <Iframe url="https://udpiler.udp.cl/"
        width="100%"
        height={height + "px"}
        id="myId"
        className="myClassname"
        display="initial"
        position="flex" />;
}
