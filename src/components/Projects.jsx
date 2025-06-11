import {
  background,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

import ProjectOne from "../assets/project-1.jpg";
import ProjectTwo from "../assets/project-2.jpg";
import ProjectThree from "../assets/project-3.jpg";
import ServicesIcon from "../assets/ServicesIcon";

const Projects = () => {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex {...css.top}>
          <ServicesIcon />
          Лойиҳаларимиз
        </Flex>
        <Heading {...css.title}>Бизнинг лойиҳаларимиз</Heading>
        <SimpleGrid columns={2} gap={"24px"}>
          <Box>
            <Image {...css.image} src={ProjectOne} alt="ProjectOne" />
            <Heading {...css.name}>Asilbek Sultanbek Logistics Group</Heading>
            <Link {...css.link} target="_blank" href="http://aslg.kz/">
              Ташриф буюриш
            </Link>
          </Box>
          <Box>
            <Image {...css.image} src={ProjectTwo} alt="ProjectOne" />
            <Heading {...css.name}>Nomex Company</Heading>
            <Link
              {...css.link}
              target="_blank"
              href="https://nomexlogistics.kz/"
            >
              Ташриф буюриш
            </Link>
          </Box>
          <Box>
            <Image {...css.image} src={ProjectThree} alt="ProjectOne" />
            <Heading {...css.name}>CSR Travel</Heading>
            <Link {...css.link} target="_blank" href="https://csrtravel.uz/">
              Ташриф буюриш
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;

const css = {
  title: {
    fontSize: "45px",
    lineHeight: "57px",
    fontWeight: "500",
    color: "#191919",
    textAlign: "center",
    width: "750px",
    margin: "24px auto",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  name: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#191919",
    margin: "8px 0",
  },
  link: {
    color: "#262626",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
    borderRadius: "100px",
    background: " #F2F4F6",
    padding: "8px 16px",
    transition: "0.3s",

    _hover: {
      background: "linear-gradient(180deg, #9F54F7 0%, #8523F5 100%)",
      color: "#fff",
    },
  },
  top: {
    borderRadius: "100px",
    border: "1px solid #EDEFF3",
    color: "#4D4D4D",
    width: "168px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gap: "8px",
    padding: "4px 8px",
  },
};
