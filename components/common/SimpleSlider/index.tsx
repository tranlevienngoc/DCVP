import { Box, Flex, Image } from '@chakra-ui/react';
import { useMemo } from 'react';
import Slider from 'react-slick';
export const SimpleSlider = () => {
    const images = useMemo(
        () => [
            { name: '1', url: 'https://docuthientien.com/wp-content/uploads/2023/03/banner-do-cu-thien-tien-da-nang-2023-1.jpg' },
            { name: '2', url: 'https://docuthientien.com/wp-content/uploads/2023/03/banner-do-cu-thien-tien-da-nang-2023-04.jpg' },
            { name: '3', url: 'https://docuthientien.com/wp-content/uploads/2023/03/banner-do-cu-thien-tien-da-nang-2023-01.jpg' },
            { name: '4', url: 'https://docuacb.com/wp-content/uploads/2023/03/z4187187592089_b1c4ddb341444be2f710dc05946330c8.jpg' },
            { name: '4', url: 'https://docuacb.com/wp-content/uploads/2023/03/z4187189663218_0f70d1a8bfdd0dcd80eda73b3f565747.jpg' },
            { name: '4', url: 'https://docuacb.com/wp-content/uploads/2023/03/z4187189663218_0f70d1a8bfdd0dcd80eda73b3f565747.jpg' },
        ],
        []
    );
    return (
        <Box>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                {images.map((item) => (
                    <Flex justifyContent='center' alignItems='center'>
                        <Image h='350px' w='100%' src={item.url} />
                    </Flex>
                ))}
            </Slider>
        </Box>
    );
};
