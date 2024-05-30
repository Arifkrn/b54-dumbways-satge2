import { VStack, Button, Link, Text, Input, Box } from "@chakra-ui/react"

interface LoginProps {
    title : string,
    page : string,
    forgot : string,
    login : string,
    create : string
}
export function Login({title, page, forgot, login, create} : LoginProps){
    return(
<Box
        width="350px"
        m="auto"
        mt="100px">
        <VStack align="start">
            <Text>{title}</Text>
            <Text>{page}</Text>
            <Input 
                placeholder="username or email" 
                size='sm' 
            />
            <Input 
                placeholder="password" 
                size='sm' 
            />
            <Link>{forgot}</Link>
            <Button 
                width="100%" 
                borderRadius="full" 
                bg="green">
                {login}
            </Button>
            <Text>Don't have an account yet? 
                <Link color="green">{create}</Link>
            </Text>   
        </VStack>
        </Box>
    )
}