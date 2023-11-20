import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Link, Stack, useDisclosure } from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import DrawerItem from 'components/common/DrawerItem';
import NAV_ITEMS from 'config/header';
import { LIST_SOCIAL_NETWORK } from 'data/banner';

import Menu from './Menu';
import MobileMenu from './MobileMenu';
import SearchInput from 'components/common/input/SearchInput';
import TemplateText from 'components/common/Text/TemplateText';

interface props {
    onCloseMenu: () => void;
}

const Header = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();

    const DesktopNav = () => {
        return (
            <Stack direction='row' spacing={4} className='stack-header'>
                {NAV_ITEMS.map((navItem, k) => {
                    return (
                        <Box key={Number(k)}>
                            <Menu navItem={navItem} />
                        </Box>
                    );
                })}
            </Stack>
        );
    };
    const MobileNav = ({ onCloseMenu }: props) => {
        return (
            <Box>
                <Stack p='4px 24px 0 24px' display={{ xl: 'none' }} bg='bg.100'>
                    {NAV_ITEMS.map((navItem, k) => (
                        <MobileMenu onCloseMenu={onCloseMenu} key={k} navItem={navItem} />
                    ))}
                </Stack>

                <Link
                    href='https://app.uniswap.org/#/swap'
                    target='_blank'
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <ButtonBase
                        fsText='14px'
                        fwText={700}
                        content='Login'
                        m='14px 0 0 24px'
                        colorText='text.500'
                        mtText='3px'
                        _hover={{
                            background: '#64a151',
                        }}
                        bg='text.100'
                        borderRadius='50px'
                    />
                </Link>

                <Flex alignItems='center' gap='10px' p='14px 0 10px 24px'>
                    {LIST_SOCIAL_NETWORK.map((item) => (
                        <Link key={item.name} href={item.href} target='_blank'>
                            <Image src={item.icon} w='30px' h='30px' alt='social' />
                        </Link>
                    ))}
                </Flex>
            </Box>
        );
    };

    return (
        <Box className='maxW'>
            <Flex borderStyle='solid' justifyContent='space-between' alignItems='center' p={{ base: '10px', xl: '5px 0px' }}>
                <Flex alignItems='center'>
                    <Link href='/' mr='5px'>
                        <Image src='/Logo1.jpg' w={{ base: '100px', md: '70px' }} alt='logo' h='70px' />
                    </Link>
                    <Box mr='20px'>
                        <TemplateText txt='Đồ Cũ Vũ Phan' fontSize={25} />
                    </Box>
                    <SearchInput
                        h='40px'
                        // paddingRight='90px'
                        placeholder='nhập sản phẩm bạn cần tìm'
                        border='1px #7C7C7E solid'
                        value=''
                        isVisible
                        isFocus={true}
                        w='400px'
                        borderRadius='400px'
                    />

                    <Flex alignItems='center' gap='10px' ml='30px'>
                        <Box>
                            <Image src='https://docuacb.com/wp-content/uploads/2019/04/icon-hotline-2.jpg' w='40px' alt='logo' h='40px' />
                        </Box>
                        <Box>
                            <TemplateText txt='Hotline đặt hàng' />
                            <Box>
                                <TemplateText color='#b00000' txt='0943.683.789 - 0987.914.489' />
                            </Box>
                        </Box>
                    </Flex>

                    <Flex alignItems='center' gap='10px' ml='30px'>
                        <Box>
                            <TemplateText txt='Hotline mua hàng' />
                            <Box>
                                <TemplateText color='#b00000' txt='0943.683.789' />
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
                <Flex display={{ base: 'none', xl: 'flex' }} alignItems='center'>
                    {/* <DesktopNav /> */}
                </Flex>

                {/* <Flex gap='20px' mr={{ base: '10px', xl: 'unset' }} alignItems='center' justifyContent='end'>
                    <Link
                        href='https://app.uniswap.org/#/swap'
                        target='_blank'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        <ButtonBase
                            colorText='text.500'
                            fsText='14px'
                            fwText={700}
                            content='Login'
                            _hover={{
                                background: '#64a151',
                            }}
                            display={{ base: 'none', xl: 'block' }}
                            bg='text.100'
                            borderRadius='50px'
                            mtText='3px'
                        />
                    </Link>
                </Flex> */}

                <Box
                    w='40px'
                    h='46px'
                    bg='bg.100'
                    cursor='pointer'
                    borderRadius='4px'
                    alignItems='center'
                    justifyContent='center'
                    display={{ base: 'flex', xl: 'none' }}
                    onClick={() => {
                        onToggle();
                    }}
                >
                    {isOpen ? <CloseIcon color='text.100' w={3} h={3} /> : <HamburgerIcon w={6} h={6} color='text.100' />}
                </Box>
            </Flex>

            <DrawerItem pbody='0px' onClose={onClose} isOpen={isOpen} logo='/Logo.svg'>
                <Box mt='10px'>
                    <MobileNav onCloseMenu={onClose} />
                </Box>
            </DrawerItem>
        </Box>
    );
};

export default Header;
