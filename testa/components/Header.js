import { Flex, Spacer, Box, Center } from '@chakra-ui/react'

// https://chakra-ui.com/docs/components/navigation/breadcrumb

export default function Header() {
    return (
        <Flex h="50" bgColor="white" boxShadow="md">
            <Center>
                <Box>Logo</Box>
            </Center>

            <Spacer />

            <Center>
                <Box>Menu 1</Box>
                <Box>Menu 2</Box>
            </Center>

            <Spacer />

            <Center>
                <Box>Profile</Box>
            </Center>
        </Flex>
    )
}