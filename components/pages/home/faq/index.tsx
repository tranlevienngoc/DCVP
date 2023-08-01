import { Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { LISTQUESTION } from "data/faq";
import React from "react";
import Questions from "./questions";

export default function FAQ() {
  return (
    <Box
      className="maxW"
      mt={{ base: "40px", lg: "100px" }}
      pb="40px"
      mb={{ base: "40px", lg: "unset" }}
      p={{ base: "0 16px", lg: "unset" }}
    >
      <TemplateText
        txt="FAQ"
        fontSize="35px"
        fontWeight={700}
        textAlign="center"
      />
      <TemplateText
        txt="Common answers to questions about Popoy Meme ($POPOY) can be found below."
        fontSize="24px"
        textAlign="center"
      />
      <Box mt="20px">
        {LISTQUESTION.map((item, index) => (
          <Questions
            key={item.question}
            length={LISTQUESTION.length}
            index={index}
            item={item}
          />
        ))}
      </Box>
    </Box>
  );
}
