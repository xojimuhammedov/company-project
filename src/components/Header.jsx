import { Box, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemImage from "../assets/item.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Header = () => {
  const [count, setCount] = useState(false);
  return (
    <Box pt={"72px"}>
      <Box className="container">
        <Flex flexDirection={"column"} align={"center"}>
          <Heading {...css.title}>
            Бизнесингиз учун веб сайтга хозироқ буюртма беринг
          </Heading>
          <Link {...css.link} href="tel+998990027391" target="_blank">
            Биз билан боғланиш
          </Link>
        </Flex>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <SimpleGrid gap={"20px"} columns={3}>
            <Flex
              {...css.item}
              flexDirection={"column"}
              align={"center"}
              justify={"center"}
              gap={"8px"}
            >
              <Heading {...css.number}>
                {count && (
                  <CountUp
                    className="static-number"
                    start={0}
                    duration={2.75}
                    end="50"
                    delay={0}
                  />
                )}
                <span style={{ color: "#191919" }}>+</span>
              </Heading>
              <Text {...css.name}>Тугалланган лойиҳалар</Text>
            </Flex>
            <Flex
              {...css.item}
              flexDirection={"column"}
              align={"center"}
              justify={"center"}
              gap={"8px"}
            >
              <Heading {...css.number}>
                {count && (
                  <CountUp
                    className="static-number"
                    start={0}
                    duration={2.75}
                    end="5"
                    delay={0}
                  />
                )}
                <span style={{ color: "#191919" }}>+</span>
              </Heading>
              <Text {...css.name}>Йиллик Тажриба</Text>
            </Flex>
            <Flex
              {...css.item}
              flexDirection={"column"}
              align={"center"}
              justify={"center"}
              gap={"8px"}
            >
              <Heading {...css.number}>
                {count && (
                  <CountUp
                    className="static-number"
                    start={0}
                    duration={2.75}
                    end="30"
                    delay={0}
                  />
                )}
                <span style={{ color: "#191919" }}>+</span>
              </Heading>
              <Text {...css.name}>Мамнун мижозлар</Text>
            </Flex>
          </SimpleGrid>
        </ScrollTrigger>
      </Box>
    </Box>
  );
};

export default Header;

const css = {
  title: {
    fontSize: "45px",
    lineHeight: "57px",
    fontWeight: "500",
    color: "#191919",
    width: "634px",
    textAlign: "center",
  },
  link: {
    borderRadius: "100px",
    background: "linear-gradient(180deg, #9F54F7 0%, #8523F5 100%)",
    boxShadow: "4px 4px 18px 0px rgba(178, 178, 178, 0.28) inset",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "24px",
    width: "200px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "36px 0",
  },
  number: {
    fontSize: "55px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#191919",
  },
  name: {
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "500",
    color: "#4D4D4D",
  },
  item: {
    borderRadius: "20px",
    background: `url(${ItemImage})`,
    border: "1px solid #FFF",
    height: "178px",
  },
};
