import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { useMemo } from 'react';
import { FaCaretRight } from 'react-icons/fa';

export default function Categories() {
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
        <Box w='calc(100% - 40px)'>
            <Flex alignItems='center' bg='bg.800' p='10px' textAlign='center'>
                <HamburgerIcon w={4} h={4} color='white' mr='5px' />
                <TemplateText color='white' txt='Danh mục sản phẩm' textTransform='uppercase' />
            </Flex>
            <Box>
                {products.map((item) => (
                    <Flex
                        bg='white'
                        _hover={{ background: '#f5f5f5' }}
                        key={item.name}
                        p='8px 5px'
                        borderTop='1px solid #ddd'
                        borderLeft='1px solid #ddd'
                        borderRight='1px solid #ddd'
                        cursor='pointer'
                    >
                        <FaCaretRight width={20} />
                        <TemplateText txt={item.label} />
                        <Flex justifyContent='center' alignItems='center' h='15px' w='25px' ml='10px' bg='#b20000'>
                            <TemplateText as='span' color='white' txt='HOT' fontSize='9px' />
                        </Flex>
                    </Flex>
                ))}
            </Box>
            <Box bg='bg.800' p='10px' textAlign='center'>
                <TemplateText color='white' txt='THU MUA: 0976.696.779' textTransform='uppercase' />
            </Box>
        </Box>
    );
}
