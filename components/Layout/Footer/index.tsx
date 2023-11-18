import { Box, Flex, Link, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { LIST_SOCIAL_NETWORK } from "data/banner";

import React from "react";

export default function Footer() {
  return (
      <Box bg='text.100' p='30px 25px'>
          <Box className='maxW'>
              <Flex direction='column' alignItems='center' gap='10px' display={{ base: 'flex', xl: 'none' }}>
                  <Flex gap='10px' alignItems='center' justifyContent='center' mb='7px'>
                      {LIST_SOCIAL_NETWORK.map((item) => (
                          <Link key={item.name} href={item.href} target='_blank'>
                              <Image key={item.name} src={item.icon} width='25px' border='1px solid #585858' borderRadius='50px' height='25px' alt={item.icon} />
                          </Link>
                      ))}
                  </Flex>
              </Flex>
              <Flex direction={{ base: 'column', xl: 'row' }} mt='20px' alignItems='center' justifyContent='space-between'>
                  <TemplateText color='text.500' txt='Copyright © 2023 Popoy. All Rights Reserved.' textAlign={{ base: 'center', xl: 'start' }} />
              </Flex>
              <TemplateText
                  mt='20px'
                  color='text.500'
                  fontSize='12px'
                  textAlign={{ base: 'center', xl: 'start' }}
                  txt='Với kinh nghiệm hơn 8 năm về lĩnh vực đồ cũ tại thành phố Đà Nẵng, chúng tôi mang đến cho khách hàng những sản phẩm tốt nhất và chất lượng nhất với nhiều mẫu mã thuộc nhiều nghành nghề khác nhau. Ngoài ra cửa hàng còn thu mua đồ cũ qua sử dụng với gia cao của quán ăn, nhà hàng, quán cafe, quán nhậu, đồ nội thất gia đình với giá cạnh tranh.

Bạn'
              />
              <TemplateText
                  mt='7px'
                  color='text.500'
                  fontSize='12px'
                  textAlign={{ base: 'center', xl: 'start' }}
                  txt='Bạn có thể tìm đến sản phẩm của chúng thông qua website docuthientien.com hoặc đến trực tiếp kho đều được, mọi thông tin của bạn sẽ được tiếp nhận và phản hồi sớm nhất.'
              />
          </Box>
      </Box>
  );
}
