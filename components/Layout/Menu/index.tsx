import { Box, Flex } from '@chakra-ui/react';

export default function Menu() {
    const menu = [
        {
            name: 'home',
            label: 'Trang chủ',
        },
        {
            name: 'introduction',
            label: 'Giới thiệu',
        },
        {
            name: 'restaurant',
            label: 'Nhà hàng quán ăn',
        },
        {
            name: 'cafe',
            label: 'Quán cafe',
        },
        {
            name: 'family',
            label: 'Nội thất gia đình',
        },
        {
            name: 'device',
            label: 'Thiết bị vệ sinh',
        },
    ];
    return (
        <Box bg='bg.800' p='8px 0px'>
            <Flex className='maxW' gap="20px">
                {menu.map((item) => (
                    <Box key={item.name} color='white'>
                        {item.label}
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
