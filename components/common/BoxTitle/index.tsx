import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import TemplateText from '../Text/TemplateText';
import { useRouter } from 'next/router';
interface Props {
    title: string;
    isMore?: boolean;
}
export const BoxTitle = ({ title, isMore = true }: Props) => {
    const router = useRouter();
    return (
        <Box w='100%'>
            <Flex borderBottom='3px solid rgb(235, 235, 235)' alignItems='center' bg='bg.800' p='10px' textAlign='center'>
                <HamburgerIcon w={4} h={4} color='white' mr='5px' />
                <TemplateText color='white' txt={title} textTransform='uppercase' />
                {isMore && <TemplateText ml='auto' color='white' txt='Xem thêm >>' textTransform='uppercase' cursor='pointer' onClick={() => router.push('/products/cáhvc')} />}
            </Flex>
        </Box>
    );
};
