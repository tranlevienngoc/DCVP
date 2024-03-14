import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import Categories from 'components/Layout/Categories';
import { BoxProduct } from 'components/common/BoxProduct';
import { BoxTitle } from 'components/common/BoxTitle';
import Contact from 'components/common/Contact';
import MoreInfo from 'components/common/MoreInfo';
import PageAndMap from 'components/common/PageAndMap';
import PageFacebook from 'components/common/PageFacebook';
import { SimpleSlider } from 'components/common/SimpleSlider';
import TemplateText from 'components/common/Text/TemplateText';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCaretRight } from 'react-icons/fa';

export default function Products() {
    const [isHoverButton, setIsHoverButton] = useState('');
    const router = useRouter();
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
                url: 'https://product.hstatic.net/1000314471/product/z5229404164418_c97e21a6d38a21e8840c346aabcd242a__63082e7ba22942fbb9b09abf78373274_large.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://product.hstatic.net/1000314471/product/z5229404164418_c97e21a6d38a21e8840c346aabcd242a__63082e7ba22942fbb9b09abf78373274_large.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://product.hstatic.net/1000314471/product/z5229404164418_c97e21a6d38a21e8840c346aabcd242a__63082e7ba22942fbb9b09abf78373274_large.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://product.hstatic.net/1000314471/product/z5229404164418_c97e21a6d38a21e8840c346aabcd242a__63082e7ba22942fbb9b09abf78373274_large.jpg',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: 'https://product.hstatic.net/1000314471/product/z5229404164418_c97e21a6d38a21e8840c346aabcd242a__63082e7ba22942fbb9b09abf78373274_large.jpg',
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

    const products3 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/cafe/image1.png',
            },
        ],
        []
    );

    const products4 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Furniture/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Furniture/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Furniture/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Furniture/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Furniture/image1.png',
            },
        ],
        []
    );

    const products5 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Fridge/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Fridge/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Fridge/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Fridge/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Fridge/image1.png',
            },
        ],
        []
    );
    const products6 = useMemo(
        () => [
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Eatery/image.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Eatery/image1.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Eatery/image2.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Eatery/image3.png',
            },
            {
                name: 'restaurant',
                label: 'Thanh Lý Nhà Hàng - Quán Ăn',
                price: 2700000,
                url: '/images/product/Eatery/image1.png',
            },
        ],
        []
    );
    const evaluationCriterias = useMemo(
        () => [
            {
                label: 'SẢN PHẨM CHẤT LƯỢNG',
            },
            {
                label: 'GIAO HÀNG NHANH',
            },
            {
                label: 'DỊCH VỤ HỖ TRỢ 24/7',
            },
            {
                label: 'MẪU MÃ ĐA DẠNG',
            },
        ],
        []
    );
    return (
        <Box>
            <Box p='20px 0px' mt='120px' backgroundColor='rgb(235, 235, 235)'>
                <Flex className='maxW'>
                    <Box w='25%'>
                        <Categories />
                    </Box>
                    <Box w='75%'>
                        <SimpleSlider />
                    </Box>
                </Flex>
            </Box>
            <Flex className='maxW' my='50px' gap='50px' justifyContent='space-around' alignItems='center'>
                {evaluationCriterias.map((item) => (
                    <Flex alignItems='center'>
                        {/* <img
                            width='25'
                            height='25'
                            src='https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02.png'
                            data-src='https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02.png'
                            className='attachment-medium size-medium lazy-load-active'
                            alt=''
                            decoding='async'
                            srcSet='https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02.png 229w, https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02-150x150.png 150w, https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02-100x100.png 100w'
                            data-srcset='https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02.png 229w, https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02-150x150.png 150w, https://docuacb.com/wp-content/uploads/2023/03/icon_edit_02-100x100.png 100w'
                            sizes='(max-width: 229px) 100vw, 229px'
                        /> */}
                        <Button
                            mb='8px'
                            // border={isHoverButton === 'connect' ? 'none' : '1px solid black'}
                            // className={isHoverButton === 'connect' ? `connect-button-light` : ''}
                            // onMouseEnter={() => setIsHoverButton('connect')}
                            // onMouseLeave={() => setIsHoverButton('')}
                            borderRadius='8px'
                            background='none'
                            // w="60px"
                            // h="40px"
                        >
                            <AiOutlineCheckCircle size={30} />
                        </Button>
                        <TemplateText txt={item.label} />
                    </Flex>
                ))}
            </Flex>
            <Box backgroundColor='white' className='maxW' gap='10px'>
                {/* <BoxProduct isMore={false} title='Thanh lý quán cafe' products={products3.slice(0, 4)} /> */}
                <BoxTitle title='Thanh lí quán cafe' isMore={false} />
                <Flex mt='20px' flexWrap='wrap' gap='50px'>
                    {products3.map((item) => (
                        <Box borderRadius='5px' textAlign='center' w={{ base: '100%', md: '200px' }} className='box-product' onClick={() => router.push('/product/vchvds')}>
                            <Image w='100%' h='200px' src={item.url} borderTopRadius='5px' />
                            <TemplateText txt={item.label} mt='10px' />
                            <Flex justifyContent='center' py='20px'>
                                <TemplateText txt='Giá bán: ' mr='5px' />
                                <TemplateText color='#b20000' txt={`${item.price.toLocaleString()}`} mr='5px' />
                                <TemplateText color='#b20000' txt={`VNĐ`} />
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Box>
            <PageAndMap />
            <MoreInfo />
            <Contact />
        </Box>
    );
}
