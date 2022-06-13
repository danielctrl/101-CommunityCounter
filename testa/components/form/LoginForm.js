import PasswordInput from './PasswordInput'
import { VStack, Center, FormControl, Button, Text, Box, Input } from '@chakra-ui/react'

export default function LoginForm(props) {
    return (
        <Center>
            <form onSubmit={(e) => props.onSubmit(e)}>
                <Box bg="gray.50" m="8" px="5" py="20" boxShadow='base'>
                    <VStack spacing='24px' boxSize='md' height="min">

                        <Text fontSize='5xl'>Login</Text>

                        <Input name='email' placeholder='Email' />

                        <PasswordInput />

                        <Button type="submit" color='white' background='teal.400' variant='solid' borderRadius="xl" size="lg"
                            _hover={{
                                background: "teal.500",
                                color: 'white'
                            }}>
                            Login
                        </Button>

                    </VStack>
                </Box>
            </form>
        </Center>
    )
}