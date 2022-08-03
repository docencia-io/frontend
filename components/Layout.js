import Breadcrumb from "./Breadcrumb";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return <>
            <Navbar />
            <main className="container-page">
                <Breadcrumb />
                <div className="content">{children}</div>
            </main>
        </>
}
