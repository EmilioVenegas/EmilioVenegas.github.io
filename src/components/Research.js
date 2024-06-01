// src/components/Research.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FaMicroscope,
  FaLeaf,
  FaFlask,
  FaHeartbeat,
  FaSun,
  FaSearch,
} from "react-icons/fa";

const researchProjects = [
  {
    title: "CancerSense: Mammography Image Classification",
    description:
      "CancerSense employs deep learning techniques to develop a system for the classification of mammography images. Using the TensorFlow framework, Convolutional Neural Networks (CNNs) are built and trained to analyze and classify mammography images sourced from the INbreast, MIAS, and DDSM datasets. Preprocessing techniques are applied to ensure optimal image quality and feature extraction.\n\nThe trained model accurately classifies images into three categories: normal, benign, and malignant, providing a certainty percentage for each prediction. Additionally, a web application has been developed using React, Flask, and Chakra UI, allowing users to upload mammography images and receive classification results instantly.\n\nThis application aims to assist medical professionals and researchers in the early detection and diagnosis of breast cancer.\n\nJupyter Notebook for Multi-Class Mammography Image Classification\n[GitHub Repository](https://github.com/EmilioVenegas/breast-cancer-app)",
    icon: FaSearch,
  },
  {
    title:
      "Influence of Allicin on migration, invasion, and EMT-related proteins in breast cancer cells",
    description:
      "Conducted research on Allicin's therapeutic potential in breast cancer cells (MCF-7, HCC70). Conducted experiments on proliferation, migration, invasion, and EMT marker expression analysis. Found Allicin's significant dose-dependent anti-proliferative and anti-EMT effects. Demonstrated strong biomedical research, experimental design, and data analysis skills in breast cancer studies.",
    icon: FaMicroscope,
  },
  {
    title:
      "Evaluation of the hypoglycemic effect of the methanolic extract based on soursop leaves (Annona muricata)",
    description:
      "Conducted in vivo experiments with diabetic rats to evaluate the efficacy of a treatment derived from methanolic extract of soursop leaves. Explored the treatment's viability for diverse diabetes types, with a focus on affordability for widespread accessibility. Engaged in thorough data analysis and interpretation to draw conclusions about the effectiveness and cost-effectiveness of the soursop leaf extract as a treatment option.",
    icon: FaLeaf,
  },
  {
    title:
      "Organometallic Chemistry Research Internship: Synthesis of new generation Rhodium and Iridium catalysts",
    description:
      "Executed intricate organic synthesis to produce imidazole precursors, serving as ligands for Rhodium and Iridium cores. Contributed to ongoing research on the synthesized catalyst's potential application as a reductor in homogeneous catalysis. Engaged in complex reaction systems and utilized NMR (1H and 13C) and Infrared Spectroscopy for structure elucidation. Collaborated closely with Master's and PhD students, fostering a multidisciplinary research environment.",
    icon: FaFlask,
  },
  {
    title:
      "Evaluation of Allium sativum properties and potential usage as an antihypertensive",
    description:
      "Summarized garlic's key properties as a source of metabolites with antihypertensive, anticarcinogenic, and hypoglycemic effects. Drew insights from various studies on Allium Sativum, emphasizing characterized metabolites and investigating pharmaceutical forms and administration methods. Explored historical usage and contemporary applications, contributing to a comprehensive understanding of garlic's medicinal potential based on scientific literature.",
    icon: FaHeartbeat,
  },
  {
    title: "Structural and functional analysis of Bacteriorhodopsin",
    description:
      "Investigated a newly identified protein employed by Halobacterium, elucidating its mechanism for converting solar light into usable chemical energy. Explored specific binding sites and bonds through the utilization of protein modeling software, including PyMOL and Avogadro.",
    icon: FaSun,
  },
];

const Research = () => {
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
        Research and Projects
      </Heading>
      <VStack align="start" spacing={6}>
        {researchProjects.map((project, index) => (
          <Box key={index}>
            <HStack spacing={3} mb={2}>
              <Icon as={project.icon} w={6} h={6} color="teal.500" />
              <Text fontWeight="bold" fontSize="lg">
                {project.title}
              </Text>
            </HStack>
            <Text>{project.description}</Text>
            {index < researchProjects.length - 1 && <Divider />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Research;
