import React from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
  Flex,
  Card, CardHeader, CardBody, CardFooter,
  Divider,
  ButtonGroup,
  Tooltip,
  Link,
} from '@chakra-ui/react'
import { Project } from '../project'


const ProjectCard = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" marginTop="-50px">
        {Project.map((index, i) => (
            // <Center py={6} margin="20px">
            // <Box
            //     maxW={'445px'}
            //     w={'full'}
            //     bg={"white"}
            //     boxShadow={'2xl'}
            //     rounded={'md'}
            //     p={6}
            //     overflow={'hidden'}>
            //     <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            //     <Image
            //         src={
            //         'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fexample&psig=AOvVaw0mONlYt5WC51sCTK2YvKih&ust=1693418061984000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCp1IG4goEDFQAAAAAdAAAAABAE'
            //         }
            //         fill
            //         alt="Example"
            //     />
            //     </Box>
            //     <Stack>
            //     <Text
            //         color={'green.500'}
            //         textTransform={'uppercase'}
            //         fontWeight={800}
            //         fontSize={'sm'}
            //         letterSpacing={1.1}>
            //         {index.category}
            //     </Text>
            //     <Heading
            //         color={"gray.700"}
            //         fontSize={'2xl'}
            //         fontFamily={'body'}>
            //          
            //     </Heading>
            //     <Text color={'gray.500'}>
            //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            //         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            //         voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            //     </Text>
            //     </Stack>
            //     <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            //         <Button colorScheme='teal'>View</Button>
            //     </Stack>
            // </Box>
            // </Center>
            <Card maxW='sm' margin="20px">
            <CardBody>
                <Image
                src={index.img}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{index.name}</Heading>
                <Tooltip label={index.description}>
                    <Text noOfLines={2} cursor="pointer">
                        {index.description}
                    </Text>
                </Tooltip>
                {/* <Text color='blue.600' fontSize='2xl'>
                    {index.category}
                </Text> */}
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' textDecoration="none">
                    <Link href={index.site} target="_blank" rel="noopener noreferrer" textDecoration="none">
                        View site
                    </Link>
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    <Link href={index.git} target="_blank" rel="noopener noreferrer" textDecoration="none">
                    Repository
                    </Link>
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
        ))}
    </Flex>
  )
}

export default ProjectCard