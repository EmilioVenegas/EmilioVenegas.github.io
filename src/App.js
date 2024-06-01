// src/App.js
import React from "react";
import { ChakraProvider, Box, Container, Flex, VStack } from "@chakra-ui/react";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Awards from "./components/Awards";

function App() {
  return (
    <ChakraProvider>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Flex
          direction="column"
          align="start"
          p={[1, 4]}
          bg="white"
          borderRadius="lg"
          alignItems="center"
          rowGap={10}
        >
          <About />
          <Flex
            direction="column"
            align="start"
            maxW={["100%", "80%"]}
            p={[1, 4]}
            bg="white"
            justifyContent="center"
            borderRadius="lg"
            rowGap={10}
          >
            <Education />
            <Skills />
            <Research />
            <Awards />
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
