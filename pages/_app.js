import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";


function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
    }, [router.events]);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}  basePath="/app/api/auth" >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
