
import Iframe from  '../components/iframe'
import { useSession } from "next-auth/react";

export default function Server() {
    const { data } = useSession();
    return <Iframe url={"https://ssh-udp.docencia.io/?session="+data.Me.token}/>
}
