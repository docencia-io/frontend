import Iframe from 'react-iframe'
import { useEffect, useState } from 'react';
export default function IDE() {
    const [height, setHeight] = useState(0)
    const handleWindowResize = () => {
        setHeight(window.innerHeight - 80);
    }
    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return <Iframe url="https://db.xn--ensea-rta.cl/"
        width="100%"
        height={height + "px"}
        id="myId"
        className="myClassname"
        display="initial"
        position="flex" />;
}
