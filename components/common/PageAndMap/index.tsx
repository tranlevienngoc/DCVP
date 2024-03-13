import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { FaAlignJustify, FaFacebookSquare } from 'react-icons/fa';
import PageFacebook from '../PageFacebook';
export default function PageAndMap() {
    return (
        <Flex className='maxW' gap='20px' mt='50px'>
            <Box w='25%'>
                <PageFacebook />
            </Box>
            <Box w='75%'>
                <Flex gap='10px' bg='bg.800' p='10px' mb='20px'>
                    <FaAlignJustify />
                    <TemplateText color='white' txt='10 NGUYỄN KHOA CHIÊM – CẨM LỆ – ĐÀ NẴNG' textTransform='uppercase' />
                </Flex>
                <section>
                    <div className='map'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.8507873707654!2d108.19418231425489!3d16.021281144978083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219875492bde5%3A0x63a0f72c5a008e92!2zTXVhIGLDoW4gdGhhbmggbMO9IMSR4buTIGPFqSBUaGnDqm4gVGnhur9u!5e0!3m2!1svi!2s!4v1533571757622'
                            width='100%'
                            height='350'
                        ></iframe>
                    </div>
                </section>
                <section>
                    <div className='notice'>
                        “Do số lượng và chủng loại các mặt hàng thanh lý của Thiên Tiến quá nhiều, hình ảnh trên website không thể update hết. Quý khách có thể trực tiếp qua kho để
                        xem hàng, hoặc liên hệ 0905.727.082 hoặc fanpage Đồ Cũ THIÊN TIẾN”
                    </div>
                </section>
            </Box>
        </Flex>
    );
}
