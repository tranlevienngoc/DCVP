import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { FaAlignJustify, FaFacebookSquare } from 'react-icons/fa';
export default function PageFacebook() {
    return (
        <>
            <Flex bg='bg.800' gap='10px' p='10px' mb='20px'>
                <FaFacebookSquare />
                <TemplateText color='white' txt='FANPAGE FACEBOOK' textTransform='uppercase' />
            </Flex>
            <Box w='100%' className='wrap-page'>
                <iframe
                    // className='fb-page fb_iframe_widget'
                    src='https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb313e2744b530e62%26domain%3Dchodocudanang.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fchodocudanang.com%252Ff5a2463321b841d13%26relation%3Dparent.parent&amp;container_width=263&amp;height=350&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fdocudanang.thientien%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline'
                    width='100%'
                    height='350px'
                    allowFullScreen
                    allow='encrypted-media'
                />
            </Box>
        </>
    );
}
