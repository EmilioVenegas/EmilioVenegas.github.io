// src/components/Awards.js
import React from "react";
import { Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaMedal, FaAward, FaTrophy } from "react-icons/fa";

const awards = [
  {
    title:
      "Selected as Poster presenter  in European Association for Cancer Research",
    date: "June,2024",
    location: "Rotterdam, Netherlands",
    description:
      "With the project “Influence of allicin on migration, invasion and EMT-related proteins in breast cancer cells",
    icon: FaMedal,
    color: "teal",
  },
  {
    title:
      "Selected as Poster presenter in the undergraduate category- Congreso Internacional Avances en Medicina",
    date: "February 2024",
    location: "Zapopan, México",
    description:
      "With the project “Influence of allicin on migration, invasion and EMT-related proteins in breast cancer cells",
    icon: FaMedal,
    color: "teal",
  },
  {
    title:
      "Prize to best undergraduate research poster - National seminar of undergraduate research",
    date: "February 2024",
    location: "Zapopan, México",
    description:
      "With the project “Influence of allicin on migration, invasion and EMT-related proteins in breast cancer cells",
    icon: FaMedal,
    color: "teal",
  },

  {
    title: "Bronze Medal - 53rd International Chemistry Olympiad (IChO)",
    date: "July 2021",
    location: "Osaka, Japan",
    description:
      "Awarded a bronze medal for solving highly advanced problems in applied chemistry. Reflected strong performance and expertise in the field of chemistry.",
    icon: FaMedal,
    color: "#Cd7f32",
  },
  {
    title: "Gold Medal - Ibero-American Chemistry Olympiad (OIAQ)",
    date: "October 2021",
    location: "Piauí, Brazil",
    description:
      "Achieved a gold medal at the Ibero-American Chemistry Olympiad. Showcased exceptional skills and knowledge in the field of chemistry.",
    icon: FaMedal,
    color: "gold",
  },
  {
    title: "Twice recipient of Gold Medals - National Chemistry Olympiad AMC",
    date: "November 2020 and 2021",
    location: "Guadalajara, México",
    description:
      "Secured first place in the 30th and 31st National Chemistry Olympiad. Showcased sustained excellence and proficiency in the field of chemistry.",
    icon: FaMedal,
    color: "gold",
  },
  {
    title: "Best Research Project Award - Pharmaceutical Chemistry CETI",
    date: "June 2021",
    location: "Guadalajara, México",
    description:
      "Attained first place in the chemistry tournament through successful debates and solutions on applied chemistry problems, covering subjects such as alloys, chemical quantitative determination, and ecological processing of residues.",
    icon: FaAward,
    color: "teal.500",
  },
  {
    title:
      "Absolute Winner Team - Mexican Chemistry Tournament - Universidad de Guadalajara",
    date: "June 2021",
    location: "Guadalajara, México",
    description:
      "Attained first place in the chemistry tournament through successful debates and solutions on applied chemistry problems, covering subjects such as alloys, chemical quantitative determination, and ecological processing of residues.",
    icon: FaTrophy,
    color: "gold",
  },
];

const Awards = () => {
  return (
    <Box
      borderRadius="1rem"
      p={5}
      bg="white"
      width="100%"
      boxShadow="0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028), 0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042), 0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07)"
    >
      <Heading as="h2" size="xl" mb={4}>
        Awards and Honors
      </Heading>
      <VStack align="start" spacing={6}>
        {awards.map((award, index) => (
          <Box key={index}>
            <HStack spacing={3}>
              <Icon as={award.icon} w={6} h={6} color={award.color} />
              <Text fontWeight="bold" fontSize="lg">
                {award.title}
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.600">
              {award.date}, {award.location}
            </Text>
            <Text>{award.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Awards;
