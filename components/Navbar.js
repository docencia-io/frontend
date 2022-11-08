import { pathMapper } from "../utils/pathMapper";
import { useRouter } from "next/router";
import { BsBoxArrowInRight, BsPersonCircle } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
function IsActive(path) {
    const router = useRouter();
    const { pathname } = router;
    return pathname.includes(path);
}
export default function Navbar() {
    const { data, status } = useSession();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="First navbar example">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        Docencia
                    </a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample01"
                    aria-controls="navbarsExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {status === "authenticated" && (
                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <div className="navbar-nav">
                            {Object.keys(pathMapper).map((key) => (
                                <Link href={`/${key}`} key={key}>
                                    <a className={`nav-item nav-link ${IsActive(key) ? "active" : ""}`} >
                                        {pathMapper[key]}
                                    </a>
                                </Link>
                            ))}
                             <Link href={`/faq`} key={"faq"}>
                                    <a className={`nav-item nav-link ${IsActive("faq") ? "active" : ""}`} >
                                       FAQ
                                    </a>
                                </Link>
                            <a className="nav-logout nav-item nav-link">
                                <BsBoxArrowInRight className="navbar-logout-icon" />
                                Logout
                            </a>
                        </div>
                    </div>
                )}
                {status === "authenticated" && (
                    <div className="navbar-right">
                        <div className="navbar-username">{data.user.name}</div>
                        <button className="logout" onClick={() => signOut()}>
                            <BsBoxArrowInRight className="logout-icon" />
                        </button>
                    </div>
                )}
                {status === "unauthenticated" && (

                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <div className="navbar-nav">
                           
                                <Link href={`/faq`} key={"faq"}>
                                    <a className={`nav-item nav-link ${IsActive("faq") ? "active" : ""}`} >
                                       FAQ
                                    </a>
                                </Link>
                        
                            <a className="nav-logout nav-item nav-link">
                                <BsBoxArrowInRight className="navbar-logout-icon" />
                                Logout
                            </a>
                        </div>
                    </div>)}


                {status === "unauthenticated" && (


                    <div className="navbar-right">
                        <button className="logout" onClick={() => signIn()}>
                            <BsPersonCircle className="logout-icon" />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
