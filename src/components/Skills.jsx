import React from "react";
import { Box, Text, Progress } from "@chakra-ui/react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "ReactJS", level: 90 },
  { name: "Git", level: 60 },
  { name: "MongoDB", level: 90 },
  { name: "MySQL", level: 75 },
  { name: "Ionic Framework", level: 75 },
];

const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box width="650px" boxShadow="md" padding="30px">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Skills
        </Text>
        {skills.map((skill) => (
          <Box key={skill.name} mb={4}>
            <Text fontSize="lg" fontWeight="semibold">
              {skill.name}
            </Text>
            <Progress value={skill.level} size="md" colorScheme="teal" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
