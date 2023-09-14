import React from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'



export default function Header () {
  return (
    <Container maxW={'5xl'} marginTop="-40px">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          About{' '}
          <Text as={'span'} color={'blue.500'}>
            me
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} textAlign="justify">
        Recent graduate with a degree in computer science and a GPA of 3.4 from Multimedia
        Nusantara University looking for a position as a Front End Engineer. Skilled and experienced
        in designing, developing, and testing websites using up-to-date technologies. Interested in the
        world of web developers, detail-oriented and a team player with a knowledge in UI/UX Design.
        Eager to face more challenges regarding ways to optimize user experience.
        </Text>
        <Stack spacing={6} direction={'row'}>
          {/* <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button> */}
          <Button rounded={'full'} px={6}>
            Projects
          </Button>
        </Stack>
        <Flex w={'full'}>
          {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
        </Flex>
      </Stack>
    </Container>
  )
}