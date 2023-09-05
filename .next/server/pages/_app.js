"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Menu = ({ navItem  })=>{
    const menu = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const handleClickScroll = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        onClick: ()=>{
            menu.onOpen();
        },
        alignItems: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            onClick: ()=>handleClickScroll(navItem.href || ""),
            p: "0px 10px",
            w: "100%",
            cursor: "pointer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                _hover: {
                    color: "#64a152"
                },
                fontWeight: 700,
                fontSize: 16,
                txt: navItem.label
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MobileMenu = ({ navItem , onCloseMenu  })=>{
    const handleClickScroll = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        cursor: "pointer",
        align: "center",
        justify: "space-between",
        alignItems: "center",
        _hover: {
            textDecoration: "none"
        },
        p: "10px 0",
        borderBottom: "1px solid #2c2b38",
        onClick: ()=>{
            onCloseMenu();
            handleClickScroll(navItem.href || "");
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            w: "100%",
            fontWeight: 700,
            fontSize: 16,
            txt: navItem.label
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6134);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var components_common_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1037);
/* harmony import */ var components_common_DrawerItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8579);
/* harmony import */ var config_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9145);
/* harmony import */ var data_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2533);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8324);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, components_common_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_3__, components_common_DrawerItem__WEBPACK_IMPORTED_MODULE_4__, _Menu__WEBPACK_IMPORTED_MODULE_7__, _MobileMenu__WEBPACK_IMPORTED_MODULE_8__]);
([_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, components_common_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_3__, components_common_DrawerItem__WEBPACK_IMPORTED_MODULE_4__, _Menu__WEBPACK_IMPORTED_MODULE_7__, _MobileMenu__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Header = ()=>{
    const { isOpen , onToggle , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const DesktopNav = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            direction: "row",
            spacing: 4,
            className: "stack-header",
            children: config_header__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((navItem, k)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        navItem: navItem
                    })
                }, Number(k));
            })
        });
    };
    const MobileNav = ({ onCloseMenu  })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    p: "4px 24px 0 24px",
                    display: {
                        xl: "none"
                    },
                    bg: "bg.100",
                    children: config_header__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((navItem, k)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            onCloseMenu: onCloseMenu,
                            navItem: navItem
                        }, k))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    href: "https://app.uniswap.org/#/swap",
                    target: "_blank",
                    _hover: {
                        textDecoration: "none"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        fsText: "14px",
                        fwText: 700,
                        content: "BUY $POPOY",
                        m: "14px 0 0 24px",
                        colorText: "text.500",
                        mtText: "3px",
                        bg: "text.100",
                        borderRadius: "50px"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    alignItems: "center",
                    gap: "10px",
                    p: "14px 0 10px 24px",
                    children: data_banner__WEBPACK_IMPORTED_MODULE_6__/* .LIST_SOCIAL_NETWORK.map */ .x.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                            href: item.href,
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                src: item.icon,
                                w: "30px",
                                h: "30px",
                                alt: "social"
                            })
                        }, item.name))
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        className: "maxW",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                borderStyle: "solid",
                justifyContent: "space-between",
                alignItems: "center",
                p: {
                    base: "15px 16px 20px 16px",
                    xl: "15px 25px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            src: "/Logo.svg",
                            w: {
                                base: "100px",
                                md: "120px"
                            },
                            alt: "logo",
                            h: "100%"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        display: {
                            base: "none",
                            xl: "flex"
                        },
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopNav, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        gap: "20px",
                        mr: {
                            base: "10px",
                            xl: "unset"
                        },
                        alignItems: "center",
                        justifyContent: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                            href: "https://app.uniswap.org/#/swap",
                            target: "_blank",
                            _hover: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                colorText: "text.500",
                                fsText: "14px",
                                fwText: 700,
                                content: "BUY $POPOY",
                                display: {
                                    base: "none",
                                    xl: "block"
                                },
                                bg: "text.100",
                                borderRadius: "50px",
                                mtText: "3px"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "40px",
                        h: "46px",
                        bg: "bg.100",
                        cursor: "pointer",
                        borderRadius: "4px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: {
                            base: "flex",
                            xl: "none"
                        },
                        onClick: ()=>{
                            onToggle();
                        },
                        children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {
                            color: "text.100",
                            w: 3,
                            h: 3
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.HamburgerIcon, {
                            w: 6,
                            h: 6,
                            color: "text.100"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_DrawerItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pbody: "0px",
                onClose: onClose,
                isOpen: isOpen,
                logo: "/Logo.svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                    onCloseMenu: onClose
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1484);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _Header__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _Header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 162).then(__webpack_require__.bind(__webpack_require__, 8162)), {
    loadableGenerated: {
        modules: [
            "../components/Layout/index.tsx -> " + "./Footer"
        ]
    }
});
const Layout = ({ children  })=>{
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        bg: "bg.100",
        children: mounted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    zIndex: 999,
                    right: "0px",
                    bg: "rgba(255,255,255,.85)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Seo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./config/index.tsx
const BASE_LINK = `${"https://popoy-memes.vercel.app"}`;

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Seo/index.tsx




const defaultMeta = {
    title: "Popoy",
    siteName: "Popoy",
    description: "Welcome to Popoy – Where laughter knows no bounds, and the pursuit of joy brings us closer to the stars! Together, let's create a universe filled with love, laughter, and endless entertainment!",
    url: `${BASE_LINK}`,
    type: "website",
    robots: "nofollow, noindex",
    image: "/images/Coin.svg"
};
function Seo(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const meta = {
        ...defaultMeta,
        ...props
    };
    meta["title"] = props.templateTitle || meta.title;
    meta["description"] = props.description || meta.description;
    meta["canonical"] = `${meta.url}${props.canonical || router.asPath}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: meta.robots
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: meta.canonical
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                hrefLang: "en",
                href: meta.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/images/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "image",
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@popoy_eth"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            })
        ]
    });
};


/***/ }),

/***/ 1037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ButtonBase({ content ="" , fsText , fwText , iconLeft , iconRight , colorText , nameCoin , mtText , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        _hover: {},
        _active: {},
        ...props,
        alignItems: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            alignItems: "center",
            children: [
                iconLeft,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    ml: iconLeft ? "8px" : "unset",
                    mr: iconRight ? "8px" : "unset",
                    txt: content,
                    fontSize: fsText,
                    fontWeight: fwText,
                    color: colorText,
                    mt: mtText
                }),
                iconRight,
                nameCoin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    txt: nameCoin,
                    fontSize: fsText,
                    fontWeight: fwText,
                    color: colorText,
                    ml: "8px"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DrawerItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__, _FlexBox__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__, _FlexBox__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function DrawerItem({ onClose , onCloseRightSideBar , isOpen =false , txt , children , mb , pbody , mt , logo  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        placement: "top",
        onClose: onClose,
        isOpen: isOpen,
        size: "full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerOverlay, {
                zIndex: 20
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {
                zIndex: 20,
                p: "18px 0",
                bg: "bg.100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, {
                        zIndex: 20,
                        mt: mt,
                        p: pbody,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                justifyContent: "space-between",
                                p: "0 0 0 24px",
                                alignItems: "center",
                                mb: mb,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerCloseButton, {
                                        m: "10px 8px 0 0",
                                        onClick: onCloseRightSideBar,
                                        _focusVisible: {
                                            boxShadow: "none !important"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CloseButton, {
                                            color: "text.100"
                                        })
                                    }),
                                    txt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Text_TemplateText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        txt: txt,
                                        fontSize: 20,
                                        fontWeight: 700
                                    }),
                                    logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: logo,
                                        w: "100px",
                                        h: "100%",
                                        alt: logo
                                    })
                                ]
                            }),
                            children
                        ]
                    }),
                    "1"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FlexBox = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        justifyContent: "center",
        ...props,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const TemplateText = ({ txt , fontSize =14 , fontWeight =500 , color , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        ...props,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color || "text.100",
        dangerouslySetInnerHTML: {
            __html: txt
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NAV_ITEMS = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "How to buy",
        href: "#howtobuy"
    },
    {
        label: "Tokenomics",
        href: "#tokenomics"
    },
    {
        label: "Roadmap ",
        href: "#roadmap"
    },
    {
        label: "Stickers",
        href: "#"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NAV_ITEMS);


/***/ }),

/***/ 2533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ LIST_SOCIAL_NETWORK)
/* harmony export */ });
const LIST_SOCIAL_NETWORK = [
    {
        icon: "/images/social/twitter.svg",
        name: "twitter",
        href: "https://twitter.com/popoy_eth"
    },
    {
        icon: "/images/social/telegram.svg",
        name: "telegram",
        href: "https://t.me/popoy_eth"
    },
    {
        icon: "/images/social/telegram.svg",
        name: "telegram1",
        href: "https://t.me/popoy_community"
    }, 
];


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(501);
/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5374);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_Layout__WEBPACK_IMPORTED_MODULE_2__, _styles_theme__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, components_Layout__WEBPACK_IMPORTED_MODULE_2__, _styles_theme__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                templateTitle: "Popoy"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ breakpoints)
/* harmony export */ });
const breakpoints = {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1650px"
};


/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
/** extend additional color here */ const extendedColors = {
    text: {
        100: "#1E1E1E",
        200: "#7C7C7E",
        300: "#d6d5e1",
        400: "#b7becb",
        500: "#eff3fb",
        600: "#737373"
    },
    black: {
        100: "#505052"
    },
    red: {
        100: "#F94243",
        200: "#E53A35"
    },
    green: {
        100: "#5CFEA7",
        200: "#009A51"
    },
    gray: {
        100: "#777E90",
        200: "#E5E5E5",
        300: "#9B9B9E",
        400: "#252A3F",
        500: "#7C7C7E"
    },
    white: {
        100: "#FFFF"
    },
    bg: {
        100: "#fff",
        200: "#162239",
        300: "#273550",
        500: "#0B132E",
        600: "#F6F7F9",
        700: "#EFF0F2"
    },
    blue: {
        100: "#106CFF",
        200: "#116CFF",
        300: "#116BFF",
        400: "#116CFF",
        500: "#008FFF"
    },
    blueWhite: {
        100: "#008FFF",
        200: "#E2F2FF"
    }
};
/** override chakra colors here */ const overridenChakraColors = {};
const colors = {
    ...overridenChakraColors,
    ...extendedColors
};


/***/ }),

/***/ 9390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ components)
});

;// CONCATENATED MODULE: ./styles/theme/components/button.ts
const Button = {
};

;// CONCATENATED MODULE: ./styles/theme/components/index.ts

const components = {
    Button: Button
};


/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ fonts)
/* harmony export */ });
const fonts = {
    // body: 'Roboto, system-ui, "Segoe UI", Helvetica, Arial, sans-serif',
    body: "ABeeZee"
};


/***/ }),

/***/ 5833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2210);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3912);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9546);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9390);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1274);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(704);
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    fonts: _fonts__WEBPACK_IMPORTED_MODULE_5__/* .fonts */ .R,
    colors: _colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O,
    config: _config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .v,
    components: _components__WEBPACK_IMPORTED_MODULE_3__/* .components */ .w,
    breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints */ .A,
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_6__/* .shadows */ .q
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customTheme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ shadows)
/* harmony export */ });
const shadows = {
    outline: "0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)"
};


/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();