

//to edit
//to edit
//to edit





export const colors = {
    bg_gradient: 'linear-gradient(90deg, #FFFFFF, #E8E8E8)',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#5D5D5D',
    lightergray: '#E3E3E3',
    transparent: 'transparent'
};
const margin = {
    default: '20%',
    mobile: '5%',
    
}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
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
    device, //all media breakpoints in that project.
    margin, //all margin data used in that project.
};