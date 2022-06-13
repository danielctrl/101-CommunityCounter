import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Title Generico ✌️</title>
            </Head>

            <Header />

            <main>
                <Box bgColor="gray.100" minH="100vh">
                    {children}
                </Box>
            </main>
        </>
    )
}