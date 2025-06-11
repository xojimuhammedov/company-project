import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import WhyUsIcon from "../assets/WhyUsIcon";

const WhyUs = () => {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex {...css.top}>
          <WhyUsIcon />
          Нега биз
        </Flex>
        <Heading {...css.title}>Нега бизни танлашингиз керак</Heading>
        <SimpleGrid mt={"48px"} gap={"24px"} columns={2}>
          <Flex {...css.item}>
            <Heading {...css.name}>Экспертлар жамоаси</Heading>
            <Text {...css.text}>
              Замонавий веб-дизайн + ишлаб чиқиш бўйича тажрибага эга бўлган
              содиқ мутахассислар.
            </Text>
          </Flex>
          <Flex {...css.item}>
            <Heading {...css.name}>Ўз вақтида етказиб бериш</Heading>
            <Text {...css.text}>
              Сифат ёки аниқликка путур етказмасдан, белгиланган муддатда доимий
              равишда бажариш.
            </Text>
          </Flex>
          <Flex {...css.item}>
            <Heading {...css.name}>Мижозларга ёндашув</Heading>
            <Text {...css.text}>
              Сизнинг бизнесингизнинг ноёб эҳтиёжларини қондириш учун
              мослаштирилган ечимлар.
            </Text>
          </Flex>
          <Flex {...css.item}>
            <Heading {...css.name}>Тасдиқланган тажриба</Heading>
            <Text {...css.text}>
              Турли соҳаларда самарали веб- ечимларни муваффақиятли етказиб
              бериш йиллари.
            </Text>
          </Flex>
          <Flex {...css.item}>
            <Heading {...css.name}>Шаффоф алоқа</Heading>
            <Text {...css.text}>
              Лойиҳангизнинг ҳар бир босқичида аниқ, очиқ алоқа линиялари.
            </Text>
          </Flex>
          <Flex {...css.item}>
            <Heading {...css.name}>Жавобгар ечимлар</Heading>
            <Text {...css.text}>
              Оптимал фойдаланувчи тажрибаси учун барча қурилмаларда узлуксиз
              ишлашни таъминлаш.
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhyUs;

const css = {
  top: {
    borderRadius: "100px",
    border: "1px solid #EDEFF3",
    color: "#4D4D4D",
    width: "124px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gap: "8px",
    padding: "4px 8px",
  },
  title: {
    fontSize: "45px",
    lineHeight: "57px",
    fontWeight: "500",
    color: "#191919",
    textAlign: "center",
  },
  item: {
    borderRadius: "20px",
    background: "#F8F9FA",
    flexDirection: "column",
    padding: "30px",
    gap: "12px",
  },
  name: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "500",
    color: "#191919",
  },
  text: {
    color: "#666",
    fontSize: "17px",
    lineHeight: "24px",
    fontWeight: "500",
  },
};
