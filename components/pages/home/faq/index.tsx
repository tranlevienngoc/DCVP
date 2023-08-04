import { Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { LISTQUESTION } from "data/faq";
import React from "react";
import Questions from "./questions";

export default function FAQ() {
  return (
    <Box
      className="maxW"
      pb="40px"
      mb="40px"
      p={{ base: "0 16px", "2xl": "unset" }}
    >
      <TemplateText
        txt="FAQ"
        fontSize="35px"
        fontWeight={700}
        textAlign="center"
        fontFamily="Bangers"
        letterSpacing="3px"
        data-aos="fade-up"
      />
      <TemplateText
        txt="Common answers to questions about Popoy Meme ($POPOY) can be found below."
        data-aos="fade-up"
        fontSize="24px"
        textAlign="center"
      />
      <Box
        mt="20px"
        border="1px solid #000"
        boxShadow="4px 4px 0 #262626"
        p="16px"
        borderRadius="29px"
        data-aos="fade-up"
      >
        {LISTQUESTION.map((item, index) => (
          <Questions
            key={item.question}
            length={LISTQUESTION.length}
            index={index}
            item={item}
            dataAos="fade-up"
          />
        ))}
      </Box>
    </Box>
  );
}
