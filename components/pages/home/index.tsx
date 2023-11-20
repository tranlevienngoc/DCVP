import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Image } from '@chakra-ui/react';
import { BoxProduct } from 'components/common/BoxProduct';
import { BoxTitle } from 'components/common/BoxTitle';
import { SimpleSlider } from 'components/common/SimpleSlider';
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

    const products1 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
        ],
        []
    );

    const products2 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4873343093304_ff1a3e33523ef51e926d17129ad0f3ef-247x296.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4873343093304_ff1a3e33523ef51e926d17129ad0f3ef-247x296.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4873343093304_ff1a3e33523ef51e926d17129ad0f3ef-247x296.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4873343093304_ff1a3e33523ef51e926d17129ad0f3ef-247x296.jpg',
            },
        ],
        []
    );

    const products3 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://docuacb.com/wp-content/uploads/2023/11/z4895009181187_781387107d405370a44e5000d18714f5-2048x2048.jpg',
            },
        ],
        []
    );
    return (
        <Box>
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
                            <Box bg='#ff9800' p='10px' textAlign='center' mt='20px'>
                                <TemplateText color='white' txt='THU MUA: 0943.683.789' textTransform='uppercase' />
                            </Box>
                        </Box>
                    </Box>
                    <Box w='75%'>
                        <SimpleSlider />
                    </Box>
                </Flex>
            </Box>
            <Box p='20px 0px' backgroundColor='white'>
                <Box className='maxW'>
                    <BoxProduct mt='20px' title='Thanh lý quán cafe' products={products1} />
                    <BoxProduct mt='50px' title='Thanh lý quán cafe' products={products2} />
                    <BoxProduct mt='50px' title='Thanh lý quán cafe' products={products1} />
                </Box>
            </Box>
        </Box>
    );
}
