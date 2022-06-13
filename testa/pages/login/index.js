import Head from 'next/head'
import LoginForm from '../../components/form/LoginForm'
import { Box } from '@chakra-ui/react'

export default function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        const JSONData = JSON.stringify(data)

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSONData,
        }
        const response = await fetch('/api/form', options)
        const result = await response.json()

        alert(`Result: ${result.data}`)
    }

    return (
        <Box bg="gray.100" minH="100vh">
            <Head>
                <title>Login page</title>
            </Head>

            <LoginForm onSubmit={handleSubmit} />
        </Box>
    )
}