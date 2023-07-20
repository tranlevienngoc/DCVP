import { Box, Flex, Image } from "@chakra-ui/react";

import React, { useMemo } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LIST_SLIDER } from "data/slide";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box mt="20px" w="100%" pb="100px">
      <Slider {...settings}>
        {LIST_SLIDER.map((item) => (
          <Box
            border="3px solid #1E1E1E"
            key={item.label}
            cursor="pointer"
            mr="16px"
            w="100%"
            h="100%"
            boxShadow="8px 9px #bfbfbf"
            borderRadius="29px"
          >
            <Image
              src={item.image}
              maxW="100%"
              minH="280px"
              maxH="370px"
              borderRadius="29px"
              margin="0 auto"
            />
          </Box>
        ))}
      </Slider>
      <Flex justifyContent="center">
        <Box
          h="1px"
          w="700px"
          bg="text.100"
          mt={{ base: "100px", lg: "150px" }}
        />
      </Flex>
    </Box>
  );
}
