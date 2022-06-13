import Link from 'next/link'
import Head from 'next/head'
import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import { Button, Center } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
    // Fetch the user client-side
    const { user } = useUser({ redirectTo: '/login', redirectIfFound: '/' })

    // Server-render loading state
    if (!user || user.isLoggedIn === false) {
        return <Layout>Loading...</Layout>
    }

    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <Layout>
                <Link href='/login'>
                    <Center height="100">
                        <Button bgColor="teal.200">Log In</Button>
                    </Center>
                </Link>
            </Layout>
        </ >
    )
}