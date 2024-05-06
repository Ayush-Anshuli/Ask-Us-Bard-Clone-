import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';

import {
    HStack,
    Text,
    VStack,
    Stack,
    Container,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoHelpOutline } from "react-icons/io5";



const Sidebar = () => {
    const [extend, setExtend] = useState(false);
    const { onSent,prevprompt,setRecentprompt,newChat } = useContext(Context)

    const loadprompt = async (prompt) => {
        setRecentprompt(prompt)
        await onSent(prompt)
    }
    return (
        <>
            <Stack h={'100vh'}  borderTop={'1px solid gray'} borderRight={'1px solid gray'} borderBottom={'1px solid gray'} color={'white'}>

                <Text color={'white'} px={5} mt={4} fontSize={'1.5rem'} onClick={() => setExtend(prev => !prev)} transition='5s' cursor={'pointer'}><GiHamburgerMenu /></Text>
                <HStack px={5} mt={5} fontSize={'1.5rem'}>
                    <Text cursor={'pointer'}><IoIosAdd /></Text>
                    {
                        extend ? <Text fontSize={'0.85rem'} cursor={'pointer'} onClick={newChat}>New Chat</Text> : null
                    }

                </HStack>

                <Stack>
                    {
                        extend ? <>
                            <HStack ml={1} px={5}>

                                <Text cursor={'pointer'}><FaRegMessage /></Text>

                                <Text px={2} cursor={'pointer'}>Recent</Text>
                                
                            </HStack>
                            
                            {
                                    prevprompt.map((item,index)=> {
                                        return(
                                            <Container ml={5}>
                                            <Text onClick={() => loadprompt(item)} cursor={'pointer'}>{item}</Text>
                                            </Container>
                                        )
                                    })
                                }
                        </>
                            : null

                    }

                </Stack>

                <Stack pos={'absolute'} top={'90%'} >
                    <HStack ml={1} px={5}>
                        <Text cursor={'pointer'}><CiSettings /></Text>
                        {
                            extend ? <Text cursor={'pointer'}>Setting</Text> : null
                        }

                    </HStack>
                    <HStack ml={1} px={5}>
                        <Text cursor={'pointer'}><IoHelpOutline /></Text>
                        {
                            extend ? <Text cursor={'pointer'}>Help</Text> : null
                        }

                    </HStack>
                </Stack>
            </Stack>
        </>
    )
}

export default Sidebar