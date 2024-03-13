import { Box } from '@chakra-ui/react';

export default function Contact() {
    return (
        <Box className='float-contact'>
            <button className='chat-zalo'>
                <a href='http://zalo.me/0987914489'>Chat Zalo</a>
            </button>

            <button className='chat-face'>
                <a href='https://facebook.com/docuacb'>Chat Facebook</a>
            </button>

            <button className='hotline'>
                <a href='tel:0976.696.779'>Hotline: 0935.156.884</a>
            </button>
        </Box>
    );
}
