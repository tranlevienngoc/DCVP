import { Box, Flex, Image } from '@chakra-ui/react';
import Categories from 'components/Layout/Categories';
import { BoxProduct } from 'components/common/BoxProduct';
import Contact from 'components/common/Contact';
import MoreInfo from 'components/common/MoreInfo';
import PageAndMap from 'components/common/PageAndMap';
import TemplateText from 'components/common/Text/TemplateText';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
export default function Home() {
    const router = useRouter();

    const products2 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Houseware/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Houseware/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Houseware/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Houseware/image4.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Houseware/image5.png',
            },
        ],
        []
    );
    return (
        <Box>
            <Box p='20px 0px' mt='120px' backgroundColor='white'>
                <Flex className='maxW'>
                    <Box w='25%'>
                        <Categories />
                    </Box>
                    <Box w='75%' borderLeft='1px solid rgb(235, 235, 235)' px='20px'>
                        <Flex>
                            <Box w='40%'>
                                <Image w='100%' src='/images/product/Houseware/image2.png' />
                            </Box>
                            <Box w='60%' pl='10px'>
                                <Box fontSize='30px'>Bàn họp nhóm, bàn ăn nhóm</Box>
                                <Flex alignItems='center'>
                                    <TemplateText txt='Giá: ' fontSize={30} />
                                    <TemplateText ml='10px' color='#b00000' txt='1.000.500Đ' fontSize={30} />
                                </Flex>
                                <Box borderTop='1px dotted #ddd' mt='10px' pt='10px'>
                                    Danh mục: Bàn ghế quán cafe cũ tại Đà Nẵng, Nội thất văn phòng, Thanh lý bàn làm việc tại Đà Nẵng
                                </Box>
                                <Box borderTop='1px dotted #ddd' mt='10px' pt='10px'>
                                    Từ khóa: bàn ghế cafe tại Đà Nẵng, bàn ghế thanh lý tại đà nẵng, Mua bán bàn ghế cũ
                                </Box>
                                <Flex borderTop='1px dotted #ddd' mt='10px' pt='10px' alignItems='center'>
                                    <TemplateText fontSize={20} txt='Gọi đặt mua: ' />
                                    <TemplateText fontSize={20} ml='10px' color='#b00000' txt='0976.696.779 - 0935.156.884' />
                                </Flex>
                            </Box>
                        </Flex>
                        <Box borderTop='1px dotted #ddd' mt='10px' pt='10px'>
                            <Flex mt='14px' alignItems='center'>
                                <TemplateText fontSize={20} txt='Kích thước bàn : ' />
                                <TemplateText fontSize={18} ml='10px' fontWeight={400} txt='rộng 1m, dài 3m , cao 75cm' />
                            </Flex>
                            <Flex mt='14px' alignItems='center'>
                                <TemplateText fontSize={20} txt='Mô tả : ' />
                                <TemplateText fontSize={18} ml='10px' fontWeight={400} txt='Chân sắt chắc chắn lót gỗ thông .' />
                            </Flex>
                            <Flex mt='14px' alignItems='center'>
                                <TemplateText fontSize={20} txt='Số lượng kho : ' />
                                <TemplateText fontSize={18} ml='10px' fontWeight={400} txt='1' />
                            </Flex>
                            <Flex mt='14px' alignItems='center'>
                                <TemplateText fontSize={20} txt='Địa chỉ xem hàng : ' />
                                <TemplateText fontSize={18} fontWeight={400} ml='10px' txt='123 Lương Trúc Đàm – Hòa Minh – Liên Chiểu -TP. Đà Nẵng( Gần bến xe )' />
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <Flex className='maxW' mt='50px'>
                    <Box w='25%' />
                    <Box w='75%'>
                        <TemplateText txt='Sản phẩm tương tự' fontSize='30px' mb='5px' />
                        {/* <Flex mt='20px' justifyContent='space-between' gap='20px' flexWrap='wrap'> */}
                        <BoxProduct mt='50px' title='Thanh lý đồ gia dụng' products={products2.slice(0, 4)} />
                        {/* </Flex> */}
                    </Box>
                </Flex>
            </Box>

            <PageAndMap />
            <MoreInfo />
            <Contact />
        </Box>
    );
}
