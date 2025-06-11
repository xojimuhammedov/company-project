import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Icon from "../assets/icon.svg";
import ArrowIcon from "../assets/arrow.svg";
import LogoIcon from "../assets/LogoIcon";

const Footer = () => {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex flexDirection={"column"} align={"center"} gap={"16px"}>
          <Link {...css.link} href="tel:+998990027391" target="_blank">
            <Image src={Icon} />
            Биз билан боғланинг
            <Image src={ArrowIcon} />
          </Link>
         <Heading {...css.title}>TechNora</Heading>
          <Text {...css.text}>
            Тажрибали жамоа сизнинг брендингизга мослаштирилган ажойиб ечимларни
            тақдим этади.
          </Text>
        </Flex>
        <Flex flexWrap={'wrap'} justifyContent={'center'} mt={'16px'} gap={"24px"} align={"center"}>
          <Link {...css.links} href="#">
            Биз Ҳақимизда
          </Link>
          <Link {...css.links} href="#">
            Хизматларимиз
          </Link>
          <Link {...css.links} href="#">
            Лойиҳаларимиз
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;

const css = {
  link: {
    borderRadius: "16px",
    border: "1px solid #E1E4EB",
    background: "#F2F4F6",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "70px",
    padding: "0 16px",
    width: "310px",
    justifyContent: "center",
    margin: "auto",
  },
  text: {
    fontSize: "17px",
    lineHeight: "24px",
    color: "#333",
    width: "400px",
    textAlign: "center",
  },
  links: {
    color: "#262626",
    fontSize: "17px",
    lineHeight: "24px",
    fontWeight: "500",
    borderRadius: "100px",
    background: " #F2F4F6",
    padding:"12px 20px"
  },
    title: {
    fontSize: "30px",
    lineHeight: "57px",
    fontWeight: "600",
    color: "#191919",
    cursor: "pointer",
  },
};
