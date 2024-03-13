import { Box, Heading, Link, Text } from '@chakra-ui/react';
export default function MoreInfo() {
    return (
        <Box className='maxW' my='30px' color='black'>
            <Box className='container section-title-container' marginBottom='10px'>
                <Heading className='section-title section-title-normal' fontSize='1.25em'>
                    <b></b>
                    <span className='section-title-main'>Đồ cũ Đà Nẵng – Thanh Lý – Thu Mua đồ cũ tại đồ cũ Vũ Phan</span>
                    <b></b>
                </Heading>
                <Text>Chúng tôi là đơn vị tiên phong về đồ cũ Đà Nẵng, dịch vụ thu mua đồ cũ các ngành nghề, cửa hàng, shop, thiết bị…</Text>
                <Text>
                    Nhiều năm gần đây nhu cầu mua đồ cũ của quý khách hàng tăng cao, các hội chợ đồ cũ online, được giao dịch và trao đổi đồ cũ ở Đà Nẵng nhiều, chúng tôi mở dịch
                    vụ mua bán đồ cũ nhằm cung cấp theo nhu cầu cho tất cả quý khách hàng có thể lựa chọn đa dạng sản phẩm
                </Text>
                <Text>Sản phẩm đồ cũ được chỗ chúng tôi thu mua giá cao cho quý khách hàng.</Text>
                <Text>
                    <span style={{ backgroundColor: '#ffffff', color: '#ed1c24', fontSize: '110%' }}>Thông báo :</span>
                    <strong> Mua bán thanh lý Đồ cũ Đà Nẵng</strong>&nbsp;đồ cũ Vũ Phan kính chào quý khách, vì số lượng đồ cũ mua vào bán ra thay đổi liên tục, số lượng hàng hoá
                    trên website chúng tôi còn thiết sót và chưa cập nhập xong, để khỏi bỏ lở những món đồ cũ phù hợp với mọi người vui lòng liên hệ theo thông tin sau hoặc chat
                    qua Fanpage facebook chúng tôi ở dưới góc phải website&nbsp;
                    <Link href='https://docuhunter.com/' color='#ed1c24' textDecoration='underline'>
                        https://docuhunter.com
                    </Link>
                    &nbsp; Cảm ơn
                </Text>
                <Text>
                    Địa chỉ Kho&nbsp;
                    <Link href='https://docuhunter.com/' fontWeight='bold'>
                        đồ cũ Vũ Phan
                    </Link>
                    : Địa chỉ : 123 Lương Trúc Đàm – Phường Hòa Minh – Quận Liên Chiểu
                    <br />
                    Hotline :<Link> 0935.156.884</Link>
                </Text>
            </Box>
        </Box>
    );
}
