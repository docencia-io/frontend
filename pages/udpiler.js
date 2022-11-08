
import Iframe from  '../components/iframe'
import { useSession } from "next-auth/react";
export default function Udpiler() {
    const { data } = useSession();
    return <Iframe url={"https://udpiler.udp.cl/?/Profile/docenciaio?code="+data.Me.token}/>
}
