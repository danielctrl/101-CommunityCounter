import React, { useState } from 'react';
import { InputGroup, Button, FormControl, Input, InputRightElement } from '@chakra-ui/react'

export default function PassworInput(){
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
    return (
        <FormControl>
            <InputGroup>
                <Input
                    name='password'
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}