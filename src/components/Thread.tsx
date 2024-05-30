import { Box, Text, Image,Input, Button, Divider, VStack, Flex, HStack } from "@chakra-ui/react"
import { CiImageOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";

interface ThreadProps {
    title : string,
    profile : string,
    name : string,
    username : string,
    time : string,
    article : string,
    likes : number,
    comments : string,
    pictures : string
}

export function Thread({title, profile, name, username, time, article, likes, comments, pictures} : ThreadProps) {
    return(
        
        <Box
        left="0"
        top="0"
        mt="0"
        w="700px"
        h="100vh"
        p="4"
        display="flex"
        flexDirection="column"
        borderWidth="0px 1px"
        borderColor="gray"
        >
            <VStack fontSize="12" align="start">
                <Text fontSize="2xl" color="white" fontWeight="bold">{title}</Text>
                <Flex gap="2">
                    <Image width="10" height="10" borderRadius="30" src={profile} alt="" />
                    <Input placeholder="What is Happening?!" fontSize="12" width="450px" border="none"/>
                    <CiImageOn color="green" size="20"/>
                    <Button width="150" height="6" borderRadius="20" color="white" bg="green" fontSize="10">Post</Button>
                </Flex>
                <Divider borderColor="gray" mt="4" mb="4"/>
                <Flex gap="2">
                    <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                    <Text ps="12" fontWeight="bold">{name}</Text>
                    <Text color="gray">{username}</Text>
                    <TbPointFilled color="gray"/>
                    <Text color="gray">{time}</Text>
                </Flex>
                <Text marginStart="12" fontSize="12">{article}</Text>
                <HStack gap="1" ps="12" color="gray">
                    <FaRegHeart/>
                    <Text me="6">{likes}</Text>
                    <LiaComment/>
                    <Text>{comments}</Text>
                </HStack>
                <Divider borderColor="gray" mt="4" mb="4"/>
                <Flex gap="2">
                    <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                    <Text ps="12" fontWeight="bold">{name}</Text>
                    <Text color="gray">{username}</Text>
                    <TbPointFilled color="gray"/>
                    <Text color="gray">{time}</Text>
                </Flex>
                <Text marginStart="12" fontSize="12">{article}</Text>
                <HStack gap="1" ps="12" color="gray">
                    <FaRegHeart/>
                    <Text me="6">{likes}</Text>
                    <LiaComment/>
                    <Text>{comments}</Text>
                </HStack>
                <Divider borderColor="gray" mt="4" mb="4"/>
                <Flex gap="2">
                    <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                    <Text ps="12" fontWeight="bold">{name}</Text>
                    <Text color="gray">{username}</Text>
                    <TbPointFilled color="gray"/>
                    <Text color="gray">{time}</Text>
                </Flex>
                <Text marginStart="12" fontSize="12">{article}</Text>
                
                    <Image marginStart="12"  src={pictures} boxSize="150px"/>
                
                <HStack gap="1" ps="12" color="gray">
                    <FaRegHeart/>
                    <Text me="6">{likes}</Text>
                    {/* <Button leftIcon={<BiLike/>} size="sm"><Text me="6">{likes}</Text></Button> */}
                    <LiaComment/>
                    <Text>{comments}</Text>
                </HStack>
            </VStack>
        </Box>
        
    )
}