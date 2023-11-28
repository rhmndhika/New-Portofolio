import React from "react";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { Project } from "../project";

const ProjectCard = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      marginTop="-50px"
    >
      {Project.map((index, i) => (
        <Card maxW="sm" margin="20px">
          <CardBody>
            <Image
              src={index.img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{index.name}</Heading>
              <Tooltip label={index.description}>
                <Text noOfLines={2} cursor="pointer">
                  {index.description}
                </Text>
              </Tooltip>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" textDecoration="none">
                <Link
                  href={index.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none"
                >
                  View site
                </Link>
              </Button>
              <Button variant="ghost" colorScheme="blue">
                <Link
                  href={index.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none"
                >
                  Repository
                </Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default ProjectCard;
