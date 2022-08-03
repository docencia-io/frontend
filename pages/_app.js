import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "../styles/globals.css";
import "@fontsource/roboto";
import Layout from "../components/Layout";

import { SessionProvider } from "next-auth/react"



function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </SessionProvider>


    );
}

export default MyApp;
