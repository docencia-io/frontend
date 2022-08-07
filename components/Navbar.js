import { pathMapper } from "../utils/pathMapper";
import { useRouter } from "next/router";
import { BsBoxArrowInRight, BsPersonCircle } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";

function isActive(path) {
    const router = useRouter();
    const { pathname } = router;
    return pathname.includes(path);
}
export default function Navbar() {
    const { data, status } = useSession();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="First navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Docencia
                </a>
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
                                <a className={`nav-item nav-link ${isActive(key) ? "active" : ""}`} href={`/${key}`} key={key}>
                                    {pathMapper[key]}
                                </a>
                            ))}
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
