

//to edit
//to edit
//to edit





export const colors = {
    bg_gradient: 'linear-gradient(90deg, #FFFFFF, #E8E8E8)',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#5D5D5D',
    lightergray: '#E3E3E3',
};
const margin = {
    default: '4%',
}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
};

export const theme = {
    colors, //all colors used in that project.
    device, //all media breakpoints in that project.
    margin, //all margin data used in that project.
};