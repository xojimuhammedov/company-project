import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import FaqsIcon from "../assets/FaqsIcon";

const Faqs = () => {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex {...css.top}>
          <FaqsIcon />
          ФАҚ
        </Flex>
        <Heading {...css.title}>Тез-тез сўраладиган саволлар</Heading>
        <Accordion mt={"36px"} defaultIndex={[0]} allowMultiple>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Сиз қандай хизматларни таклиф қиласиз?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Биз веб-дизайн, веб-ишлаб чиқиш, логотип дизайни, СEО
              оптималлаштириш ва ижтимоий медиа контентини яратишга
              ихтисослашганмиз.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Сизнинг хизматларингиз қанча туради?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Нархлар лойиҳа ҳажмига қараб ўзгаради. Сизнинг махсус
              эҳтиёжларингизга мослаштирилган шахсий таклиф учун биз билан
              боғланинг.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Лойиҳа тугагандан сўнг сиз доимий ёрдам кўрсатасизми?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ҳа, биз веб-сайтингиз ишга туширилгандан кейин ҳам оптимал
              ишлашини таъминлаш учун техник хизмат кўрсатиш ва қўллаб-қувватлаш
              пакетларини таклиф қиламиз.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Мавжуд веб-сайтни қайта лойиҳалаштира оласизми?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Мутлақо! Биз сизнинг жорий веб-сайтингизни функционаллиги, дизайни
              ва фойдаланувчи тажрибасини яхшилаш учун янгилашимиз мумкин.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Веб-сайтни тўлдириш учун қанча вақт кетади?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Вақт жадвали лойиҳанинг мураккаблигига боғлиқ. Биз келишилган
              муддатларда юқори сифатли натижаларга эришиш учун самарали
              ишлаймиз.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Хостинг ва доменни рўйхатдан ўтказиш хизматларини таклиф
                қиласизми?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ҳа, биз кенг қамровли хостинг эчимларини тақдим этамиз ва онлайн
              мавжудлигингизни созлашни соддалаштириш учун доменни рўйхатдан
              ўтказишда ёрдам берамиз.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Веб-сайт учун контент яратишда ёрдам бера оласизми?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ҳа, биз иштирок этишни кучайтириш учун бренд овозингиз ва мақсадли
              аудиториянгизга мослаштирилган контент яратиш хизматларини таклиф
              қиламиз.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faqs;

const css = {
  top: {
    borderRadius: "100px",
    border: "1px solid #EDEFF3",
    color: "#4D4D4D",
    width: "98px",
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
    width: "550px",
    margin: "24px auto",
  },
  items: {
    border: "1px solid #E1E4EB",
    borderRadius: "14px",
    background: "#F6F7F9",
    margin: "20px auto",
    width: "630px",
  },
  name: {
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "500",
    color: "#191919",
  },
};
