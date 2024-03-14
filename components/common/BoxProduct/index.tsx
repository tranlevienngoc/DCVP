import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';
import TemplateText from '../Text/TemplateText';
import { BoxTitle } from '../BoxTitle';
import { useRouter } from 'next/router';
interface Props extends BoxProps {
    products: any[];
    title: string;
    isMore?: boolean;
}
export const BoxProduct = ({ products, title, isMore, ...props }: Props) => {
    const router = useRouter();
    return (
        <Box {...props}>
            <BoxTitle title={title} isMore={isMore} />
            <Flex justifyContent='space-between' mt='20px'>
                {products.map((item) => (
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
    );
};
