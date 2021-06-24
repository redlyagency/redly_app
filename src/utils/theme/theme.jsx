export const colors = {
    bg_gradient: 'linear-gradient(90deg, #FFFFFF, #E8E8E8)',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#5D5D5D',
    darkergray: '#1C1C1C',
    lightergray: '#E3E3E3',
    transparent: 'transparent'
};
export const fontSize = {
    //desktop version
    DA_15: '15px',
    DB_17: '17px',
    DBB_15: '15px',
    DBBB_15: '13px',
    DC_18: '18px',
    DD_18_5: '18.5px',
    DE_35: '35px',
    DF_47: '47px',
    DFF_40: '40px',
    DFFF_29: '29px',
    DG_58: '58px',
    DGG_58: '52px',
    //mobile version
    //MA_15: '15px',
    MB_17: '17px',
    MD_18_5: '16px',
    //ME_35: '35px',
    MF_34: '34px'
    //modify it!
}
const margin = {
    default: '20%',
    mobile: '5%',
    
}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '767px',
    tablet: '991px',
    laptop: '1199px',
    laptopL: '1440px',
    desktop: '2560px',
    browserviewportheight: '1100px'
}
export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktopL})`,
    browserzoom: `(min-height: ${size.browserviewportheight})`
};

export const theme = {
    colors, //all colors used in that project.
    fontSize, //all font size used in that project.
    device, //all media breakpoints in that project.
    margin, //all margin data used in that project.
};