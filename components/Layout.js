import Breadcrumb from "./Breadcrumb";
import Navbar from "./Navbar";

const iframeMode = ["IDE","database","server","udpiler"]

export default function Layout({ children }) {
    return <>
            <Navbar />
           {iframeMode.includes(children.type.name)? 
           <div className="content">{children}</div>:
            <main className="container-page">
                <Breadcrumb />
                <div className="content">{children}</div>
            </main> }
        </>
}
