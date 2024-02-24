import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { BoxProduct } from 'components/common/BoxProduct';
import { BoxTitle } from 'components/common/BoxTitle';
import { SimpleSlider } from 'components/common/SimpleSlider';
import TemplateText from 'components/common/Text/TemplateText';
import { useMemo } from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaAlignJustify } from 'react-icons/fa';
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
                        <Box w='calc(100% - 40px)'>
                            <Flex alignItems='center' bg='bg.800' p='10px' textAlign='center'>
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
                            <Box bg='bg.800' p='10px' textAlign='center' mt='20px'>
                                <TemplateText color='white' txt='THU MUA: 0943.683.789' textTransform='uppercase' />
                            </Box>
                        </Box>
                    </Box>
                    <Box w='75%'>
                        <SimpleSlider />
                    </Box>
                </Flex>
            </Box>
            <Flex className='maxW' my='50px' gap='50px' justifyContent='space-around'>
                {evaluationCriterias.map((item) => (
                    <Flex alignItems='center'>
                        <img
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
                        />
                        <TemplateText txt={item.label} ml='10px' />
                    </Flex>
                ))}
            </Flex>
            <Flex backgroundColor='white' className='maxW' gap='20px'>
                <Box w='25%'>
                    <Flex bg='bg.800' gap='10px' p='10px' mb='20px'>
                        <FaFacebookSquare />
                        <TemplateText color='white' txt='FANPAGE FACEBOOK' textTransform='uppercase' />
                    </Flex>
                    <Box w='100%' className='wrap-page' bg='red'>
                        <iframe
                            className='fb-page fb_iframe_widget'
                            src='https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb313e2744b530e62%26domain%3Dchodocudanang.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fchodocudanang.com%252Ff5a2463321b841d13%26relation%3Dparent.parent&amp;container_width=263&amp;height=350&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fdocudanang.thientien%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline'
                            width='100%'
                            height='350px'
                            allowFullScreen
                            allow='encrypted-media'
                        />
                    </Box>
                </Box>
                <Box w='75%'>
                    <BoxProduct title='Thanh lý quán cafe' products={products1.slice(0, 4)} />
                    <BoxProduct mt='50px' title='Thanh lý đồ gia dụng' products={products2.slice(0, 4)} />
                    <BoxProduct mt='50px' title='Thanh lý nội thất bàn ghế' products={products1.slice(0, 4)} />
                    <BoxProduct mt='50px' title='Thanh lý nội thất bàn ghế' products={products1.slice(0, 4)} />
                    <BoxProduct mt='50px' title='Thanh lý nội thất bàn ghế' products={products1.slice(0, 4)} />
                </Box>
            </Flex>
            <Flex className='maxW' gap='20px' mt='50px'>
                <Box w='25%'>
                    <Flex bg='bg.800' gap='10px' p='10px' mb='20px'>
                        <FaFacebookSquare />
                        <TemplateText color='white' txt='FANPAGE FACEBOOK' textTransform='uppercase' />
                    </Flex>
                    <Box w='100%' className='wrap-page' bg='red'>
                        <iframe
                            // className='fb-page fb_iframe_widget'
                            src='https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb313e2744b530e62%26domain%3Dchodocudanang.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fchodocudanang.com%252Ff5a2463321b841d13%26relation%3Dparent.parent&amp;container_width=263&amp;height=350&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fdocudanang.thientien%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline'
                            width='100%'
                            height='350px'
                            allowFullScreen
                            allow='encrypted-media'
                        />
                    </Box>
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
                            “Do số lượng và chủng loại các mặt hàng thanh lý của Thiên Tiến quá nhiều, hình ảnh trên website không thể update hết. Quý khách có thể trực tiếp qua
                            kho để xem hàng, hoặc liên hệ 0905.727.082 hoặc fanpage Đồ Cũ THIÊN TIẾN”
                        </div>
                    </section>
                </Box>
            </Flex>
            <Box className='maxW' my="30px" color='black'>
                <Box className='container section-title-container' marginBottom='10px'>
                    <Heading className='section-title section-title-normal' fontSize='1.25em'>
                        <b></b>
                        <span className='section-title-main'>Đồ cũ Đà Nẵng – Thanh Lý – Thu Mua Đồ cũ tại Đà Nẵng Hunter</span>
                        <b></b>
                    </Heading>
                    <Text>Chúng tôi là đơn vị tiên phong về đồ cũ Đà Nẵng, dịch vụ thu mua đồ cũ các ngành nghề, cửa hàng, shop, thiết bị…</Text>
                    <Text>
                        Nhiều năm gần đây nhu cầu mua đồ cũ của quý khách hàng tăng cao, các hội chợ đồ cũ online, được giao dịch và trao đổi đồ cũ ở Đà Nẵng nhiều, chúng tôi mở
                        dịch vụ mua bán đồ cũ nhằm cung cấp theo nhu cầu cho tất cả quý khách hàng có thể lựa chọn đa dạng sản phẩm
                    </Text>
                    <Text>Sản phẩm đồ cũ được chỗ chúng tôi thu mua giá cao cho quý khách hàng.</Text>
                    <Text fontWeight='bold'>Đồ cũ hunter Đà Nẵng</Text>
                    <Text>
                        <span style={{ backgroundColor: '#ffffff', color: '#ed1c24', fontSize: '110%' }}>Thông báo :</span>
                        <strong> Mua bán thanh lý Đồ cũ Đà Nẵng</strong>&nbsp;HUNTER kính chào quý khách, vì số lượng đồ cũ mua vào bán ra thay đổi liên tục, số lượng hàng hoá trên
                        website chúng tôi còn thiết sót và chưa cập nhập xong, để khỏi bỏ lở những món đồ cũ phù hợp với mọi người vui lòng liên hệ theo thông tin sau hoặc chat qua
                        Fanpage facebook chúng tôi ở dưới góc phải website&nbsp;
                        <Link href='https://docuhunter.com/' color='#ed1c24' textDecoration='underline'>
                            https://docuhunter.com
                        </Link>
                        &nbsp; Cảm ơn
                    </Text>
                    <Text>
                        Địa chỉ Kho&nbsp;
                        <Link href='https://docuhunter.com/' fontWeight='bold'>
                            đồ cũ đà nẵng
                        </Link>
                        : Địa chỉ : 123 Lương Trúc Đàm – Phường Hòa Minh – Quận Liên Chiểu
                        <br />
                        Hotline :<Link>0705170375</Link>
                    </Text>
                </Box>
            </Box>
            <div className='float-contact'>
                <button className='chat-zalo'>
                    <a href='http://zalo.me/0987914489'>Chat Zalo</a>
                </button>

                <button className='chat-face'>
                    <a href='https://facebook.com/docuacb'>Chat Facebook</a>
                </button>

                <button className='hotline'>
                    <a href='tel:0943.683.789'>Hotline: 0943.683.789</a>
                </button>
            </div>
        </Box>
    );
}
