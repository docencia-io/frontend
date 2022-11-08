import MyIframe from 'react-iframe'
import { useEffect, useState } from 'react';

export default function Iframe({url}){
  const [height, setHeight] = useState(0)
  const handleWindowResize = () => {
      setHeight(window.innerHeight - 80);
  }
  useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return <MyIframe url={url}
      width="100%"
      height={height + "px"}
      id="myId"
      className="myClassname"
      display="initial"
      position="flex" />;
}