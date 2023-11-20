import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { useMemo } from 'react';
import { FaCaretRight } from 'react-icons/fa';
export default function HomePage() {
    const products = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Văn Phòng',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Quán Cafe',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nội Thất Gia Đình',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Thiết Bị Nhà Vệ Sinh',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Điện Tử - Điện Lạnh',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nội Thất Bàn Ghế',
            },
        ],
        []
    );
    return (
        <Box p='20px 0px' mt='120px' backgroundColor='rgb(235, 235, 235)'>
            <Flex className='maxW'>
                <Box w='25%'>
                    <Box w='calc(100% - 40px)'>
                        <Flex alignItems='center' bg='#ff9800' p='10px' textAlign='center'>
                            <HamburgerIcon w={4} h={4} color='white' mr='5px' />
                            <TemplateText color='white' txt='Danh mục sản phẩm' textTransform='uppercase' />
                        </Flex>
                        <Box>
                            {products.map((item) => (
                                <Flex key={item.name} p='8px 5px'>
                                    <FaCaretRight width={20} />
                                    <TemplateText txt={item.label} />
                                    <Flex justifyContent='center' alignItems='center' h='15px' w='25px' ml='10px' bg='#b20000'>
                                        <TemplateText as='span' color='white' txt='HOT' fontSize='9px' />
                                    </Flex>
                                </Flex>
                            ))}
                        </Box>
                        <Box bg='#ff9800' p='10px' textAlign='center'>
                            <TemplateText color='white' txt='THU MUA: 0943.683.789' textTransform='uppercase' />
                        </Box>
                    </Box>
                </Box>
                <Box w='75%'>slide</Box>
            </Flex>
        </Box>
    );
}
