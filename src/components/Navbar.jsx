import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../assets/LogoIcon";

const Navbar = () => {
  return (
    <Box pt={"30px"}>
      <Box className="container">
        <Box {...css.box}>
          <Flex justify={"space-between"} alignItems={"center"}>
            <Heading {...css.title}>TechNora</Heading>
            <Flex gap={"24px"} alignItems={"center"}>
              <Link {...css.link} href="#">
                Биз Ҳақимизда
              </Link>
              <Link {...css.link} href="#">
                Хизматларимиз
              </Link>
              <Link {...css.link} href="#">
                Лойиҳаларимиз
              </Link>
              {/* <Link href="#">Нархлар</Link> */}
            </Flex>
            <Link {...css.button} href="tel+998990027391" target="_blank">
              Биз билан боғланиш
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

const css = {
  box: {
    borderRadius: "100px",
    background: "#FFF",
    boxShadow:
      "0px 2px 2px 0px rgba(182, 182, 182, 0.10), 0px 2px 3px 0px rgba(182, 182, 182, 0.08)",
    padding: "8px 8px 8px 16px",
    maxWidth: "1084px",
    width: "100%",
    margin: "auto",
  },
  link: {
    color: "#262626",
    fontSize: "17px",
    lineHeight: "24px",
    fontWeight: "500",
    transition: "0.3s",

    _hover: {
      color: "#9F54F7",
    },
  },
  button: {
    borderRadius: "100px",
    background: "linear-gradient(180deg, #9F54F7 0%, #8523F5 100%)",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "24px",
    width: "200px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "30px",
    lineHeight: "57px",
    fontWeight: "600",
    color: "#191919",
    cursor: "pointer",
  },
};
