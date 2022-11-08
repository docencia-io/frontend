import Breadcrumb from "./Breadcrumb";
import Navbar from "./Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import Login from "./login";
const iframeMode = ["/ide","/database","/server","/udpiler","/salas","/faq"]
export default function Layout({ children }) {
    const router = useRouter()
    const { status } = useSession();
    if (status === "loading") {
        return <Navbar />;
    }
    return <>
            <Navbar />
            {status!="authenticated"?<Login/>:iframeMode.includes(router.pathname)? 
           <div className="content">{children}</div>:
            <main className="container-page">
                <Breadcrumb />
                <div className="content">{children}</div>
            </main> }
        </>
}
