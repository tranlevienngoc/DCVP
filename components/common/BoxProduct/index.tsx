import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';
import TemplateText from '../Text/TemplateText';
import { BoxTitle } from '../BoxTitle';
interface Props extends BoxProps {
    products: any[];
    title: string;
}
export const BoxProduct = ({ products, title, ...props }: Props) => {
    return (
        <Box {...props}>
            <BoxTitle title={title} />
            <Flex gap='20px' mt='20px'>
                {products.map((item) => (
                    <Box textAlign='center'>
                        <Image src={item.url} />
                        <TemplateText txt={item.label} mt='10px' />
                        <Flex justifyContent='center'>
                            <TemplateText txt='Giá bán: ' mr='5px' />
                            <TemplateText color='#b20000' txt={`${item.price.toLocaleString()}`} mr='5px' />
                            <TemplateText color='#b20000' txt={`VNĐ`} />
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};
