import { Center, Container, HStack, Image, Stack, Text, Grid, GridItem, Input, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { Context } from '../../context/Context';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Main = () => {
    // const [text,setText] = useState("");
    const  {
        prevprompt,setPrevprompt,onSent,setRecentprompt,recentprompt,show,
        loading,result,input,setInput
    } = useContext(Context)
    return (
        <>

            <Container color={'white'} maxW={'1700px'} overflowY={'hidden'}>
                <HStack mt={8} color={'white'}>
                    <Text fontSize={'1.5rem'} >Ask Us</Text>
                </HStack>

                {
                    (!show) ? 
                    <Container maxW={'container.xl'}  fontStyle={'arial'} fontWeight={'bold'}>
                    <Stack fontSize={'3rem'} mt={18}>
                        <HStack>
                            <Text bgGradient="linear(to-r, #E233FF , #FF6B00)" bgClip="text" fontSize={['1.8rem','2rem',"3rem"]} fontWeight="bold" display="inline">Hello, there</Text>
                        </HStack>
                        <HStack color={'gray.600'}>
                            <Text fontSize={['1.8rem','2rem',"3rem"]}>How can I help you?</Text>
                        </HStack>
                    </Stack>

                    <Container  maxW={'container'}>
                    <Grid mt={10} templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={2}>
                        <GridItem borderRadius={'25px'} w='100%'  p={5} bg='#1E1F20' >
                            <Text fontWeight={'light'} fontSize={['0.85rem','1.2rem']}>Provide questions to help me prepare for an interview</Text>
                        </GridItem>
                        <GridItem w='100%' p={5} borderRadius={'25px'} bg='#1E1F20' >
                            <Text fontWeight={'light'} fontSize={['0.85rem','1.2rem']}>Help me get organized with a list of 10 tips</Text>
                        </GridItem>
                        <GridItem w='100%'  p={5} bg='#1E1F20' borderRadius={'25px'} >
                            <Text fontWeight={'light'} fontSize={['0.85rem','1.2rem']}>Draft an email with a packing list for an upcoming trip</Text>
                        </GridItem>
                        <GridItem w='100%'  p={5} bg='#1E1F20' borderRadius={'25px'}>
                            <Text fontWeight={'light'} fontSize={['0.85rem','1.2rem']}>Explain the following code step-by-step in detail</Text>
                        </GridItem>
                    </Grid>
                    </Container>

                    

                </Container>
                :
                <>
                <Container maxW={['container.sm','container.lg','container.xl']} h={600} >
                    <Stack mt={12}>
                        {
                            loading ? <Stack>
                            <Skeleton height='20px' startColor='blue.400' endColor='pink.600'/>
                            <Skeleton height='20px' startColor='blue.400' endColor='pink.600' />
                            <Skeleton height='20px' startColor='blue.400' endColor='pink.600'/>
                            <Skeleton height='20px' startColor='blue.400' endColor='pink.600'/>
                          </Stack> : 
                               <Grid templateColumns={'repeat(1,1fr)'}>
                               <GridItem>
                                   <Text fontWeight={'bold'} color={'white'}>
                                       {recentprompt}
                                   </Text>
                                   <Text style={{ scrollbarWidth: 'none'}} mt={5} h={['65vh']} overflowY={'auto'} lineHeight={'1.6'} >
                                   <p dangerouslySetInnerHTML={{__html:result}}>
                                   </p>
                                   </Text>
   
                               </GridItem>
                           </Grid>
                        }
                   
                    </Stack>
                </Container>
                </>
                }



              <Center  >
              <HStack w={'55%'} top={'90%'} position={'fixed'} >
                    
                    <input
                     type='text'
                     placeholder='Ask your doubt here'
                     value={input}
                    //  h={10}
                     onChange={(e) =>setInput(e.target.value)}
                     style={{background:"transparent",outline:'none',border:'1px solid gray',padding:'8px',paddingLeft:'10px',fontSize:'1.15rem',width:'100%',borderRadius:'50px'}}
                    />
                    <Button  onClick={() => onSent()} > <FaLocationArrow fontSize={['sm','lg','xl']}/></Button>
                    </HStack>
              </Center>

            </Container>
        </>
    )
}

export default Main