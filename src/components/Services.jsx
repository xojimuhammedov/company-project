import { Box, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import ServicesIcon from "../assets/ServicesIcon";
import CardBanner from "../assets/card.png";

const Services = () => {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex {...css.top}>
          <ServicesIcon />
          Хизматларимиз
        </Flex>
        <Heading {...css.title}>
          Биз таклиф қиладиган кенг қамровли хизматлар
        </Heading>
        <SimpleGrid
          gap={"24px"}
          m={"24px auto"}
          maxW={"800px"}
          columns={{ base: 1, md: 2 }}
        >
          <Box {...css.item}>
            <Heading {...css.name}>Веб десигн</Heading>
            <Text {...css.text}>
              Визуал жиҳатдан фойдаланувчига қаратилган веб-сайтларни яратиш.
            </Text>
            <Link href="tel:+998990027391" target="_blank" {...css.button}>
              Биз билан боғланинг
            </Link>
          </Box>
          <Box {...css.item}>
            <Heading {...css.name}>Веб девелопмент</Heading>
            <Text {...css.text}>
              Кучли ва кенгайтириладиган веб-иловалар ва ечимларни яратиш.
            </Text>
            <Link href="tel:+998990027391" target="_blank" {...css.button}>
              Биз билан боғланинг
            </Link>
          </Box>
        </SimpleGrid>
        <SimpleGrid gap={"24px"} m={"24px auto"} columns={{ base: 1, lg: 3 }}>
          <Box {...css.item}>
            <Heading {...css.name}>Логотип дизайни</Heading>
            <Text {...css.text}>
              Эсда қоларли ва таъсирли бренд логотипларини яратиш.
            </Text>
            <Link href="tel:+998990027391" target="_blank" {...css.button}>
              Биз билан боғланинг
            </Link>
          </Box>
          <Box {...css.item}>
            <Heading {...css.name}>Ижтимоий пост дизайни</Heading>
            <Text {...css.text}>
              Самарали ижтимоий медиа кампанияларига визуалларни яратиш.
            </Text>
            <Link href="tel:+998990027391" target="_blank" {...css.button}>
              Биз билан боғланинг
            </Link>
          </Box>
          <Box {...css.item}>
            <Heading {...css.name}>СEО оптималлаштириш</Heading>
            <Text {...css.text}>
              Қидирув тизимининг кўриниши ва рейтингини яхшилаш.
            </Text>
            <Link href="tel:+998990027391" target="_blank" {...css.button}>
              Биз билан боғланинг
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Services;

const css = {
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
  title: {
    fontSize: {
      base: "25px",
      lg: "45px",
    },
    lineHeight: {
      base: "30px",
      lg: "57px",
    },
    fontWeight: "500",
    color: "#191919",
    textAlign: "center",
    width: {
      base: "100%",
      lg: "750px",
    },
    margin: "24px auto",
  },
  item: {
    background: `url(${CardBanner})`,
    padding: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 250px",
    borderRadius: "20px 20px 30px 30px",
  },
  name: {
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "500",
    color: "#191919",
    margin: "8px 0",
  },
  text: {
    color: "#666",
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: "500",
    width: "100%",
  },
  button: {
    borderRadius: "100px",
    background: "linear-gradient(180deg, #9F54F7 0%, #8523F5 100%)",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "24px",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "18px",
  },
};
