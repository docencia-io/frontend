import { useRouter } from "next/router";
import { pathMapper } from "../utils/pathMapper";
import Link from 'next/link'

export default function Breadcrumb() {
    const router = useRouter();
    const { pathname } = router;
    const paths = pathname.split("/");
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">INICIO</Link>
                    </li>
                    {paths.map((path, index) => {
                        if (index > 0) {
                            return (
                                <li className="breadcrumb-item" key={index}>
                                    {pathMapper[path] || path}
                                </li>
                            );
                        }
                    })}
                </ol>
            </nav>
            <h1 className="h2">{pathMapper[paths[1]]}</h1>
        </div>
    );
}
